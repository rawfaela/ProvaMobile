import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Estoque from './screens/estoque';
import Fale from './screens/fale';

function DrawerNavigation(){
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Estoque' component={Estoque}></Drawer.Screen>
      <Drawer.Screen name='Fale Conosco' component={Fale}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} ></Stack.Screen>
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation}></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
