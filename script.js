// Variável header declarada no escopo global.
const header = document.querySelector("header");

// Função para rolar suavemente até a seção correspondente com espaço entre o menu.
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = header.offsetHeight;
    const space = 40; // Espaço desejado entre o menu e a seção.
    window.scrollTo({
      top: section.offsetTop - headerHeight - space,
      behavior: "smooth"
    });
  }
}

// Adiciona um evento de clique a todos os links do menu.
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link.
      const sectionId = link.getAttribute("href").substring(1); // Remove o "#" do href.
      scrollToSection(sectionId);
    });
  });
});
