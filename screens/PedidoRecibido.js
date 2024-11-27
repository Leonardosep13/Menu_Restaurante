import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet, Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default class PedidoRecibido extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { route, navigation } = this.props; // Asegúrate de pasar estas props desde el stack
    return (
    <ImageBackground source={{ uri: 'https://us.123rf.com/450wm/alexraths/alexraths1509/alexraths150900009/44625671-fije-la-tarjeta-de-men%C3%BA-para-restaurantes-en-el-fondo-de-madera.jpg' }} style={styles.background}>
      <View style={styles.overlay}>

        <View>
            <Image style={styles.image} source={{ uri: 'https://pa1.aminoapps.com/7096/d77f8487fe17efab5c91506ff4b210a7be77dec2r1-480-270_hq.gif' }} />
        </View>

        <View style={styles.buttonStyleMOD2}>
            <Text style={styles.buttonText}>Su pedido va en camino!!!</Text>
        </View>

        <View style={styles.buttonStyleMOD} >
            <TouchableOpacity onPress={() => navigation.navigate('Comida')}>
              <Text style={styles.buttonText}>Ordenar otro platillo</Text>
            </TouchableOpacity>
        </View>


      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
  
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color:"white"
    },
    price: {
      fontSize: 18,
      marginBottom: 10,
      color:"white"
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color:"white"
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 10,
      marginTop:"40%",
      marginLeft:"10%",
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 20,
      height: 950,
      marginTop: 90
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    buttonStyleMOD2: {
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop:'-120%',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'10%',
      marginLeft:'0%'
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },

    buttonStyleMOD: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop:'107%',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:'10%',
        marginLeft:'0%'
      },

  });
  