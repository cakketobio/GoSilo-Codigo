//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function LeilãoDoProdutorRural({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Leilão do Produtor Rural</Text>
        <Button 
          title="Voltar" 
          onPress={() => navigation.navigate('HomePageDoProdutorRural')} 
          />
    </View>
  );
}

//Espaçameto entre os botões e centralizador do título
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  botoesContainer: {
    width: '15%',
    gap: 12, 
  },
});
