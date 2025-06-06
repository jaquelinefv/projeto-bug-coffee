 
// Validação do formulário
const form = document.getElementById("form-contato");
if (form) {
  form.addEventListener("submit", function (e) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha nome, email e mensagem.");
      e.preventDefault();
    } else {
      alert("Mensagem enviada com sucesso!");
    }
  });
}

// Menu Mobile
const toggleBtn = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}


//Consumo API
const cardapio = [

  // bebidas 

  {
    categoria: "Bebidas",
    nome: "Café Expresso",
    descricao: "Café forte e encorpado.",
    preco: 5.00
  },
  {
    categoria: "Bebidas",
    nome: "Chá Gelado",
    descricao: "Chá refrigerado na geladeira",
    preco: 5.00
  },
  
  {
    categoria: "Bebidas",
    nome: "Café Bugado",
    descricao: "Espresso intenso, do jeitinho que desperta a mente.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Capuccino",
    descricao: "Café com leite e espuma cremosa.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Latte Clássico",
    descricao: "Leite vaporizado com uma dose dupla de espresso.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Cappuccino Crocante",
    descricao: "Com toque de cacau e cobertura de canela.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Mocha Mutante",
    descricao: "Chocolate amargo, café e chantilly.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Expresso do Chef",
    descricao: "Receita secreta, surpresa do barista.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Chá Bug Verde" ,
    descricao: "Matcha artesanal com leite de amêndoas.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Refresco de Maracujá com Hortelã",
    descricao: "Calmaria líquida.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Suco Detox da Floresta",
    descricao: "Couve, maçã, limão e gengibre.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Smoothie Zen",
    descricao: "Banana, morango e aveia.",
    preco: 7.50
  },
  {
    categoria: "Bebidas",
    nome: "Água com Gás + Gotas de Hibisco",
    descricao: "Elegância e leveza.",
    preco: 7.50
  },

  // salgados 

  {
    categoria: "Salgados",
    nome: "Pão de Queijo",
    descricao: "Tradicional pão de queijo mineiro.",
    preco: 4.00
  },
  {
    categoria: "Salgados",
    nome: "Croissant",
    descricao: "Croissant recheado com presunto e queijo.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Croissant de Queijo Brie e Mel",
    descricao: "Massa folhada francesa com recheio cremoso e um toque doce.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Empada de Frango Caipira",
    descricao: "Recheio caseiro, massa amanteigada. Sabor de roça no coração da cidade.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Esfiha de Carne com Limão",
    descricao: "Carne bem temperada, toque cítrico no final. Para comer de olhos fechados.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Mini Sanduíche Integral com Atum",
    descricao: "Pão integral recheado com atum, maionese leve e um toque de limão.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Tapioca de Queijo Coalho",
    descricao: "Clássico nordestino: queijo coalho grelhado na tapioca quente e levemente salgada.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Tostex Caprese",
    descricao: "Mussarela derretida, tomate fresco e manjericão no pão rústico. O básico elevado ao gourmet.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Wrap de Frango com Cream Cheese",
    descricao: "Enrolado fresquinho recheado com tiras de frango grelhado, queijo cremoso e folhas verdes.",
    preco: 6.50
  },
   {
    categoria: "Salgados",
    nome: "Pastel de Forno de Palmito",
    descricao: "Recheio cremoso de palmito, com massa leve e assada — sem fritura.",
    preco: 6.50
  },

    // Doces 
  {
    categoria: "Doces",
    nome: "Bolo de Chocolate",
    descricao: "Fatia de bolo com cobertura de chocolate.",
    preco: 6.00
  },
  {
    categoria: "Doces",
    nome: "Torta de Limão",
    descricao: "Torta gelada com creme de limão e merengue.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Brownie Explosivo com Nozes",
    descricao: "Massa densa, meio molhadinha, com nozes crocantes e chocolate que derrete na alma.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Cheesecake de Frutas Vermelhas",
    descricao: "Textura cremosa com cobertura de frutas ácidas — combinação perfeita.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Pudim de Café com Caramelo",
    descricao: "Clássico reinventado com toque de café. Suave, cremoso e viciante.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Banoffee do Bug",
    descricao: "Base crocante, doce de leite, banana e chantilly. Vício à primeira colherada.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Tapioca Doce de Coco com Leite Condensado",
    descricao: "Simples, doce e cremosa. Conforto em forma de tapioca.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Mousse de Maracujá Refrescante",
    descricao: "Leve, aerado, cítrico e docinho. Um clássico tropical geladinho.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Cookie Giga com Gotas de Chocolate",
    descricao: "Do tamanho de um sonho e recheado com pedaços de felicidade derretida.",
    preco: 7.00
  },
   {
    categoria: "Doces",
    nome: "Brigadeiro Gourmet (vários sabores)",
    descricao: "Clássicos reinventados: tradicional, pistache, limão siciliano, paçoca...",
    preco: 7.00
  }
];

  // script cardapio

function carregarCardapio() {
  const categorias = {
    "Bebidas": document.querySelector("section:nth-of-type(2) "),
    "Salgados": document.querySelector("section:nth-of-type(3)"),
    "Doces": document.querySelector("section:nth-of-type(4)")
  };

  cardapio.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');

    itemDiv.innerHTML = `
      <h4>${item.nome}</h4>
      <p>${item.descricao}</p>
      <p><strong>R$ ${item.preco.toFixed(2)}</strong></p>
    `;

    if (item.categoria === "Bebidas") {
      categorias["Bebidas"].appendChild(itemDiv);
    } else if (item.categoria === "Salgados") {
      categorias["Salgados"].appendChild(itemDiv);
    } else if (item.categoria === "Doces") {
      categorias["Doces"].appendChild(itemDiv);
    }
  });
}

 // script para atualizar a data das reservas aultomaticamente

document.addEventListener("DOMContentLoaded", function () {
  const selectData = document.getElementById("select-data");
  if (selectData) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const hoje = new Date();
    for (let i = 0; i < 7; i++) {
      const data = new Date(hoje);
      data.setDate(data.getDate() + i);

      const dia = String(data.getDate()).padStart(2, '0');
      const mes = meses[data.getMonth()];
      const ano = data.getFullYear();
      const semana = diasSemana[data.getDay()];

      const texto = `${dia} ${mes} ${ano} (${semana})`;
      const option = document.createElement("option");
      option.textContent = texto;
      option.value = texto;

      selectData.appendChild(option);
    }
  }
});

// mensagem apos reserva

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-step-reserva");
  const msg = document.getElementById("mensagem-reserva");

  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.style.display = "block";
      form.reset();

      setTimeout(() => {
        msg.style.display = "none";
      }, 5000);
    });
  }
});