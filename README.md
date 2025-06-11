
# ☕The Bug Coffee☕

Site de um café coworking desenvolvido para fins acadêmicos utilizando tecnologias HTML5, CSS e JavaScript.

## 🥇 Integrantes da Equipe
* Helder Rocha de Lima - 425108037  
* Jaqueline Vieira de Freitas - 425101645 
* Lucas Do Vale De Jesus - 425107460   
* Vinicius Rosanti Vallone - 425102322  

## 🎯 Objetivo
Mostrar como é o espaço do café temático para profissionais que procuram um lugar de conforto para trabalhar e realizar reservas.

## 🧰 Tecnologias Utilizadas
- HTML5  
- CSS3  
- JavaScript  
- Font Awesome (para ícones)  
- Media Queries (responsividade)  

## 🗂️ Estrutura do Projeto
```
├── index.html           # Página inicial (Landing Page)
├── sobre.html           # Página "Sobre Nós"
├── coworking.html       # Espaços coworking
├── cardapio.html        # Cardápio com bebidas, salgados e doces
├── descubra.html        # Destaques do café
├── reservas.html        # Formulário de reservas e horários
├── facaparte.html       # Trabalhe conosco
├── obrigado.html        # Página de confirmação de reserva
├── equipe.html          # Página da equipe
├── README.md            # Documentação do projeto
├── js/
│ └── script.js          # Scripts principais
├── img/                 # Imagens do site
└── style/
├── style.css            # Estilo principal
├── stylesite.css        # Estilo geral
├── stylesobre.css       # Página sobre
├── stylecoworking.css   # Página coworking
├── equipe.css           # Página da equipe
└── obrigado.css         # Página de agradecimento
```

## ⭐ Funcionalidades

### 📌 Landing Page
Página inicial com apresentação geral do café e botões de navegação.

### 🔍 Descubra
Sessão com destaques sobre o espaço e diferenciais.

### 📖 Cardápio
Exibição dos itens oferecidos (cafés, lanches, etc.), com imagens e descrição.

### 💼 Coworking
Demonstração dos ambientes disponíveis para trabalho e estudo.

### 📍 Sobre Nós
Apresentação da história, missão e visão do The Bug Coffee.

### ⏰ Reservas - Horario de Funcionamento
Faça sua reserva e horarios de funcionamentos.

### 👨‍🍳👨‍🍳👨‍🍳👨‍🍳 Nosso Time - Equipe do projeto
Conhecendo nossa equipe.

### ✉️ Faça Parte - Trabalhe Conosco
Informações para envio de currículo e contato via e-mail ou telefone.


## 🎲 Estrutura de Dados

### 🍽️ Cardápio (`cardapio.html`)
O cardápio é organizado em 3 categorias principais:
- **Bebidas Quentes e Frias**
- **Salgados**
- **Doces**

Os dados de cada item (nome, imagem, descrição e preço) são inseridos dinamicamente via JavaScript, utilizando a função `carregarCardapio()`.

> Exemplo simulado da estrutura em HTML:
```html
<div class="produto">
  <img src="img/latte.jpg" alt="Latte">
  <h3>Latte</h3>
  <p>Café suave com leite vaporizado</p>
  <span>R$ 7,00</span>
</div>
```

### 🧑‍💼 Salas de Coworking (`coworking.html` + `reservas.html`)
As salas são divididas em dois tipos:
- **Sala Básica** – até 12 pessoas
- **Sala Premium** – até 20 pessoas

Cada sala possui:
- Nome e tipo
- Capacidade
- Imagem
- Descrição
- Valor (apresentado na página `reservas.html`)

> Exemplo de bloco de sala:
```html
<div class="card">
  <img src="img/salapremium.png" alt="Sala Premium">
  <h3>Sala Premium</h3>
  <p>Perfeita para apresentações, workshops e reuniões maiores.</p>
  <p><strong>Duração:</strong> 2 horas</p>
  <p><strong>Valor:</strong> R$ 120,00</p>
</div>
```

### 📅 Formulário de Reserva (`reservas.html`)
A página `reservas.html` apresenta um formulário multietapas com os seguintes dados:
- Data da reserva
- Tipo de sala
- Quantidade de pessoas
- Horário
- Observações

> Exemplo:
```html
<select name="sala">
  <option>Sala Básica</option>
  <option>Sala Premium</option>
</select>
```

### 👤 Equipe (`equipe.html`)
Cada membro da equipe é apresentado com:
- Foto
- Nome
- Cargo ou função

> Exemplo de estrutura:
```html
<div class="equipe-card">
  <img src="img/fundadores/jaque1.jpg" alt="Jaqueline">
  <h3>Jaqueline Vieira</h3>
  <p><strong>Desenvolvedora FullStack</strong></p>
</div>
```

### 🌟 Destaques (`descubra.html`)
A seção "Descubra a The Bug Coffee" apresenta blocos compostos por:
- Imagem à esquerda ou direita
- Título
- Descrição curta
- Texto detalhado

> Exemplo:
```html
<div class="descubra-card">
  <img src="img/ambienteaconchegante.jpg" alt="Ambiente com notebook" />
  <div class="text">
    <h3>Ambientes estimulantes</h3>
    <p>Wi-Fi rápido, conforto e atmosfera inspiradora para produtividade.</p>
  </div>
</div>