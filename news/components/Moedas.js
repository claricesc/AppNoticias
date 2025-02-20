import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, TextInput, ScrollView, Image, Button } from 'react-native';

export default function App() {
  const [valorDolar, setValorDolar] = useState('');
  const [valorEuro, setValorEuro] = useState('');
  const [valorIene, setValorIene] = useState('');
  const [valorReal, setValorReal] = useState('');
  const [error, setError] = useState('');


  const cotacaoDolar = 6.0597; 
  const cotacaoEuro = 6.0169;   
  const cotacaoIene = 0.0376;   

  const DadosDL = [
    { moeda: 'Dólar', cotacao: `R$ ${cotacaoDolar.toFixed(2)}`, img: require('./assets/tvc_758f71ab754daf6ac2b7b7e9eb4f9398.png') },
    { moeda: 'Euro', cotacao: `R$ ${cotacaoEuro.toFixed(2)}`, img: require('./assets/euro.png') },
    { moeda: 'Iene', cotacao: `R$ ${cotacaoIene.toFixed(4)}`, img: require('./assets/IENE.png') }
  ];

  
  const converterDolarParaReal = () => {
    if (valorDolar) {
      const resultado = parseFloat(valorDolar) * cotacaoDolar;
      setValorReal(resultado.toFixed(2));
      setError('');
    } else {
      setError('Por favor, insira um valor em Dólar');
    }
  };

  const converterRealParaDolar = () => {
    if (valorReal) {
      const resultado = parseFloat(valorReal) / cotacaoDolar;
      setValorDolar(resultado.toFixed(2));
      setError('');
    } else {
      setError('Por favor, insira um valor em Real');
    }
  };

  const converterEuroParaReal = () => {
    if (valorEuro) {
      const resultado = parseFloat(valorEuro) * cotacaoEuro;
      setValorReal(resultado.toFixed(2));
      setError('');
    } else {
      setError('Por favor, insira um valor em Euro');
    }
  };

  const converterRealParaEuro = () => {
    if (valorReal) {
      const resultado = parseFloat(valorReal) / cotacaoEuro;
      setValorEuro(resultado.toFixed(2));
      setError('');
    } else {
      setError('Por favor, insira um valor em Real');
    }
  };

  const converterIeneParaReal = () => {
    if (valorIene) {
      const resultado = parseFloat(valorIene) * cotacaoIene;
      setValorReal(resultado.toFixed(2));
      setError('');
    } else {
      setError('Por favor, insira um valor em Iene');
    }
  };

  const converterRealParaIene = () => {
    if (valorReal) {
      const resultado = parseFloat(valorReal) / cotacaoIene;
      setValorIene(resultado.toFixed(2));
      setError('');
    } else {
      setError('Por favor, insira um valor em Real');
    }
  };

  
  const limparDados = () => {
    setValorDolar('');
    setValorEuro('');
    setValorIene('');
    setValorReal('');
    setError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Bolsa de Valores e suas Conversões</Text>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <FlatList
            data={DadosDL}
            renderItem={({ item }) => (
              <View style={styles.dadosContainer}>
                <Text style={styles.dados}>{item.moeda}: {item.cotacao}</Text>
                <Image style={styles.img} source={item.img} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.inputContainer}>
            <Button title="Converter Dólar para Real" onPress={converterDolarParaReal} />
            <TextInput
              style={styles.input}
              placeholder="Valor em Dólar"
              keyboardType="numeric"
              value={valorDolar}
              onChangeText={setValorDolar}
            />
          </View>
          <View style={styles.inputContainer}>
            <Button title="Converter Real para Dólar" onPress={converterRealParaDolar} />
            <TextInput
              style={styles.input}
              placeholder="Valor em Real"
              keyboardType="numeric"
              value={valorReal}
              onChangeText={setValorReal}
            />
          </View>
          <View style={styles.inputContainer}>
            <Button title="Converter Euro para Real" onPress={converterEuroParaReal} />
            <TextInput
              style={styles.input}
              placeholder="Valor em Real"
              keyboardType="numeric"
              value={valorReal}
              onChangeText={setValorReal}
            />
          </View>

          <View style={styles.inputContainer}>
            <Button title="Converter Real para Euro" onPress={converterRealParaEuro} />
            <TextInput
              style={styles.input}
              placeholder="Valor em Euro"
              keyboardType="numeric"
              value={valorEuro}
              onChangeText={setValorEuro}
            />
          </View>

          <View style={styles.inputContainer}>
            <Button title="Converter Iene para Real" onPress={converterIeneParaReal} />
            <TextInput
              style={styles.input}
              placeholder="Valor em Iene"
              keyboardType="numeric"
              value={valorIene}
              onChangeText={setValorIene}
            />
          </View>

          <View style={styles.inputContainer}>
            <Button title="Converter Real para Iene" onPress={converterRealParaIene} />
            <TextInput
              style={styles.input}
              placeholder="Valor em Real"
              keyboardType="numeric"
              value={valorReal}
              onChangeText={setValorReal}
            />
          </View>

          {error && <Text style={styles.error}>{error}</Text>}
        </ScrollView>
        
        <View style={styles.footer}>
          {valorReal ? (
            <Text style={styles.result}>Resultado: R$ {valorReal}</Text>
          ) : valorDolar ? (
            <Text style={styles.result}>Resultado: ${valorDolar}</Text>
          ) : valorEuro ? (
            <Text style={styles.result}>Resultado: € {valorEuro}</Text>
          ) : valorIene ? (
            <Text style={styles.result}>Resultado: ¥ {valorIene}</Text>
          ) : null}
          <Button title="Limpar Dados" onPress={limparDados} color="#d32f2f" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fafafa',
    marginBottom: 30,
    padding: 10,
  },
  titulo: {
    fontSize: 36,
    marginTop: 25,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#1e88e5',
    color: '#fff',
    borderRadius: 5,
    fontWeight: 'bold',
  },
  dadosContainer: {
    margin: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  dados: {
    fontSize: 20,
    color: '#616161',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fafafa',
    fontSize: 16,
  },
  img: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  result: {
    fontSize: 20,
    color: '#1e88e5',
    marginTop: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: '#d32f2f',
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: -20
  },
});