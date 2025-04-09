import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './screens/login';
import Estoque from './screens/estoque';
import { NavigationContainer } from '@react-navigation/native';

function DrawerNavigation(){
  const Drawer = createDrawerNavigator();

  <Drawer.Navigator>
    <Drawer.Screen name='Estoque' component={Estoque}></Drawer.Screen>
  </Drawer.Navigator>
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen name='Login' component={Estoque} ></Stack.Screen>
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
