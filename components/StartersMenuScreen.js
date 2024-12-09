import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Pressable } from 'react-native';

export default function StartersMenuScreen({ navigation }) {

  const pageData = {

    title : "Starters", 
     menuItems : [
      {name: "Dumplings",     price: 100,   description: "Savory pockets of deliciousness.", image : require("../assets/images/toasty.jpg")  },
      { name: "Fried Fish",   price: 200,   description: "Golden fried fish with a crispy texture." , image: require("../assets/images/dumpling.jpg")},
      { name: "Crispy Toasty",   price: 150,   description: "Crispy toast topped with savory ingredients", image : require("../assets/images/fish.jpg") }
    ]
    
  }
  return (
        <ModelPage navigation={navigation} title={pageData.title} listOfMenuItems={pageData.menuItems}/>
  );
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
  
