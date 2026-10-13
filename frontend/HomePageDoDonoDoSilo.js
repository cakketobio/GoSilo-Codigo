//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function HomePageDoDonoDoSilo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Inicial do Dono do Silo</Text>
       <View style={styles.botoesContainer}>
        <Button 
          title="Acompanhar Leilões" 
          onPress={() => navigation.navigate('LeilõesNosArredoresDoDonoDoSilo')} 
          />
        <Button 
          title="Meus Leilões" 
          onPress={() => navigation.navigate('LeilõesDoDonoDoSilo')} 
          />  
        <Button 
          title="Perfil" 
          onPress={() => navigation.navigate('PerfilDoDonoDoSilo')} 
          />
           <Button 
         title="Voltar" 
          onPress={() => navigation.navigate('Login')} 
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
