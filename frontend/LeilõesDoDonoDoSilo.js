//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function LeilõesDoDonoDoSilo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Leilões do Dono do Silo</Text>
       <View style={styles.botoesContainer}>
        <Button 
          title="Acompanhar Leilões" 
          onPress={() => navigation.navigate('LeilõesNosArredoresDoDonoDoSilo')} 
          />
        <Button 
          title="Criar Novo Anúncio de Leilão" 
          onPress={() => navigation.navigate('CriaçãoDeAnuncioDoDonoDoSilo')} 
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
