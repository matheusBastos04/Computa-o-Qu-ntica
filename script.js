document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.getElementById('mobile-menu');
    var navbar = document.getElementById('navbar');
  
    mobileMenuButton.addEventListener('click', function () {
      // Alternar a classe 'show' na navegação para mostrar ou ocultar o menu
      navbar.classList.toggle('show');
    });
  });