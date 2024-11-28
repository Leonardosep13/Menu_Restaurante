import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COMIDAS from './screens/Comidas';
import PEDIDO from './screens/Pedido'
import PAGOTARJETA from './screens/PagoTarjeta'
import PEDIDORECIBIDO from './screens/PedidoRecibido'
import LOGIN from './screens/Login'
import COCINA from './screens/Cocina';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LOGIN} options={{ headerShown: false }} />
          <Stack.Screen name="Cocina" component={COCINA} options={{ headerShown: false }} />
          <Stack.Screen name="Comida" component={COMIDAS} options={{ headerShown: false }} />
          <Stack.Screen name="Pedido" component={PEDIDO} options={{ headerShown: false }} />
          <Stack.Screen name="PagoTarjeta" component={PAGOTARJETA} options={{ headerShown: false }} />
          <Stack.Screen name="PedidoRecibido" component={PEDIDORECIBIDO} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>

    );
  }
}
