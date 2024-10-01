import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
     <View style={{height:useWindowDimensions().height/3.5, backgroundColor:"#ead7ba", width:"100%", padding: 20, paddingTop: 50 }}>
        <Text style={styles.header1}>Chef </Text>
        <Text style={styles.header2}>Christoffel</Text>

      </View>

      <View style={{...styles.menuContainer, height:useWindowDimensions().height/2 }}>
        <Text style={styles.subHeader}>CHEF'S MENU</Text>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Starters')}>
          <Text style={styles.menuText}>Starters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Mains')}>
          <Text style={styles.menuText}>Mains</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Desserts')}>
          <Text style={styles.menuText}>Desserts</Text>
        </TouchableOpacity>
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
    marginVertical: 15, // margem vertical entre os itens do menu
    padding: 10, // preenchimento interno para melhorar o toque
  },
  menuText: {
    fontSize: 50,
    fontFamily:"GreatVibes",
    color: '#5b2f38',
    marginBottom:0,
    marginTop:-50

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
