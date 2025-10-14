// --- Gestion du menu burger (mobile) ---

// Sélection des éléments
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('menu-overlay');

// Fonction ouverture / fermeture du menu
function toggleMenu() {
  const isOpen = navLinks.classList.toggle('active');
  burger.classList.toggle('open', isOpen);
  overlay.classList.toggle('active', isOpen);

  // Accessibilité
  burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navLinks.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

// Ouvrir/fermer au clic sur le burger
burger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Fermer si on clique sur l'overlay
overlay.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) toggleMenu();
});

// Fermer si on clique sur un lien du menu
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) toggleMenu();
  });
});

// Fermer avec la touche ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    toggleMenu();
  }
});

// Fermer si l’écran est redimensionné au-dessus de 768px
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
    toggleMenu();
  }
});
