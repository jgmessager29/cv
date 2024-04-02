function openOnglet(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('onglet-contenu');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
  
    tablinks = document.getElementsByClassName('onglet-lien');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Script Onglet
document.addEventListener('DOMContentLoaded', function() {
  var scriptOnglet = document.createElement('script');
  scriptOnglet.src = 'scripts/script.js';
  document.body.appendChild(scriptOnglet);
});

// Script Onglet Accueil par défaut
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('defaultOpen').click();
});

// Script Questionnement pour télécharger contact.vcf
function confirmDownload(filename) {
  return confirm("Voulez-vous télécharger la carte de visite : " + filename + " ?");
}

// Désactive le clic droit
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Effacer automatiquement le contenu du presse-papiers
document.addEventListener('copy', function(e) {
  e.preventDefault();
  window.clipboardData.setData('text', '');
});

// Faire défiler vers le haut
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement fluide
  });
}

// Sélectionne le bouton de retour en haut de page
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Ajoute un écouteur d'événements pour détecter le défilement de la fenêtre
window.addEventListener("scroll", () => {
    // Si la position de défilement verticale est supérieure à 20 pixels, affiche le bouton, sinon cache-le
    if (window.scrollY > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Ajoute un écouteur d'événements pour détecter le clic sur le bouton de retour en haut de page
scrollToTopBtn.addEventListener("click", () => {
    // Fait défiler la fenêtre vers le haut de la page avec une animation fluide
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
  

