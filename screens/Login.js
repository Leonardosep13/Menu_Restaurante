import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, Image, Alert } from 'react-native';
import { supabase } from '../SupaBase'; // Asegúrate de que la importación sea correcta

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      contraseña: '',
      tempC: '',
      condition: '',
      log: false,  // Bandera de autenticación
    };
  }

  login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: this.state.correo,
      password: this.state.contraseña,
    });

    if (error) {
      Alert.alert("Error al iniciar sesión", "Asegúrese de que las credenciales sean correctas o estén llenos los campos");
    } else {
      this.setState({ log: true });
      this.props.navigation.navigate('Cocina', { log: this.state.log });
    }

    this.setState({
      correo: "",
      contraseña: ""
    });
  };


  render() {
    return (
      <ImageBackground source={{ uri: 'https://us.123rf.com/450wm/alexraths/alexraths1509/alexraths150900009/44625671-fije-la-tarjeta-de-men%C3%BA-para-restaurantes-en-el-fondo-de-madera.jpg' }} style={styles.background}>
        <View style={styles.overlay}>

          <View>
            <Text style={styles.text}>Bienvenido a</Text>
            <Text style={styles.text}>Restaurant Nexus</Text>
          </View>

          <View style={{ marginTop: 50, marginLeft: 75 }}>
            <TextInput
              style={styles.input}
              placeholder="Correo"
              placeholderTextColor="#aaa"
              onChangeText={correo => this.setState({ correo })}
            />
          </View>

          <View style={{ marginTop: 30, marginLeft: 75 }}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              onChangeText={contraseña => this.setState({ contraseña })}
            />
          </View>

          <View style={{ marginTop: 40, marginLeft: 5 }}>
            <Button title='Ingresar como cocinero' color='black' onPress={this.login} />
          </View>

          <View style={{ marginTop: 40, marginLeft: 5 }}>
            <Button title='Ingresar como cliente' color='black' onPress={() => this.props.navigation.navigate('Comida')} />
          </View>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    height: 950,
    marginTop: 90
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: '#fff',
    backgroundColor: 'black',
    marginTop: -15
  },
  weatherContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    alignItems: 'center', // Centra los elementos en la columna
  },
  weatherText: {
    color: '#fff',
    fontSize: 18,
    marginTop: -20, // Espacio entre el ícono y la temperatura
    marginLeft: 150
  },
  weatherIcon: {
    width: 110,
    height: 130,
    marginLeft: 140,
    marginTop: 540
  },
  logoIcon: {
    marginLeft: 120,
    height: 110,
    width: 140,
    marginTop: 50
  }
});
