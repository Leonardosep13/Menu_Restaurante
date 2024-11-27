import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../SupaBase';

const CatalogScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('Platillos')
          .select('id, Comida, Precio, Imagen, Descripcion');
        if (error) throw error;
        setData(data);
      } catch (error) {
        console.log('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;

  return (
    <ImageBackground source={{ uri: 'https://thumbs.dreamstime.com/b/men%C3%BA-del-restaurante-fondo-blanco-con-letras-y-l%C3%ADneas-doradas-estampadas-emblema-de-monta%C3%B1a-deluxe-lujo-hq-261531070.jpg' }} style={styles.background}>
      <View style={styles.overlay}>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            {data ? (
              data.map((item) => (
                <TouchableOpacity 
                  key={item.id} 
                  style={styles.card} 
                  onPress={() => navigation.navigate('Pedido', { item })} // Pasamos el objeto item como parámetro
                >
                  <Text style={styles.title}>{item.Comida}</Text>
                  <Text>Precio: {item.Precio} $</Text>
                  <Text>Descripcion: {item.Descripcion}</Text>
                  {item.Imagen && (
                    <Image
                      source={{ uri: item.Imagen }}
                      style={styles.image}
                    />
                  )}
                </TouchableOpacity>
              ))
            ) : (
              <Text>No se encontraron datos.</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
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
});

export default CatalogScreen;

