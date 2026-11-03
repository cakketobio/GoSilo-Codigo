# GoSilo-Codigo

![Status](https://img.shields.io/badge/status-em%20andamento-yellow)
![Fase](https://img.shields.io/badge/fase-desenvolvimento-blue)
![Período](https://img.shields.io/badge/período-2º%20semestre-green)

Repositório de **desenvolvimento, implementação e documentação técnica** do projeto GoSilo.

Este repositório concentra os artefatos produzidos durante a etapa de desenvolvimento do projeto, incluindo a implementação do aplicativo mobile, a estrutura do back-end, a organização do banco de dados e a documentação técnica da solução.

---

## Sobre o GoSilo

O **GoSilo** é uma aplicação mobile que conecta produtores rurais que precisam de espaço para armazenar sua produção a proprietários de silos que possuem capacidade de armazenamento disponível.

A proposta funciona como um **marketplace de espaços para armazenamento agrícola**, permitindo que:

* Proprietários anunciem espaços disponíveis em seus silos;
* Produtores encontrem espaços adequados para armazenar sua produção;
* Usuários encontrem silos por localização e características;
* Produtores realizem propostas e lances;
* Proprietários acompanhem propostas recebidas;
* As partes acompanhem reservas e negociações.

O sistema busca reduzir perdas de produção e melhorar o aproveitamento da capacidade de armazenamento existente.

---

## Objetivo

O objetivo deste repositório é organizar e registrar o desenvolvimento técnico do GoSilo, transformando os requisitos e protótipos definidos nas etapas anteriores em uma aplicação funcional.

### Objetivos específicos

* Implementar as interfaces do aplicativo mobile;
* Desenvolver as funcionalidades principais dos perfis de usuário;
* Organizar o código em módulos e componentes reutilizáveis;
* Estabelecer uma arquitetura que permita a evolução do sistema;
* Preparar a estrutura para integração entre front-end, back-end e banco de dados;
* Documentar as decisões técnicas e ferramentas utilizadas;
* Realizar testes para verificar o funcionamento das funcionalidades.

---

## Equipe

| Nome        | Papel (Scrum)            | GitHub |
| ----------- | ------------------------ | ------ |
| Anna Luisa  | Scrum Master & Tech Lead | [@annaluisa](https://github.com/cakketobio) |
| Ana Vitória | Product Owner            | [@anavitoria](https://github.com/yik3x) |
| Breno       | Tech Lead & Pesquisador  | [@breno](https://github.com/bd2s17) |
| Brian       | UI Designer              | [@brian](https://github.com/ferrarinetto13-glitch) |

---

## Papéis

| Pessoa | O Que Faz |
| ------ | --------- |
| **Anna Luisa** | Organiza o desenvolvimento, gerencia o GitHub, documenta a arquitetura e acompanha a implementação. |
| **Ana Vitória** | Representa a perspectiva do usuário, participa da definição das funcionalidades e auxilia na validação. |
| **Brian** | Desenvolve as interfaces, contribui com os componentes visuais e acompanha a implementação dos protótipos. |
| **Breno** | Pesquisa tecnologias, contribui com a organização técnica e participa da modelagem e desenvolvimento. |

---

## Estrutura do Repositório

```text
GoSilo-Codigo/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── screens/
│   │   │   ├── autenticacao/
│   │   │   ├── dono-silo/
│   │   │   └── produtor-rural/
│   │   │
│   │   ├── navigation/
│   │   ├── data/
│   │   ├── styles/
│   │   └── utils/
│   │
│   ├── App.js
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── repositories/
│   │   └── services/
│   │
│   ├── api/
│   │   ├── routes/
│   │   └── dependencies/
│   │
│   └── README.md
│
├── database/
│   ├── diagramas/
│   ├── migrations/
│   ├── seeds/
│   └── README.md
│
├── docs/
│   ├── arquitetura/
│   ├── api/
│   ├── desenvolvimento/
│   ├── testes/
│   └── prototipos/
│
└── README.md
```

A estrutura organiza o projeto em módulos independentes, permitindo que cada parte seja desenvolvida e documentada progressivamente.

---

## Desenvolvimento do Front-end

A pasta [`frontend`](frontend) concentra a implementação oficial do aplicativo mobile.

A organização interna contempla:

* **assets:** imagens, ícones e recursos visuais;
* **components:** componentes reutilizáveis da interface;
* **screens:** telas organizadas de acordo com os perfis de usuário;
* **navigation:** navegação entre as telas;
* **data:** dados utilizados durante o desenvolvimento;
* **styles:** definições de cores e padrões visuais;
* **utils:** funções auxiliares e validações.

O desenvolvimento será realizado a partir dos fluxos e interfaces definidos no repositório de protótipos.

---

## Protótipo de Emulação

O projeto Expo disponibilizado pela integrante Ana Vitória ([@yik3x](https://github.com/yik3x)) será utilizado como **protótipo experimental de emulação**.

Seu objetivo é permitir a observação das interfaces em execução no ambiente mobile, auxiliando na avaliação da apresentação visual, navegação e comportamento das telas.

Esse projeto possui finalidade de referência e experimentação, não sendo considerado a implementação oficial do GoSilo.

A implementação definitiva será desenvolvida na pasta [`frontend`](frontend), com organização própria e código adequado à etapa de desenvolvimento do projeto.

---

## Back-end

A pasta [`backend`](backend) será destinada à implementação da lógica de negócio e dos serviços responsáveis pelo funcionamento do sistema.

A estrutura planejada contempla:

* **models:** representação das entidades do sistema;
* **schemas:** definição e validação das estruturas de dados;
* **repositories:** organização das operações de acesso aos dados;
* **services:** implementação das regras de negócio;
* **routes:** definição dos endpoints da API;
* **dependencies:** dependências compartilhadas entre os módulos.

A implementação do back-end será realizada em uma etapa posterior, conforme a evolução técnica do projeto.

---

## Banco de Dados

A pasta [`database`](database) concentrará os arquivos relacionados à modelagem e organização da persistência de dados.

Sua estrutura contempla:

* **diagramas:** representação das entidades e seus relacionamentos;
* **migrations:** arquivos de criação e alteração da estrutura do banco;
* **seeds:** dados iniciais utilizados para testes e desenvolvimento.

A estrutura será preparada para a utilização de PostgreSQL e PostGIS, conforme definido durante o planejamento.

---

## Arquitetura do Sistema

A arquitetura do GoSilo será organizada em módulos com responsabilidades distintas, separando a interface, as regras de negócio e o armazenamento de informações.

### Front-end

Responsável pela apresentação das informações e interação com os usuários.

### Back-end

Responsável pelo processamento das operações, aplicação das regras de negócio e comunicação com o banco de dados.

### Banco de Dados

Responsável pelo armazenamento, organização e relacionamento das informações do sistema.

Essa divisão permite que os módulos sejam desenvolvidos separadamente e integrados progressivamente.

---

## Documentação Técnica

A pasta [`docs`](docs) reúne os documentos utilizados para registrar as decisões técnicas e orientar o desenvolvimento.

### Arquitetura

A pasta [`docs/arquitetura`](docs/arquitetura) reúne os documentos relacionados à organização e estrutura do sistema.

### API

A pasta [`docs/api`](docs/api) será utilizada para documentar os endpoints, parâmetros e operações previstas para a comunicação entre os módulos.

### Desenvolvimento

A pasta [`docs/desenvolvimento`](docs/desenvolvimento) concentra instruções de configuração do ambiente, execução do projeto e padrões de organização do código.

### Testes

A pasta [`docs/testes`](docs/testes) reúne os cenários e procedimentos utilizados para verificar o funcionamento das funcionalidades.

### Protótipos

A pasta [`docs/prototipos`](docs/prototipos) registra a relação entre as interfaces implementadas, os protótipos visuais e o protótipo experimental de emulação.

---

## Metodologia

Utilizamos uma adaptação do **Scrum**, organizada em sprints de aproximadamente 1 a 2 semanas.

A metodologia será utilizada para organizar as atividades de implementação, revisão, testes e documentação.

### Sprints

| Sprint | Duração | Objetivo | Status |
| ------ | ------- | -------- | ------ |
| Sprint 0 | 1 semana | Organização dos repositórios e preparação do ambiente | Concluído |
| Sprint 1 | 1 a 2 semanas | Estruturação da arquitetura e configuração do projeto | Em andamento |
| Sprint 2 | 1 a 2 semanas | Implementação das interfaces e navegação | Pendente |
| Sprint 3 | 1 a 2 semanas | Implementação das funcionalidades principais | Pendente |
| Sprint 4 | 1 a 2 semanas | Testes, revisão e documentação | Pendente |

---

## Reuniões

| Tipo | Frequência | Duração | Objetivo |
| ---- | ---------- | ------- | -------- |
| Daily | Seg, Qua, Sex | 15 min | Alinhamento: "Fiz / Vou fazer / Bloqueios" |
| Planning | Início da sprint | 30–40 min | Definição das tarefas |
| Review | Final da sprint | 20 min | Apresentação das entregas |
| Retrospectiva | Final da sprint | 20 min | Avaliação e melhoria do processo |

---

## Tecnologias

A stack tecnológica foi definida considerando as necessidades do GoSilo, principalmente desenvolvimento mobile, geolocalização, persistência de dados e comunicação entre usuários.

### Front-end

* **JavaScript** — linguagem utilizada na implementação;
* **React Native** — desenvolvimento do aplicativo mobile;
* **Expo** — ambiente de desenvolvimento e execução da aplicação.

### Back-end

* **Python + FastAPI** — desenvolvimento previsto da API e das regras de negócio;
* **WebSockets** — comunicação em tempo real, principalmente para o sistema de leilão e atualizações entre usuários.

### Banco de Dados e Geolocalização

* **PostgreSQL** — gerenciamento e persistência dos dados;
* **PostGIS** — extensão prevista para operações de geolocalização e consultas espaciais.

### Segurança

* **Argon2id ou BCrypt** — armazenamento seguro de senhas por meio de funções de hash;
* **AES-256** — criptografia de dados sensíveis armazenados no sistema.

### Design e Prototipação

* **Figma** — criação e prototipação das interfaces e fluxos de usuário;
* **Android Studio** — utilização do emulador Android para avaliação da aplicação mobile.

As tecnologias serão incorporadas conforme as necessidades de cada etapa e a evolução dos conhecimentos técnicos da equipe.

---

## Evolução do Projeto

O desenvolvimento do GoSilo foi dividido em etapas complementares:

```text
Pesquisa
   ↓
Planejamento
   ↓
Requisitos
   ↓
Modelagem
   ↓
UX/UI
   ↓
Protótipos
   ↓
Validação
   ↓
Arquitetura
   ↓
Implementação
   ↓
Testes
   ↓
Integração
```

### Repositórios

| Etapa | Repositório | Objetivo |
| ----- | ----------- | -------- |
| Planejamento | **GoSilo-Planejamento** | Pesquisa, documentação, requisitos e modelagem |
| Prototipação | **GoSilo-Prototipos** | UX/UI, fluxos e protótipos |
| Desenvolvimento | **GoSilo-Codigo** | Implementação e documentação técnica |

---

## Status Atual

### Organização

* [x] Repositório criado;
* [ ] Estrutura definitiva dos diretórios;
* [ ] Documentação da arquitetura;
* [ ] Organização dos módulos.

### Front-end

* [ ] Configuração da implementação oficial;
* [ ] Criação dos componentes;
* [ ] Implementação das telas de autenticação;
* [ ] Implementação das telas do dono do silo;
* [ ] Implementação das telas do produtor rural;
* [ ] Navegação entre as telas;
* [ ] Funcionalidades principais.

### Back-end

* [ ] Estrutura inicial;
* [ ] Modelagem das entidades;
* [ ] Implementação dos serviços;
* [ ] Criação das rotas da API;
* [ ] Integração com o front-end.

### Banco de Dados

* [ ] Modelagem do banco;
* [ ] Diagrama de entidades e relacionamentos;
* [ ] Criação das migrations;
* [ ] Preparação dos seeds;
* [ ] Integração com o back-end.

### Testes e Documentação

* [ ] Casos de teste;
* [ ] Testes das funcionalidades;
* [ ] Documentação técnica;
* [ ] Instruções de execução.

---

## Links

* **Repositório de Planejamento:** [GoSilo-Planejamento](https://github.com/cakketobio/GoSilo-Planejamento)
* **Repositório de Protótipos:** [GoSilo-Prototipos](https://github.com/cakketobio/GoSilo-Prototipos)
* **Repositório de Código:** [GoSilo-Codigo](https://github.com/cakketobio/GoSilo-Codigo)
* **Protótipo Expo experimental:** [Repositório da Ana Vitória](https://github.com/yik3x)
* **Board Kanban:** [Board Kanban do GoSilo](https://trello.com/b/gdIdj7zz/projeto-integrador)

---

> **"Menos burocracia, mais receita."**
