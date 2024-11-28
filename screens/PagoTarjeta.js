import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Button,Alert } from 'react-native';

export default class PagoTarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumTarjeta: '',
      FechaCaducidad: '',
      CVV: '',
    };
  }

  render() {
    const { navigation } = this.props; // Accede a la navegación desde las props

    const sigVentana = () =>
    {
      Alert.alert("Su pago ha sido recibido correctamente :D")
      navigation.navigate('PedidoRecibido')
    }

    return (
      <ImageBackground
        source={{
          uri: 'https://us.123rf.com/450wm/alexraths/alexraths1509/alexraths150900009/44625671-fije-la-tarjeta-de-men%C3%BA-para-restaurantes-en-el-fondo-de-madera.jpg',
        }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={{ marginTop: 50 }}>
            <TextInput
              style={styles.inputTarjetaNum}
              placeholder="Número de tarjeta"
              placeholderTextColor="white"
              keyboardType="numeric"
              onChangeText={(NumTarjeta) => this.setState({ NumTarjeta })}
              value={this.state.NumTarjeta} // Sincroniza el estado con el campo
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.inputTarjetaFecha}
              placeholder="Fecha de caducidad"
              placeholderTextColor="white"
              keyboardType="numeric"
              onChangeText={(FechaCaducidad) => this.setState({ FechaCaducidad })}
              value={this.state.FechaCaducidad}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.inputTarjetaCVV}
              placeholder="CVV"
              placeholderTextColor="white"
              keyboardType="numeric"
              secureTextEntry={true}
              onChangeText={(CVV) => this.setState({ CVV })}
              value={this.state.CVV}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Button
              title="Pagar"
              color="black"
              onPress={() => sigVentana() }
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    height: 950,
    marginTop: 90,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputTarjetaNum: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'black',
  },
  inputTarjetaFecha: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'black',
  },
  inputTarjetaCVV: {
    width: '40%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'black',
  },
});

