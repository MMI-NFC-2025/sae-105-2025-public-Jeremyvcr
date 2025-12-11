// === FILTRES ET RECHERCHE ARTISTES ===

const searchInput = document.getElementById('search-input');
const filterDayButtons = document.querySelectorAll('.filter-day-btn');
const artisteCards = document.querySelectorAll('.artiste-card');
const artistesCount = document.querySelector('.artistes-count');

let activeFilter = 'all';

// Fonction pour mettre à jour le compteur
function updateCount() {
    const visibleCards = document.querySelectorAll('.artiste-card:not(.hidden)');
    const count = visibleCards.length;
    artistesCount.textContent = `${count} artiste${count > 1 ? 's' : ''}`;
}

// Fonction pour filtrer les artistes
function filterArtistes() {
    const searchTerm = searchInput.value.toLowerCase();
    
    artisteCards.forEach(card => {
        const artisteName = card.getAttribute('data-name').toLowerCase();
        const artisteDay = card.getAttribute('data-day');
        
        const matchesSearch = artisteName.includes(searchTerm);
        const matchesDay = activeFilter === 'all' || artisteDay === activeFilter;
        
        if (matchesSearch && matchesDay) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
    updateCount();
}

// Filtre par jour
filterDayButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        filterDayButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        activeFilter = button.getAttribute('data-filter');
        filterArtistes();
    });
});

// Recherche en temps réel
searchInput.addEventListener('input', filterArtistes);

// Initialiser le compteur au chargement
updateCount();
