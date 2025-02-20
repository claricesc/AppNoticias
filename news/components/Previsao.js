import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '5db2bde0e5194760bf1232144251302';
  const baseUrl = 'https://api.weatherapi.com/v1/current.json';

  const getWeather = async () => {
    if (!city) {
      setError('Informe o nome da cidade');
      return;
    }

    try {
      const response = await fetch(
        `${baseUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const data = await response.json();

      if (data.cod === '404') {
        setError('Cidade não encontrada.');
        setTemperature(null);
      } else {
        setError(null);
        setTemperature(data.main.temp);
      }
    } catch (error) {
      setError('Erro!! Tente novamente.');
      setTemperature(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Clima</Text>

      <ScrollView contentContainerStyle={styles.tempo}>
        <ScrollView horizontal style={styles.scrollHorizontal}></ScrollView>

        <Text style={styles.titulo2}>Buscar temperatura por cidade</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome da cidade"
          value={city}
          onChangeText={setCity}
        />

        <Button title="Buscar" onPress={getWeather} color="#1e88e5" />

        {error && <Text style={styles.error}>{error}</Text>}

        {temperature !== null && (
          <Text style={styles.result}>
            A temperatura em {city} é {temperature}°C.
          </Text>
        )}
        <View style={styles.imagem}>
          <Image
            style={styles.image}
            source={require('./assets/previsao1.png')}
          />
        </View>
        <View style={styles.imagem}>
          <Image
            style={styles.image}
            source={require('./assets/previsao2.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#042444',
    padding: 8,
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fafafa',
  },
  input: {
    height: 45,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#fff',
    backgroundColor: '#34495e',
    marginTop: '30',
  },
  tempo: {
    marginTop: 20,
    alignItems: 'center',
  },
  scrollHorizontal: {
    marginTop: 20,
    marginBottom: 20,
  },
  imagem: {
    width: 300,
    height: 300,
    marginTop:70,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  result: {
    fontSize: 18,
    color: '#1e88e5',
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: '#fafafa',
    textAlign: 'center',
    marginTop: 10,
  },
  titulo2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fafafa',
  },
});
