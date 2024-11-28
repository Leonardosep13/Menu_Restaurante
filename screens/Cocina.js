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
          .from('Pedidos')
          .select('id, ComidaPedido, Imagen, Entregado, Indicaciones');
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

  const handlePress = async (id) => {
    try {
      const { data, error } = await supabase
        .from('Pedidos')
        .update({ Entregado: true })
        .eq('id', id);
      if (error) throw error;

      // Update the local state to reflect the change
      setData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, Entregado: true } : item
        )
      );

    } catch (error) {
      console.log('Error al actualizar el estado de Entregado:', error);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;

  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/fotos-premium/chef-preparando-comida-cocina-restaurante_777271-3987.jpg' }} style={styles.background}>
      <View style={styles.overlay}>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            {data ? (
              data.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() => handlePress(item.id)}
                >
                  <Text style={styles.title}>{item.ComidaPedido}</Text>
                  <Text style={{ color: 'white' }}>Id del pedido: {item.id}</Text>
                  <Text style={{ color: 'white' }}>Entregado: {item.Entregado ? 'Sí' : 'No'}</Text>
                  <Text style={{ color: 'white' }}>Indicaciones: {item.Indicaciones}</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
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


