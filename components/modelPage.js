import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Pressable } from 'react-native';

const ItemsInformations = [
    {   title : "Mains", 
        menuItems : [
          {name : "Grilled Octopus", price : 150, description : "Tender grilled octopus with delightful flavors", image:require("../assets/images/optopus.jpg")},
          {name: "Simple Pasta",   price: 100,   description: "A classic, comforting pasta dish.", image:require("../assets/images/pasta.jpg")  },
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


export default function ModelPage({ navigation, route }) {

 const {menuItems, title} = route.params


  return (
    
    <ScrollView style={styles.container}>

      <BackToHome navigation={navigation} />
      <MenuHeader title={title} />
      {
        menuItems.map((menuItem, i)=>(
          <MenuItem key={i} name={menuItem.name} price={menuItem.price} description={menuItem.description} image={menuItem.image} />
        ))
      }
      
    </ScrollView>
  );
}


function MenuItem({name, price, description, image}){

 
  return ( 
      <View style={styles.menuItem}>
        <Image source={image} style={styles.image} />
        <View style={{width:"60%"}}>
            <Text style={styles.dish}>{name}</Text>
            <Text style={{color:"#c6a17e", textAlign:"right",textDecorationStyle:"solid",  textDecorationLine:"underline", textDecorationColor:"#c6a17e"}}> _____________________________________</Text>
            <Text style={styles.price}>R{price}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
      </View>
  )
}

function MenuHeader({title}){

  return(
    <>
      <Text style={styles.header1}>{title} </Text>
      <Text style={styles.header2}>Menu</Text>
    </>
  )
}

function BackToHome({navigation}){
  return (
    <Pressable  style={styles.backButton} onPress={() => navigation.navigate('Home')}>
      <Text style={{fontSize:22, textAlign:"center", verticalAlign:"center"}} >Back to Home</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ead7ba',
    },
    header1: {
      fontSize: 80,
      color: '#8d3d3f',
      marginBottom: 20,
      fontFamily:"GreatVibes",
      textAlign:"right"
    },
    header2: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#8d3d3f',
      marginBottom: 20,
      marginTop:-70,
      textAlign:"right",
      marginRight:20
    },
    menuItem: {
      marginTop:10,
      marginBottom: 20,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      width:"100%"
    },
    dish: {
  
      textAlign:"right",
      fontSize: 22,
      fontWeight: 'bold',
      color:"#4c1c2b"
    },
    price: {
      fontSize: 18,
      textAlign:"right",
      color: '#8d3d3f',
    },
    description: {
      fontSize: 16,
      color: '#333',
      textAlign: "justify",
    },
    backButton: {
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:"50%",
      height:50,
      borderRadius:10,  
      marginTop: 40,
      fontSize: 18,
      color: '#8d3d3f',
      textAlign: 'left',
      backgroundColor:"#bd946e"
  
    },
    image: {
      width: "35%",
      height: 150,
      borderRadius: 75,
      marginRight: 20, // espaço entre a imagem e o texto da sugestão
  
    },
  });
