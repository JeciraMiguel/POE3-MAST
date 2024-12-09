import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Pressable } from 'react-native';
import ModelPage from "./modelPage";

export default function MainsMenuScreen({ navigation }) {

  const pageData = {
    title : "Mains", 
    menuItems : [
      {name : "Grilled Octopus", price : 150, description : "Tender grilled octopus with delightful flavors", image:require("../assets/images/optopus.jpg")},
      {name: "Simple Pasta",   price: 100,   description: "A classic, comforting pasta dish.", image:require("../assets/images/pasta.jpg")  },
      {name: "Roasted Beef",   price: 200,    description: "Juicy beef with heavy seasoning.", image:require("../assets/images/beef.jpg") }
    ]
  }

  return (
      <ModelPage navigation={navigation} title={pageData.title} listOfMenuItems={pageData.menuItems}/>
  );
}



