import React from 'react';
import { View, Text, Image, StyleSheet,ImageBackground,TouchableOpacity,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pedido({ route }) {
  const { item } = route.params;
  const navigation = useNavigation(); 
  
  const sigVentana = () =>
    {
      Alert.alert("Un mesero ira a recoger su pago")
      navigation.navigate('PedidoRecibido')
    }
  return (
    <ImageBackground source={{ uri: 'https://us.123rf.com/450wm/alexraths/alexraths1509/alexraths150900009/44625671-fije-la-tarjeta-de-men%C3%BA-para-restaurantes-en-el-fondo-de-madera.jpg' }} style={styles.background}>
     <View style={styles.overlay}>
    <View>
      <Text style={styles.title}>{item.Comida}</Text>
      <Text style={styles.price}>Precio: {item.Precio} $</Text>
      <Text style={styles.description}>Descripción: {item.Descripcion}</Text>
      {item.Imagen && (
        <Image
          source={{ uri: item.Imagen }}
          style={styles.image}
        />
      )}
    </View>

    <View style={styles.buttonStyleMOD} >
            <TouchableOpacity onPress={() => sigVentana()}>
              <Text style={styles.buttonText}>Pagar con efectivo</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.buttonStyleMOD2} >
            <TouchableOpacity onPress={() => navigation.navigate('PagoTarjeta')}>
              <Text style={styles.buttonText}>Pagar con tarjeta</Text>
            </TouchableOpacity>
    </View>


    </View>
    </ImageBackground>
  );
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
  buttonStyleMOD: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:'7%',
    alignItems: 'center',
    justifyContent: 'center',
    width:'40%',
    height:'20%',
    marginLeft:'0%'
  },
  buttonStyleMOD2: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:'-49%',
    alignItems: 'center',
    justifyContent: 'center',
    width:'40%',
    height:'20%',
    marginLeft:'55%'
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

