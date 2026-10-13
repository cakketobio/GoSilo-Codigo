//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function PerfilDoProdutorRural({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Produtor Rural</Text>
        <View style={styles.botoesContainer}> 
          <Button 
           title="Produtos Registrados" 
           onPress={() => navigation.navigate('CadastroDoProdutoPeloPerfilDoProdutorRural')} 
           />      
          <Button 
           title="Histórico de Leilões" 
           onPress={() => navigation.navigate('HistóricoDeLeilõesDoProdutorRural')} 
            />
          <Button 
            title="Configurações" 
            onPress={() => navigation.navigate('ConfiguraçõesDoProdutorRural')} 
            />
          <Button 
            title="Voltar" 
            onPress={() => navigation.navigate('HomePageDoProdutorRural')} 
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
    width: '25%',
    gap: 12, 
  },
});

