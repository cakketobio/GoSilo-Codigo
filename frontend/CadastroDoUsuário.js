// ==========================================
// 1. IMPORTAÇÕES DE FERRAMENTAS E COMPONENTES
// ==========================================
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// ==========================================
// 2. PALETA DE CORES OFICIAL DO GOSILO
// ==========================================
const CORES = {
  primaria: '#2E7D32',         // Verde Principal
  secundaria: '#81C784',       // Verde Claro
  destaque: '#F9A825',         // Amarelo
  fundo: '#F4F7F5',            // Branco Acinzentado
  card: '#FFFFFF',             // Branco Puro
  textoPrincipal: '#263238',    // Cinza Escuro
  textoSecundario: '#666666',   // Cinza Médio
  borda: '#E0E0E0',            // Cinza Claro
};
// ==========================================
// 3. COMPONENTE PRINCIPAL: CADASTRO DO USUÁRIO
// ==========================================
export default function CadastroDoUsuário({ navigation }) {
  // Estados para capturar dados dos campos
   const [concordaTermos, setConcordaTermos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  // Estado para controlar a seleção de perfil ('produtor' ou 'silo')
  const [perfilSelecionado, setPerfilSelecionado] = useState('produtor');
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* ------------------------------------------ */}
      {/* SEÇÃO 1: CABEÇALHO E IDENTIFICAÇÃO VISUAL */}
      {/* ------------------------------------------ */}
      <View style={styles.logoArea}>
        <Text style={styles.logoTexto}>GoSilo</Text>
        <Text style={styles.slogan}>Criar Nova Conta</Text>
      </View>
      {/* ------------------------------------------ */}
      {/* SEÇÃO 2: FORMULÁRIO DE DADOS PESSOAIS     */}
      {/* ------------------------------------------ */}
      <View style={styles.formulario}>
        
        {/* Campo: Nome Completo */}
        <Text style={styles.rotulo}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />
        {/* Campo: CPF ou Telefone */}
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
            placeholder="Crie uma senha"
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
        {/* Campo: Confirmar Senha */}
        <Text style={styles.rotulo}>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          placeholderTextColor="#999"
          secureTextEntry={!mostrarSenha}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        {/* ------------------------------------------ */}
        {/* SEÇÃO 3: CLASSIFICAÇÃO DO USUÁRIO (CARDS) */}
        {/* ------------------------------------------ */}
        <Text style={styles.rotuloClassificacao}>Classificação do usuário</Text>
        
        <View style={styles.cardsContainer}>
          {/* Card: Produtor Rural */}
          <TouchableOpacity
            style={[
              styles.cardPerfil,
              perfilSelecionado === 'produtor' && styles.cardSelecionado,
            ]}
            activeOpacity={0.8}
            onPress={() => setPerfilSelecionado('produtor')}
          >
            <Text style={styles.tituloCard}>Produtor Rural:</Text>
            <Text style={styles.subtituloCard}>Preciso de espaço para armazenar.</Text>
          </TouchableOpacity>
          {/* Card: Dono de Silo */}
          <TouchableOpacity
            style={[
              styles.cardPerfil,
              perfilSelecionado === 'silo' && styles.cardSelecionado,
            ]}
            activeOpacity={0.8}
            onPress={() => setPerfilSelecionado('silo')}
          >
            <Text style={styles.tituloCard}>Dono de Silo:</Text>
            <Text style={styles.subtituloCard}>Tenho espaço para alugar.</Text>
          </TouchableOpacity>
        </View>
         {/* Checkbox de Termos de Uso */}
        <TouchableOpacity 
          style={styles.termosContainer}
          activeOpacity={0.8}
          onPress={() => setConcordaTermos(!concordaTermos)}
        >
          <View style={[styles.caixaCheckbox, concordaTermos && styles.checkboxMarcado]}>
            {concordaTermos && <Text style={styles.checkIcon}>✓</Text>}
          </View>
          <Text style={styles.textoTermos}>
            Li e concordo com os <Text style={styles.linkTermos}>Termos de Uso</Text> e a <Text style={styles.linkTermos}>Política de Privacidade</Text>.
          </Text>
        </TouchableOpacity>
        {/* ------------------------------------------ */}
        {/* SEÇÃO 4: BOTÃO CRIAR CONTA E LINK LOGIN   */}
        {/* ------------------------------------------ */}
        <TouchableOpacity
          style={styles.botaoCriarConta}
          activeOpacity={0.8}
          onPress={() => {
            // Navega para a Home correspondente ao perfil escolhido
            if (perfilSelecionado === 'produtor') {
              navigation.navigate('HomePageDoProdutorRural');
            } else {
              navigation.navigate('HomePageDoDonoDoSilo');
            }
          }}
        >
          <Text style={styles.textoBotaoCriarConta}>Criar Conta</Text>
        </TouchableOpacity>
        {/* Link para voltar ao Login */}
        <TouchableOpacity
          style={styles.linkLogin}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoLink}>
            Já tem conta? <Text style={styles.textoLinkDestaque}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
// ==========================================
// 4. ESTILOS ORGANIZADOS POR SEÇÃO
// ==========================================
const styles = StyleSheet.create({
  // --- Estrutura da Página ---
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
  // --- Cabeçalho e Logo ---
  logoArea: {
    alignItems: 'center',
    marginBottom: 20,
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
  // --- Campos de Entrada e Rótulos ---
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
  // --- Campo de Senha ---
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CORES.card,
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 16,
  },
  senhaInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: CORES.textoPrincipal,
  },
  botaoMostrarSenha: {
    color: CORES.primaria,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 8,
  },
  // --- Cards de Classificação de Perfil ---
  rotuloClassificacao: {
    fontSize: 15,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
    marginTop: 6,
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
    width: '100%',
  },
  cardPerfil: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    minHeight: 85,
  },
  cardSelecionado: {
    borderColor: CORES.primaria,
    backgroundColor: '#E8F5E9',
  },
  tituloCard: {
    fontSize: 13,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
    marginBottom: 4,
  },
  subtituloCard: {
    fontSize: 11,
    color: '#555',
    lineHeight: 14,
  },
  // --- Botão de Ação e Link ---
  botaoCriarConta: {
    width: '100%',
    backgroundColor: CORES.primaria,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  textoBotaoCriarConta: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkLogin: {
    marginTop: 20,
    alignItems: 'center',
    padding: 8,
  },
  textoLink: {
    fontSize: 14,
    color: CORES.textoSecundario,
  },
  textoLinkDestaque: {
    color: CORES.primaria,
    fontWeight: 'bold',
  },
   termosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 4,
    width: '100%',
  },
  caixaCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: CORES.borda,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxMarcado: {
    backgroundColor: CORES.primaria,
    borderColor: CORES.primaria,
  },
  checkIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textoTermos: {
    fontSize: 12,
    color: CORES.textoSecundario,
    flex: 1,
    lineHeight: 16,
  },
  linkTermos: {
    color: CORES.primaria,
    fontWeight: 'bold',
  },
});