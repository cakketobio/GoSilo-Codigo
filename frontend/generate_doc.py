import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
import os

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), fill_hex)
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def create_report():
    doc = docx.Document()

    # Definir margens
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(1)
        section.bottom_margin = Inches(1)
        section.left_margin = Inches(1)
        section.right_margin = Inches(1)

    # Cores do GoSilo
    COLOR_PRIMARY = RGBColor(46, 125, 50)     # #2E7D32 - Verde Principal
    COLOR_SECONDARY = RGBColor(129, 199, 132) # #81C784 - Verde Claro
    COLOR_DARK = RGBColor(38, 50, 56)         # #263238 - Cinza Escuro
    COLOR_MUTED = RGBColor(102, 102, 102)     # #666666 - Cinza Médio

    # Título Principal
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_inst = p_title.add_run("UniEvangélica — Engenharia de Software\n")
    run_inst.font.name = 'Calibri'
    run_inst.font.size = Pt(13)
    run_inst.font.bold = True
    run_inst.font.color.rgb = COLOR_DARK

    run_title = p_title.add_run("RELATÓRIO TÉCNICO DE CONFORMIDADE E AUDITORIA\n")
    run_title.font.name = 'Calibri'
    run_title.font.size = Pt(18)
    run_title.font.bold = True
    run_title.font.color.rgb = COLOR_PRIMARY

    run_sub = p_title.add_run("Projeto Integrador: GoSilo — Plataforma de Armazenamento e Leilão de Silos")
    run_sub.font.name = 'Calibri'
    run_sub.font.size = Pt(12)
    run_sub.font.italic = True
    run_sub.font.color.rgb = COLOR_MUTED

    # Linha divisória / Metadados
    p_meta = doc.add_paragraph()
    p_meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_meta = p_meta.add_run("Responsável pelo Design e Apresentação: Brian Roberto Ferrari Netto (Matrícula: 2610127)\nData de Emissão: Outubro de 2026 | Versão do Documento Base: 1.2")
    run_meta.font.name = 'Calibri'
    run_meta.font.size = Pt(10)
    run_meta.font.color.rgb = COLOR_MUTED

    doc.add_paragraph()

    # Seção 1
    h1 = doc.add_heading("1. RESUMO EXECUTIVO DAS ETAPAS CONCLUÍDAS", level=1)
    h1.runs[0].font.color.rgb = COLOR_PRIMARY

    p1 = doc.add_paragraph(
        "Durante o ciclo de desenvolvimento das Sprints 1 e 2, a equipe avançou na estruturação tecnológica "
        "e na interface com o usuário do aplicativo móvel GoSilo, focado no compartilhamento e leilão de capacidade ociosa de silos no agronegócio de Goiás."
    )
    p1.paragraph_format.line_spacing = 1.15

    p_items = [
        ("Sprint 1 (Arquitetura e Fluxo de Navegação): ", "Estruturação de 27 telas na pasta 'screens/' integradas com o React Navigation (Native Stack) no Expo Router, garantindo a transição fluida entre todos os fluxos."),
        ("Sprint 2.1 (Interface da Tela de Login): ", "Desenvolvimento do componente Login.js respeitando a paleta GoSilo (#2E7D32, #FFFFFF, #263238), com campo de credencial adaptado para 'CPF ou Telefone', alternância de visibilidade da senha (mostrar/ocultar), dois botões diretos de entrada para validação de banca ('Produtor Rural' e 'Dono de Silo') e link de cadastro limpo com destaque em verde."),
        ("Sprint 2.2 e 2.3 (Tela de Cadastro e Seleção de Perfil): ", "Implementação do componente CadastroDoUsuário.js com campos completos (Nome, CPF/Telefone, Senha, Confirmação), seletor visual interativo com dois cards clicáveis ('Produtor Rural' vs. 'Dono de Silo') com borda verde ativa, e checkbox de aceite obrigatório dos Termos de Uso e LGPD."),
        ("Acessibilidade e Responsividade Mobile: ", "Adaptação de todas as telas com ScrollView, resolução de problemas de rede local (modo Wi-Fi/4G e testes no Expo Go em smartphone físico) e deploy contínuo na Web via Netlify.")
    ]

    for title, desc in p_items:
        p = doc.add_paragraph(style='List Bullet')
        r_t = p.add_run(title)
        r_t.bold = True
        r_t.font.color.rgb = COLOR_DARK
        r_d = p.add_run(desc)
        r_d.font.color.rgb = COLOR_DARK
        p.paragraph_format.line_spacing = 1.15

    doc.add_paragraph()

    # Seção 2
    h2 = doc.add_heading("2. ANÁLISE COMPARATIVA: O QUE SEGUE O DOCUMENTO (PDF)", level=1)
    h2.runs[0].font.color.rgb = COLOR_PRIMARY

    p2 = doc.add_paragraph(
        "A implementação realizada até o presente momento possui forte aderência aos requisitos e objetivos "
        "estipulados no Documento de Especificação de Projeto Integrador (UniEvangélica):"
    )
    p2.paragraph_format.line_spacing = 1.15

    conf_items = [
        ("Identidade Visual e Propósito (Páginas 4-6): ", "O aplicativo reflete exatamente o modelo de negócio proposto — conectar ofertantes de silos ociosos com demandantes de armazenagem de grãos (milho, sorgo, capim), com paleta de cores consistente e moderna."),
        ("RF-001 e RNE-001 (Separação Jurídica de Perfis): ", "O código prevê a diferenciação funcional completa entre quem aluga (Produtor Rural) e quem disponibiliza (Dono de Silo)."),
        ("RF-002 (Identificação Fiscal e Acesso): ", "O campo de entrada do login e cadastro contempla CPF ou Telefone/CNPJ, superando a barreira de cadastros focados unicamente em e-mail convencional."),
        ("RF-008 e RNF-002 (Conformidade com a LGPD e Termos de Uso): ", "Inclusão de checkbox não pré-selecionado para garantir a manifestação livre e expressa do usuário antes do cadastro."),
        ("RNF-007 e RNF-009 (Desempenho e Responsividade): ", "Uso de ScrollView com persistência de toques, botões com feedback visual (activeOpacity=0.8) e carregamento otimizado no dispositivo móvel.")
    ]

    for title, desc in conf_items:
        p = doc.add_paragraph(style='List Bullet')
        r_t = p.add_run(title)
        r_t.bold = True
        r_t.font.color.rgb = COLOR_PRIMARY
        r_d = p.add_run(desc)
        r_d.font.color.rgb = COLOR_DARK
        p.paragraph_format.line_spacing = 1.15

    doc.add_paragraph()

    # Seção 3
    h3 = doc.add_heading("3. ITENS FORA DE CONFORMIDADE E PLANO DE AÇÃO CORRETIVA", level=1)
    h3.runs[0].font.color.rgb = COLOR_PRIMARY

    p3 = doc.add_paragraph(
        "A tabela a seguir consolida as divergências encontradas entre o código atual e o documento formal, "
        "apresentando o que deve ser feito para alcançar 100% de conformidade com a especificação:"
    )
    p3.paragraph_format.line_spacing = 1.15

    # Tabela
    table = doc.add_table(rows=1, cols=4)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False

    headers = ["Requisito / Regra", "Situação Atual (Código)", "Exigência Oficial (PDF)", "Ação Necessária"]
    hdr_cells = table.rows[0].cells
    for i, header_text in enumerate(headers):
        hdr_cells[i].text = header_text
        set_cell_background(hdr_cells[i], "2E7D32")
        set_cell_margins(hdr_cells[i], top=120, bottom=120, left=150, right=150)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in p.runs:
            run.font.bold = True
            run.font.color.rgb = RGBColor(255, 255, 255)
            run.font.size = Pt(10)

    divergences = [
        (
            "RNE-001\n(Pág. 16)",
            "O app abre na tela de Login contendo 2 botões de entrar embaixo.",
            "A primeira tela do sistema deve conter dois botões destacados: 'Atuar como Produtor Rural' e 'Atuar como Dono de Silo', direcionando após a escolha.",
            "Criar uma tela de splash/escolha inicial ou manter a justificativa de que os dois botões no Login funcionam como atalho de demonstração de banca."
        ),
        (
            "RF-009 / RNE-008\n(Págs. 19 e 31)",
            "A senha é inserida sem indicador visual de complexidade.",
            "Exige indicador em tempo real (barra horizontal mudando de vermelho para amarelo e verde) com validação de maiúscula, minúscula, número e símbolo.",
            "Adicionar um componente visual de barra de progresso abaixo do campo de senha que valida a força da senha digitada via expressão regular."
        ),
        (
            "RF-006 / RNF-001\n(Págs. 30 e 44)",
            "O Login avança diretamente para a Home.",
            "Exige verificação de Segundo Fator de Autenticação (código OTP de 6 dígitos via SMS/App) como etapa obrigatória.",
            "Criar um modal ou tela intermediária de inserção de código de 6 dígitos simulado antes de confirmar a entrada na Home."
        ),
        (
            "RF-015 / RF-032\n(Págs. 35 e 41)\n[Sprint 3.1]",
            "O formulário inicial da Sprint 3.1 não destacava a regra de comissão.",
            "O formulário de anúncio de silo deve conter quadro destacado: 'Ao fechar negócio, será aplicada comissão de 5% sobre o valor total do acordo'.",
            "Inserir caixa amarela/informativa de destaque com o aviso legal de 5% da taxa da plataforma antes do botão de publicação do silo."
        ),
        (
            "RF-021 / RF-018\n(Págs. 36 e 38)\n[Sprint 3.2]",
            "Tela de Detalhes do Silo ainda não diferencia os botões por perfil.",
            "Produtor deve ver botão 'Dar Lance' (abrindo modal de valor). Dono de Silo deve ver botão 'Ver Propostas / Lances Recebidos'.",
            "Criar renderização condicional na DetalhesSiloScreen.js verificando se o usuário ativo é anunciante ou locatário."
        )
    ]

    col_widths = [Inches(1.2), Inches(1.7), Inches(1.8), Inches(1.8)]

    for row_idx, item in enumerate(divergences):
        row_cells = table.add_row().cells
        bg_color = "F9FBF9" if row_idx % 2 == 0 else "FFFFFF"
        for i, text in enumerate(item):
            row_cells[i].text = text
            set_cell_background(row_cells[i], bg_color)
            set_cell_margins(row_cells[i], top=100, bottom=100, left=120, right=120)
            p = row_cells[i].paragraphs[0]
            p.paragraph_format.line_spacing = 1.15
            for run in p.runs:
                run.font.size = Pt(9.5)
                run.font.color.rgb = COLOR_DARK

    for row in table.rows:
        for idx, width in enumerate(col_widths):
            row.cells[idx].width = width

    doc.add_paragraph()

    # Seção 4
    h4 = doc.add_heading("4. INCONSISTÊNCIAS IDENTIFICADAS NO DOCUMENTO OFICIAL (PDF)", level=1)
    h4.runs[0].font.color.rgb = COLOR_PRIMARY

    p4 = doc.add_paragraph(
        "Durante a leitura minuciosa da documentação da UniEvangélica, foram encontradas falhas lógicas e de redação "
        "no próprio documento. Recomenda-se reportar e corrigir esses pontos no documento acadêmico:"
    )
    p4.paragraph_format.line_spacing = 1.15

    inconsistencias = [
        (
            "Inconsistência 1: Regra Temporal de Encerramento do Leilão",
            "Página 25 (RNE-018) e Página 38 (RF-023) vs. Página 53 (RNF-015)",
            "A RNE-018 e o RF-023 determinam que o leilão somente se encerra após 1 minuto de inatividade de ofertas. Já o RNF-015 estabelece que, após 1 minuto de inatividade, deve surgir uma contagem regressiva de 5 segundos para a batida do martelo.",
            "Solução Proposta: Padronizar formalmente que, ao atingir 1 minuto sem novas ofertas, o sistema aciona um alerta regressivo de 5 segundos (estilo 'dou-lhe uma, dou-lhe duas, vendido!'), trazendo transparência aos participantes."
        ),
        (
            "Inconsistência 2: Comprimento Mínimo da Senha Divergente",
            "Página 19 (RNE-008) e Página 31 (RF-009) vs. Página 46 (RNF-004)",
            "A regra de negócio RNE-008 e o RF-009 estipulam 'mínimo de 8 caracteres'. Em contrapartida, o critério de aceite técnico do RNF-004 exige estritamente: 'Senhas com menos de 10 caracteres deverão ser rejeitadas'.",
            "Solução Proposta: Adotar o padrão de 10 caracteres no aplicativo e retificar os textos da RNE-008 e RF-009 para 10 caracteres, unificando a política de segurança."
        ),
        (
            "Inconsistência 3: Duplicidade e Falha de Digitação no Sumário",
            "Página 2 (Sumário) vs. Páginas 14 e 54",
            "No Sumário, o título 'ENTENDIMENTO DO PÚBLICO, DO NEGÓCIO E LEVANTAMENTO INICIAL DE REQUISITOS' aparece repetido tanto para a Parte 3.0 quanto para a Parte 4.0. Além disso, o item 14.1 está grafado como 'FLUXO DE MAVEGAÇÃO'.",
            "Solução Proposta: Atualizar o sumário no arquivo do Word principal da equipe, renomeando a Parte 4.0 para 'PARTE 04 — DESIGN, MODELAGEM, DADOS E SOLUÇÃO TECNOLÓGICA' e corrigindo a palavra para 'FLUXO DE NAVEGAÇÃO'."
        )
    ]

    for title, local, defeito, solucao in inconsistencias:
        p_card = doc.add_paragraph()
        p_card.paragraph_format.left_indent = Inches(0.2)
        r_card_title = p_card.add_run(f"• {title}\n")
        r_card_title.bold = True
        r_card_title.font.color.rgb = COLOR_PRIMARY
        r_card_title.font.size = Pt(11)

        r_loc = p_card.add_run(f"Localização no PDF: {local}\n")
        r_loc.italic = True
        r_loc.font.size = Pt(9.5)
        r_loc.font.color.rgb = COLOR_MUTED

        r_def = p_card.add_run(f"O Defeito: {defeito}\n")
        r_def.font.size = Pt(10)
        r_def.font.color.rgb = COLOR_DARK

        r_sol = p_card.add_run(f"Como Solucionar: {solucao}")
        r_sol.bold = True
        r_sol.font.size = Pt(10)
        r_sol.font.color.rgb = COLOR_DARK
        doc.add_paragraph()

    # Seção 5
    h5 = doc.add_heading("5. ROADMAP DE EXECUÇÃO: SPRINT 3 E 4", level=1)
    h5.runs[0].font.color.rgb = COLOR_PRIMARY

    p5 = doc.add_paragraph(
        "Para a continuidade das atividades do semestre, segue o planejamento detalhado das próximas entregas:"
    )
    p5.paragraph_format.line_spacing = 1.15

    roadmap = [
        ("Sprint 3.1 — CadastroSiloScreen.js: ", "Finalização do formulário completo de oferta do silo, contendo identificação, cidade/estado, capacidade em toneladas com teclado numérico, seleção por chips de silagem (Milho, Sorgo, Capim), condições de acesso para bi-trens, datas e o banner destacado da taxa de 5% (RF-032)."),
        ("Sprint 3.2 — DetalhesSiloScreen.js: ", "Construção da tela de visualização do silo com lógica dinâmica: Produtor Rural visualiza o botão 'Dar Lance' com modal monetário (RF-021), enquanto o Dono de Silo visualiza o botão 'Ver Propostas' (RF-018)."),
        ("Sprint 4 — Home Principal e Visualização de Mapa: ", "Implementação do card de leilões do dia (RF-026) e integração com a interface do mapa georreferenciado centralizado no estado de Goiás (RF-010 e RF-011).")
    ]

    for title, desc in roadmap:
        p = doc.add_paragraph(style='List Bullet')
        r_t = p.add_run(title)
        r_t.bold = True
        r_t.font.color.rgb = COLOR_PRIMARY
        r_d = p.add_run(desc)
        r_d.font.color.rgb = COLOR_DARK
        p.paragraph_format.line_spacing = 1.15

    # Conclusão / Assinatura
    doc.add_paragraph()
    p_end = doc.add_paragraph()
    p_end.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r_end = p_end.add_run("Relatório elaborado para suporte ao desenvolvimento e banca de avaliação do Projeto Integrador.\nGoSilo — Engenharia de Software / UniEvangélica")
    r_end.font.size = Pt(9.5)
    r_end.font.italic = True
    r_end.font.color.rgb = COLOR_MUTED

    target_dir = r"C:\Users\ferra\OneDrive\Documentos\Relacionado a facul\paginas-prototipo"
    file_path = os.path.join(target_dir, "Relatorio_Conformidade_GoSilo_PI.docx")
    doc.save(file_path)
    print(f"SUCESSO: Arquivo salvo em {file_path}")

if __name__ == '__main__':
    create_report()
