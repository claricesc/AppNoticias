import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Home(props) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.titulo}> Senac News</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            props.navigation.navigate('Previsao');
          }}>
          <Text style={styles.textobnt}>Previsão do Tempo </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            props.navigation.navigate('Moedas');
          }}>
          <Text style={styles.textobnt}>Moedas e Bolsa de Valores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            props.navigation.navigate('Moedas');
          }}>
          <Text style={styles.textobnt}>News about the Word and beyond</Text>
        </TouchableOpacity>


      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  botao: {
    margin: 10,
    backgroundColor: '#6495ED',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal:22,
    paddingVertical:40,
    fontSize: 40,
  },
  titulo: {
    marginTop: 40,
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color:'orange',
  },
  textobnt:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
