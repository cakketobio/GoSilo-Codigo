//Importar Ferramentas
import { Button, StyleSheet, Text, View } from 'react-native';

//Função dos componentes
export default function ConfiguraçõesDoProdutorRural({ navigation }) {
  return (
   <View style={styles.container}>
     <Text style={styles.titulo}>Configurações do Produtor Rural</Text>
        <View style={styles.botoesContainer}> 
            <Button 
             title="Lingua" 
              onPress={() => navigation.navigate('ConfiguraçõesDeLinguaDoProdutorRural')} 
              />
            <Button 
              title="Tamanho das Letras" 
              onPress={() => navigation.navigate('ConfiguraçõesDoTamanhoDaLetraDoProdutorRural')} 
              />
            <Button 
              title="SAC" 
              onPress={() => navigation.navigate('ConfiguraçõesDeSACDoProdutorRural')} 
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
    width: '30%',
    gap: 30, 
  },
});

