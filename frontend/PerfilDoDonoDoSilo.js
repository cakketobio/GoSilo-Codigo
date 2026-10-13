//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function PerfilDoDonoDoSilo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Dono do Silo</Text>
        <View style={styles.botoesContainer}>
        <Button 
          title="Silos Cadastrados" 
          onPress={() => navigation.navigate('SilosCadastradosDoDonoDoSilo')} 
          />
          <Button 
          title="Meus Anuncios" 
          onPress={() => navigation.navigate('LeilõesDoDonoDoSilo')} 
          />
          <Button 
          title="Histórico de Conversas" 
          onPress={() => navigation.navigate('HistóricoDeConversaDoDonoDoSilo')} 
          />
          <Button 
          title="Configurações da conta" 
          onPress={() => navigation.navigate('ConfiguraçõesDoDonoDoSilo')} 
          />
         <Button 
          title="Voltar" 
          onPress={() => navigation.navigate('HomePageDoDonoDoSilo')} 
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
    width: '30%',
    gap: 12, 
  },
});
