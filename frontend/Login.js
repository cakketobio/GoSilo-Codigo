// ==========================================
// 1. IMPORTAÇÕES DE FERRAMENTAS E COMPONENTES
// ==========================================
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// ==========================================
// 2. PALETA DE CORES OFICIAL DO GOSILO
// ==========================================
const CORES = {
  primaria: '#2E7D32',         // Verde Principal
  secundaria: '#81C784',       // Verde Claro
  destaque: '#EC9531',         // Âmbar / Dourado do Dono de Silo
  fundo: '#F4F7F5',            // Branco Acinzentado
  card: '#FFFFFF',             // Branco Puro
  textoPrincipal: '#263238',    // Cinza Escuro
  textoSecundario: '#666666',   // Cinza Médio
  borda: '#E0E0E0',            // Cinza Claro
};

// ==========================================
// 3. COMPONENTE PRINCIPAL: TELA DE LOGIN
// ==========================================
export default function Login({ navigation }) {
  // Estados para capturar os dados digitados
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* ------------------------------------------ */}
      {/* SEÇÃO 1: CABEÇALHO E MARCA                */}
      {/* ------------------------------------------ */}
      <View style={styles.logoArea}>
        <Text style={styles.logoTexto}>GoSilo</Text>
        <Text style={styles.slogan}>Página de Login</Text>
      </View>

      {/* ------------------------------------------ */}
      {/* SEÇÃO 2: FORMULÁRIO DE LOGIN              */}
      {/* ------------------------------------------ */}
      <View style={styles.formulario}>
        
        {/* Campo: E-mail / CPF */}
        <Text style={styles.rotulo}>CPF ou Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF ou Telefone"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="phone-pad"
          autoCapitalize="none"
        />

        {/* Campo: Senha com Mostrar / Ocultar */}
        <Text style={styles.rotulo}>Senha</Text>
        <View style={styles.senhaContainer}>
          <TextInput
            style={styles.senhaInput}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <Text
            style={styles.botaoMostrarSenha}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? 'Ocultar' : 'Mostrar'}
          </Text>
        </View>

        {/* ------------------------------------------ */}
        {/* SEÇÃO 3: BOTÕES DE AÇÃO E NAVEGAÇÃO       */}
        {/* ------------------------------------------ */}
        <View style={styles.botoesContainer}>
          {/* Botão: Entrar como Produtor Rural */}
          <TouchableOpacity
            style={styles.botaoProdutor}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomePageDoProdutorRural')}
          >
            <Text style={styles.textoBotaoBranco}>Entrar como Produtor Rural</Text>
          </TouchableOpacity>

          {/* Botão: Entrar como Dono de Silo */}
          <TouchableOpacity
            style={styles.botaoDonoSilo}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomePageDoDonoDoSilo')}
          >
            <Text style={styles.textoBotaoBranco}>Entrar como Dono de Silo</Text>
          </TouchableOpacity>

          {/* Botão: Criar Conta / Cadastre-se */}
          <TouchableOpacity
          style={styles.linkCadastro}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('CadastroDoUsuário')}
        >
          <Text style={styles.textoLink}>
            Não tem conta? <Text style={styles.textoLinkDestaque}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

// ==========================================
// 4. ESTILOS ORGANIZADOS POR SEÇÃO
// ==========================================
const styles = StyleSheet.create({
  // --- Estrutura e Rolagem da Página ---
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingVertical: 40,
  },
  formulario: {
    width: '100%',
    maxWidth: 340,
  },

  // --- Cabeçalho e Marca ---
  logoArea: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoTexto: {
    fontSize: 36,
    fontWeight: 'bold',
    color: CORES.primaria,
    letterSpacing: 1,
  },
  slogan: {
    fontSize: 16,
    fontWeight: '600',
    color: CORES.textoPrincipal,
    marginTop: 4,
  },

  // --- Rótulos e Campos de Texto ---
  rotulo: {
    fontSize: 14,
    fontWeight: '600',
    color: CORES.textoPrincipal,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    backgroundColor: CORES.card,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: CORES.textoPrincipal,
    marginBottom: 16,
  },

  // --- Caixa de Senha ---
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CORES.card,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 20,
    height: 48,
  },
  senhaInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: CORES.textoPrincipal,
  },
  botaoMostrarSenha: {
    color: CORES.primaria,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 8,
  },

  // --- Grupo de Botões ---
  botoesContainer: {
    width: '100%',
    gap: 12,
    marginTop: 8,
  },
  botaoProdutor: {
    width: '100%',
    backgroundColor: CORES.primaria,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDonoSilo: {
    width: '100%',
    backgroundColor: CORES.destaque,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkCadastro: {
    marginTop: 16,
    alignItems: 'center',
    padding: 8,
  },
  textoLink: {
    fontSize: 14,
    color: CORES.textoSecundario,
    textAlign: 'center',
  },
  textoLinkDestaque: {
    color: CORES.primaria, 
    fontWeight: 'bold',
  },

  // --- Textos dos Botões ---
  textoBotaoBranco: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoBotaoCinza: {
    color: CORES.textoPrincipal,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});