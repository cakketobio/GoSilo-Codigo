//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function SilosCadastradosDoDonoDoSilo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Silos Cadastrados do Dono do Silo</Text>
       <View style={styles.botoesContainer}>        
        <Button 
          title="Editar Silos Cadastrados" 
          onPress={() => navigation.navigate('EdiçãoSiloCadastro')} 
          />
        <Button 
          title="Voltar" 
          onPress={() => navigation.navigate('PerfilDoDonoDoSilo')} 
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
