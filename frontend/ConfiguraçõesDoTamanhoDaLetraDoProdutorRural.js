//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function ConfiguraçõesDoTamanhoDaLetraDoProdutorRural({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações do Tamanho da Letra do Produtor Rural</Text>
        <View style={styles.botoesContainer}> 
        <Button 
          title="Tamanho da Letra" 
          onPress={() => navigation.navigate('')} 
          />
        <Button 
          title="Voltar" 
          onPress={() => navigation.navigate('ConfiguraçõesDoProdutorRural')} 
          />
      </View>
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
    width: '20%',
    gap: 12, 
  },
});
