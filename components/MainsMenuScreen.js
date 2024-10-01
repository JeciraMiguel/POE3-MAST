import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image, Pressable } from 'react-native';

export default function MainsMenuScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

     <Pressable  style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={{fontSize:22, textAlign:"center", verticalAlign:"center"}} >Back to Home</Text>
      </Pressable>


      <Text style={styles.header1}>Mains </Text>
      <Text style={styles.header2}>Menu</Text>

      <View style={styles.menuItem}>
        <Image source={require('../assets/images/optopus.jpg')} style={styles.image} />
        <View style={{width:"60%"}}>
            <Text style={styles.dish}>Grilled Octopus</Text>
            <Text style={{color:"#c6a17e", textAlign:"right",textDecorationStyle:"solid",  textDecorationLine:"underline", textDecorationColor:"#c6a17e"}}> _____________________________________</Text>
            <Text style={styles.price}>R150</Text>
            <Text style={styles.description}>Tender grilled octopus with delightful flavors.</Text>
        </View>
      </View>


      <View style={styles.menuItem}>
        <Image source={require('../assets/images/pasta.jpg')} style={styles.image} />
        <View style={{width:"60%"}}>
            <Text style={styles.dish}>Simple Pasta</Text>
            <Text style={{color:"#c6a17e", textAlign:"right",textDecorationStyle:"solid",  textDecorationLine:"underline", textDecorationColor:"#c6a17e"}}> _____________________________________</Text>
            <Text style={styles.price}>R100</Text>
            <Text style={styles.description}>A classic, comforting pasta dish.</Text>
        </View>
      </View>

      <View style={styles.menuItem}>
        <Image source={require('../assets/images/beef.jpg')} style={styles.image} />
        <View style={{width:"55%"}}>
            <Text style={styles.dish}>Roasted Beef</Text>
            <Text style={{color:"#c6a17e", textAlign:"right",textDecorationStyle:"solid",  textDecorationLine:"underline", textDecorationColor:"#c6a17e"}}> _____________________________________</Text>
            <Text style={styles.price}>R200</Text>
            <Text style={styles.description}>Juicy beef with heavy seasoning.</Text>
        </View>
      </View>
      
    </ScrollView>
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