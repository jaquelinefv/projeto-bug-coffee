
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