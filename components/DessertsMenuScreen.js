import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Pressable } from 'react-native';
import ModelPage from './modelPage';

export default function MainsMenuScreen({ navigation }) {

  const pageData = {

    title: "Desserts",
    menuItems : [
      {name: "Caramel Pudding", price: 150, description: "A smooth custard with a caramel topping.", image: require("../assets/images/caramel.jpg")},
      {name: "Panna Cotta", price: 200, description: "Creamy panna cotta with mango topping.", image: require("../assets/images/pannha.jpg")},
      {name: "Vanilla Cream Cheese", price: 100, description: "A delightful vanilla-flavored dessert.", image: require("../assets/images/vanila.jpg")}
    ]
  }
  return (
      <ModelPage navigation={navigation} title={pageData.title} listOfMenuItems={pageData.menuItems}/>
  );
}


