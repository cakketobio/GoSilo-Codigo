//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function HistóricoDeLeilõesDoProdutorRural({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Leilões do Produtor Rural</Text>
        <View style={styles.botoesContainer}>  
        <Button 
          title="Ver Histórico de Conversas" 
          onPress={() => navigation.navigate('HistóricoDeConversasDoProdutorRural')} 
          />
        <Button 
          title="Voltar" 
          onPress={() => navigation.navigate('PerfilDoProdutorRural')} 
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
