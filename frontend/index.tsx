import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroDoProdutoDoProdutorRural from '../../screens/CadastroDoProdutoDoProdutorRural';
import CadastroDoProdutoPeloPerfilDoProdutorRural from '../../screens/CadastroDoProdutoPeloPerfilDoProdutorRural';
import CadastroDoUsuário from '../../screens/CadastroDoUsuário';
import ConfiguraçõesDeLinguaDoDonoDoSilo from '../../screens/ConfiguraçõesDeLinguaDoDonoDoSilo';
import ConfiguraçõesDeLinguaDoProdutorRural from '../../screens/ConfiguraçõesDeLinguaDoProdutorRural';
import ConfiguraçõesDeSACDoDonoDoSilo from '../../screens/ConfiguraçõesDeSACDoDonoDoSilo';
import ConfiguraçõesDeSACDoProdutorRural from '../../screens/ConfiguraçõesDeSACDoProdutorRural';
import ConfiguraçõesDoDonoDoSilo from '../../screens/ConfiguraçõesDoDonoDoSilo';
import ConfiguraçõesDoProdutorRural from '../../screens/ConfiguraçõesDoProdutorRural';
import ConfiguraçõesDoTamanhoDaLetraDoProdutorRural from '../../screens/ConfiguraçõesDoTamanhoDaLetraDoProdutorRural';
import ConfiguraçõesDoTamanhoDeLetraDoDonoDoSilo from '../../screens/ConfiguraçõesDoTamanhoDeLetraDoDonoDoSilo';
import CriaçãoDeAnuncioDoDonoDoSilo from '../../screens/CriaçãoDeAnuncioDoDonoDoSilo';
import EdiçãoSiloCadastro from '../../screens/EdiçãoSiloCadastro';
import HistóricoDeConversaDoDonoDoSilo from '../../screens/HistóricoDeConversaDoDonoDoSilo';
import HistóricoDeConversasDoProdutorRural from '../../screens/HistóricoDeConversasDoProdutorRural';
import HistóricoDeLeilõesDoProdutorRural from '../../screens/HistóricoDeLeilõesDoProdutorRural';
import HomePageDoDonoDoSilo from '../../screens/HomePageDoDonoDoSilo';
import HomePageDoProdutorRural from '../../screens/HomePageDoProdutorRural';
import LeilãoDoProdutorRural from '../../screens/LeilãoDoProdutorRural';
import LeilãoOcorrendoEncerradoDoDonoDoSilo from '../../screens/LeilãoOcorrendoEncerradoDoDonoDoSilo';
import LeilõesDoDonoDoSilo from '../../screens/LeilõesDoDonoDoSilo';
import LeilõesNosArredoresDoDonoDoSilo from '../../screens/LeilõesNosArredoresDoDonoDoSilo';
import Login from '../../screens/Login';
import PerfilDoDonoDoSilo from '../../screens/PerfilDoDonoDoSilo';
import PerfilDoProdutorRural from '../../screens/PerfilDoProdutorRural';
import SilosCadastradosDoDonoDoSilo from '../../screens/SilosCadastradosDoDonoDoSilo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',     
      }}
    >
      <Stack.Screen 
        name="CadastroDoProdutoDoProdutorRural" 
        component={CadastroDoProdutoDoProdutorRural} 
        options={{ title: 'Cadastro de Produto' }}
      />
      <Stack.Screen 
        name="CadastroDoProdutoPeloPerfilDoProdutorRural" 
        component={CadastroDoProdutoPeloPerfilDoProdutorRural} 
        options={{ title: 'Cadastro de Produto' }}
      />
      <Stack.Screen 
        name="CadastroDoUsuário" 
        component={CadastroDoUsuário} 
        options={{ title: 'Cadastro de Usuário' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDeLinguaDoDonoDoSilo" 
        component={ConfiguraçõesDeLinguaDoDonoDoSilo} 
        options={{ title: 'Configurações de Linguagem' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDeLinguaDoProdutorRural" 
        component={ConfiguraçõesDeLinguaDoProdutorRural} 
        options={{ title: 'Configurações de Linguagem' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDeSACDoDonoDoSilo" 
        component={ConfiguraçõesDeSACDoDonoDoSilo} 
        options={{ title: 'Configurações de SAC' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDeSACDoProdutorRural" 
        component={ConfiguraçõesDeSACDoProdutorRural} 
        options={{ title: 'Configurações de SAC' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDoTamanhoDeLetraDoDonoDoSilo" 
        component={ConfiguraçõesDoTamanhoDeLetraDoDonoDoSilo} 
        options={{ title: 'Configurações do Tamanho de Letra' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDoDonoDoSilo" 
        component={ConfiguraçõesDoDonoDoSilo} 
        options={{ title: 'Configurações do Dono do Silo' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDoProdutorRural" 
        component={ConfiguraçõesDoProdutorRural} 
        options={{ title: 'Configurações do Produtor Rural' }}
      />
      <Stack.Screen 
        name="ConfiguraçõesDoTamanhoDaLetraDoProdutorRural" 
        component={ConfiguraçõesDoTamanhoDaLetraDoProdutorRural} 
        options={{ title: 'Configurações do Tamanho da Letra' }}
      />
      <Stack.Screen 
        name="CriaçãoDeAnuncioDoDonoDoSilo" 
        component={CriaçãoDeAnuncioDoDonoDoSilo} 
        options={{ title: 'Criação de Anúncio' }}
      />
      <Stack.Screen 
        name="EdiçãoSiloCadastro" 
        component={EdiçãoSiloCadastro} 
        options={{ title: 'Edição de Silo' }}
      />
      <Stack.Screen 
        name="HistóricoDeConversaDoDonoDoSilo" 
        component={HistóricoDeConversaDoDonoDoSilo} 
        options={{ title: 'Histórico de Conversa' }}
      />
      <Stack.Screen 
        name="HistóricoDeConversasDoProdutorRural" 
        component={HistóricoDeConversasDoProdutorRural} 
        options={{ title: 'Histórico de Conversa' }}
      />
      <Stack.Screen 
        name="HistóricoDeLeilõesDoProdutorRural" 
        component={HistóricoDeLeilõesDoProdutorRural} 
        options={{ title: 'Histórico de Leilões' }}
      />
      <Stack.Screen 
        name="HomePageDoDonoDoSilo" 
        component={HomePageDoDonoDoSilo} 
        options={{ title: 'Página Inicial' }}
      />
      <Stack.Screen 
        name="HomePageDoProdutorRural" 
        component={HomePageDoProdutorRural} 
        options={{ title: 'Página Inicial' }}
      />
      <Stack.Screen 
        name="LeilãoDoProdutorRural" 
        component={LeilãoDoProdutorRural} 
        options={{ title: 'Leilão do Produtor Rural' }}
      />
       <Stack.Screen 
        name="LeilõesDoDonoDoSilo" 
        component={LeilõesDoDonoDoSilo} 
        options={{ title: 'Leilões do Dono do Silo' }}
      />
      <Stack.Screen 
        name="LeilãoOcorrendoEncerradoDoDonoDoSilo" 
        component={LeilãoOcorrendoEncerradoDoDonoDoSilo} 
        options={{ title: 'Leilão Ocorrendo ou Encerrado' }}
      />
      <Stack.Screen 
        name="LeilõesNosArredoresDoDonoDoSilo" 
        component={LeilõesNosArredoresDoDonoDoSilo} 
        options={{ title: 'Leilões nos Arredores' }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ title: 'Login' }}
      />
      <Stack.Screen 
        name="PerfilDoDonoDoSilo" 
        component={PerfilDoDonoDoSilo} 
        options={{ title: 'Perfil do Dono do Silo' }}
      />
      <Stack.Screen 
        name="PerfilDoProdutorRural" 
        component={PerfilDoProdutorRural} 
        options={{ title: 'Perfil do Produtor Rural' }}
      />
      <Stack.Screen 
        name="SilosCadastradosDoDonoDoSilo" 
        component={SilosCadastradosDoDonoDoSilo} 
        options={{ title: 'Silos Cadastrados' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}