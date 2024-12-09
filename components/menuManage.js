
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  View,  Text,  Button,  FlatList,  StyleSheet,  Image, TextInput} from 'react-native';


// Dados disponíveis
const ItemsInformations = [
    {
      title: "Mains",
      menuItems: [
        { name: "Grilled Octopus", price: 150, description: "Tender grilled octopus with delightful flavors", image: require("../assets/images/optopus.jpg") },
        { name: "Simple Pasta", price: 150, description: "A classic, comforting pasta dish.", image: require("../assets/images/pasta.jpg") },
        { name: "Roasted Beef", price: 200, description: "Juicy beef with heavy seasoning.", image: require("../assets/images/beef.jpg") },
      ],
    },
    {
      title: "Desserts",
      menuItems: [
        { name: "Caramel Pudding", price: 150, description: "A smooth custard with a caramel topping.", image: require("../assets/images/caramel.jpg") },
        { name: "Panna Cotta", price: 200, description: "Creamy panna cotta with mango topping.", image: require("../assets/images/pannha.jpg") },
        { name: "Vanilla Cream Cheese", price: 100, description: "A delightful vanilla-flavored dessert.", image: require("../assets/images/vanila.jpg") },
      ],
    },
    {
      title: "Starters",
      menuItems: [
        { name: "Dumplings", price: 100, description: "Savory pockets of deliciousness.", image: require("../assets/images/toasty.jpg") },
        { name: "Fried Fish", price: 200, description: "Golden fried fish with a crispy texture.", image: require("../assets/images/dumpling.jpg") },
        { name: "Crispy Toasty", price: 150, description: "Crispy toast topped with savory ingredients", image: require("../assets/images/fish.jpg") },
      ],
    },
  ];
  
  const ManageMenu = ({ navigation }) => {
    const [category, setCategory] = useState(ItemsInformations[0].title);
    const [selectedItem, setSelectedItem] = useState(ItemsInformations[0].menuItems[0].name);
    const [quantity, setQuantity] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [filterCategory, setFilterCategory] = useState('All');
  
    // Carregar itens salvos
    useEffect(() => {
      const loadItems = async () => {
        const savedItems = await AsyncStorage.getItem("menuItems");
        if (savedItems) {
          setMenuItems(JSON.parse(savedItems));
        }
      };
      loadItems();
    }, []);
  
    // Salvar itens ao atualizar
    useEffect(() => {
      AsyncStorage.setItem("menuItems", JSON.stringify(menuItems));
    }, [menuItems]);
  
    const handleAddItem = () => {
      if (!quantity || isNaN(quantity) || quantity <= 0) {
        alert("Por favor, insira uma quantidade válida!");
        return;
      }
  
      const categoryData = ItemsInformations.find((item) => item.title === category);
      const itemData = categoryData.menuItems.find((item) => item.name === selectedItem);
  
      if (itemData && !menuItems.some((menuItem) => menuItem.name === itemData.name)) {
        setMenuItems([
          ...menuItems,
          { ...itemData, id: Date.now(), category, quantity: parseInt(quantity) },
        ]);
        setQuantity('');
      }
    };
  
    const handleRemoveItem = (id) => {
      setMenuItems(menuItems.filter((item) => item.id !== id));
    };
  
    const filteredItems =
      filterCategory === 'All'
        ? menuItems
        : menuItems.filter((item) => item.category === filterCategory);
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Button title="Voltar" onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Gerenciar Menu</Text>
        </View>
  
        {/* Formulário */}
        <View style={styles.form}>
          <Text style={styles.label}>Categoria</Text>
          <Picker
            selectedValue={category}
            onValueChange={(value) => {
              setCategory(value);
              setSelectedItem(ItemsInformations.find((item) => item.title === value).menuItems[0].name);
            }}
            style={styles.picker}
          >
            {ItemsInformations.map((item) => (
              <Picker.Item key={item.title} label={item.title} value={item.title} />
            ))}
          </Picker>
  
          <Text style={styles.label}>Item</Text>
          <Picker
            selectedValue={selectedItem}
            onValueChange={(value) => setSelectedItem(value)}
            style={styles.picker}
          >
            {ItemsInformations.find((item) => item.title === category).menuItems.map((item) => (
              <Picker.Item key={item.name} label={item.name} value={item.name} />
            ))}
          </Picker>
  
          <Text style={styles.label}>Quantidade</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            placeholder="Insira a quantidade"
          />
  
          <Button title="Adicionar" onPress={handleAddItem} />
        </View>
  
        {/* Filtro */}
        <View style={styles.filter}>
          <Text style={styles.label}>Filtrar por Categoria</Text>
          <Picker
            selectedValue={filterCategory}
            onValueChange={(value) => setFilterCategory(value)}
            style={styles.picker}
          >
            <Picker.Item label="Todos" value="All" />
            {ItemsInformations.map((item) => (
              <Picker.Item key={item.title} label={item.title} value={item.title} />
            ))}
          </Picker>
        </View>
  
        {/* Lista de Itens */}
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>Preço: ${item.price}</Text>
                <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
              </View>
              <Button title="Remover" onPress={() => handleRemoveItem(item.id)} color="red" />
            </View>
          )}
        />
      </View>
    );
  };
  
  export default ManageMenu;
  
  // Estilos
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    form: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    picker: {
      marginBottom: 10,
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    filter: {
      marginBottom: 20,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    itemDetails: {
      flex: 1,
      marginLeft: 10,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 5,
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    itemDescription: {
      color: '#666',
      marginVertical: 5,
    },
    itemPrice: {
      fontWeight: 'bold',
      color: '#000',
    },
    itemQuantity: {
      color: '#000',
    },
  });