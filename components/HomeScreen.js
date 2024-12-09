import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions, Pressable, Button } from 'react-native';

const ItemsInformations = [
  {   title : "Mains", 
      menuItems : [
        {name : "Grilled Octopus", price : 150, description : "Tender grilled octopus with delightful flavors", image:require("../assets/images/optopus.jpg")},
        {name: "Simple Pasta",   price: 150,   description: "A classic, comforting pasta dish.", image:require("../assets/images/pasta.jpg")  },
        {name: "Roasted Beef",   price: 200,    description: "Juicy beef with heavy seasoning.", image:require("../assets/images/beef.jpg") }
      ]
  },
  {
      title: "Desserts",
      menuItems : [
        {name: "Caramel Pudding", price: 150, description: "A smooth custard with a caramel topping.", image: require("../assets/images/caramel.jpg")},
        {name: "Panna Cotta", price: 200, description: "Creamy panna cotta with mango topping.", image: require("../assets/images/pannha.jpg")},
        {name: "Vanilla Cream Cheese", price: 100, description: "A delightful vanilla-flavored dessert.", image: require("../assets/images/vanila.jpg")}
      ]
  },
  {
      title : "Starters", 
      menuItems : [
       {name: "Dumplings",     price: 100,   description: "Savory pockets of deliciousness.", image : require("../assets/images/toasty.jpg")  },
       { name: "Fried Fish",   price: 200,   description: "Golden fried fish with a crispy texture." , image: require("../assets/images/dumpling.jpg")},
       { name: "Crispy Toasty",   price: 150,   description: "Crispy toast topped with savory ingredients", image : require("../assets/images/fish.jpg") }
     ]
  }
]


export default function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>

     <View style={{height:useWindowDimensions().height/3.5, backgroundColor:"#ead7ba", width:"100%", padding: 20, paddingTop: 50 }}>
        <Text style={styles.header1}>Chef</Text>
        <Text style={styles.header2}>Christoffel</Text>

      </View>

      <View style={{...styles.menuContainer, height:useWindowDimensions().height/2 }}>
        <Text style={styles.subHeader}>CHEF'S MENU</Text>
        <Button title='My Menu' onPress={()=>{

          navigation.navigate("MenuManage")

        }}/>

        <>

          {
            ItemsInformations.map((itemInformation, i)=>{

              const TotalOfPrices = itemInformation.menuItems.reduce(( total, item)=>{
                let price = item.price
                return total += price
              }, 0)

              

              const averagePrice = Math.round(TotalOfPrices / itemInformation.menuItems.length)
              
              return (

              <TouchableOpacity key={i} style={styles.menuItem} onPress={() => navigation.navigate('ItemDetails', {menuItems:itemInformation.menuItems, title:itemInformation.title })}>
                <Text style={styles.menuText}>{itemInformation.title}</Text>
                <Text style={styles.menuMeanPrice}> (Average Price : {averagePrice}) </Text>
              </TouchableOpacity>

            )})
          }

        </>

      </View>

      <View style={styles.suggestionContainer}>
        <Image source={require('../assets/images/burger.jpg')} style={styles.image} />
        <Pressable  style={styles.backButton} onPress={() => navigation.navigate('Mains')}>
            <View style={styles.suggestionTextContainer}>
              <Text style={styles.suggestionText}>Chef Suggestions</Text>
              <Text style={styles.dish}>Roasted Beef</Text>
            </View>
        </Pressable>


       
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:"100%",
    backgroundColor: '#d5b99a', // cor de fundo castanha clara
    alignItems: 'center',
// margem superior para dar mais espaço no topo
  },
  header1: {
    fontSize: 60,
    color: '#4d1d2c', // cor do texto "Chef Christoffel"
    marginBottom: 0, // margem inferior para separar do restante do conteúdo
    fontWeight:"bold",
    width:"100%",
  }
  ,
  header2: {
    fontSize: 100,
    color: '#7b4a27', // cor do texto "Chef Christoffel"
    marginLeft:20,
    marginTop:-70,
    marginBottom: 30, // margem inferior para separar do restante do conteúdo
    fontFamily:"GreatVibes",
    width:"100%",
   
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50, // margem inferior entre o menu e a sugestão do chef
  },
  subHeader: {
    
    fontSize: 18,
    fontWeight:"bold",
    color: '#000',
    marginTop:60,
    marginBottom: 80,
  },
  menuItem: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical: 5, // margem vertical entre os itens do menu
    padding: 10, // preenchimento interno para melhorar o toque
  },
  menuText: {
    fontSize: 40,
    fontFamily:"GreatVibes",
    color: '#5b2f38',

  },
  menuMeanPrice: {
    fontSize: 20,
    fontFamily:"Monseratt",
    color: '#000',
    marginTop:10,
  },
  suggestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-30,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginRight: 10, 
    marginLeft:-50
  },
  suggestionTextContainer: {
    justifyContent: 'center',
  },
  suggestionText: {
    marginTop:-30,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#8d3d3f',
    textAlign:"text",

    marginBottom: 5, // margem entre o título da sugestão e o nome do prato
  },
  dish: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b322a',
    textAlign:"center",
    fontStyle:"italic"
  },
});
