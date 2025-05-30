
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

function carregarCardapio() {
  fetch('http://localhost:3000/cardapio')
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao carregar o cardápio');
      }
      return response.json();
  })
  .then(data => {
      const container = document.getElementById('cardapio');
      container.innerHTML = ''; // Limpa antes

      data.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'item';

          itemDiv.innerHTML = `
              <h2>${item.nome}</h2>
              <p>${item.descricao}</p>
              <p class="preco">R$ ${item.preco.toFixed(2)}</p>
              <p><em>${item.categoria}</em></p>
          `;

          container.appendChild(itemDiv);
      });
  })
  .catch(error => {
      console.error('Erro:', error);
      document.getElementById('cardapio').innerHTML = '<p>Erro ao carregar o cardápio.</p>';
  });
}

 window.onload = carregarCardapio;