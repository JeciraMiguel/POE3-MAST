import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../components/HomeScreen';
import StartersMenuScreen from '../../components/StartersMenuScreen';
import MainsMenuScreen from '../../components/MainsMenuScreen';
import DessertsMenuScreen from '../../components//DessertsMenuScreen';
import ModelPage from '@/components/modelPage';
import MenuManage from "@/components/menuManage"

const Stack = createStackNavigator();


export default function App() {
  return (
   
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ItemDetails" component={ModelPage} />
        <Stack.Screen name="MenuManage" component={MenuManage} />
        
      </Stack.Navigator>
  
  );
}
