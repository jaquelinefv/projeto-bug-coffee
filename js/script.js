
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
  {
    categoria: "Bebidas",
    nome: "Café Expresso",
    descricao: "Café forte e encorpado.",
    preco: 5.00
  },
  {
    categoria: "Bebidas",
    nome: "Chá Gelado",
    descricao: " Chá refrigerado na geladeira",
    preco: 5.00
  },
  
  {
    categoria: "Bebidas",
    nome: "Capuccino",
    descricao: "Café com leite e espuma cremosa.",
    preco: 7.50
  },
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
  }
];


function carregarCardapio() {
  const categorias = {
    "Bebidas": document.querySelector("section:nth-of-type(2) .menu-item"),
    "Salgados": document.querySelector("section:nth-of-type(3)"),
    "Doces": document.querySelector("section:nth-of-type(4)")
  };

  cardapio.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

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