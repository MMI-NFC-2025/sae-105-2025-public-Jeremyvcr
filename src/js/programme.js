// === FILTRES PROGRAMME ===

// Sélectionner tous les boutons de filtre
const filterDayButtons = document.querySelectorAll('.filter-btn[data-day]');
const filterGenreButtons = document.querySelectorAll('.filter-btn[data-genre]');
const concertCards = document.querySelectorAll('.concert-card');
const dayHeaders = document.querySelectorAll('.day-header');

let activeDay = 'all';
let activeGenre = 'all';

// Fonction pour filtrer les concerts
function filterConcerts() {
    concertCards.forEach(card => {
        const cardDay = card.getAttribute('data-day');
        const cardGenre = card.getAttribute('data-genre');
        
        const dayMatch = activeDay === 'all' || cardDay === activeDay;
        const genreMatch = activeGenre === 'all' || cardGenre === activeGenre;
        
        if (dayMatch && genreMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
    // Gérer l'affichage des en-têtes de jour
    dayHeaders.forEach(header => {
        const headerDay = header.getAttribute('data-day');
        const hasConcerts = Array.from(concertCards).some(card => {
            const cardDay = card.getAttribute('data-day');
            const cardGenre = card.getAttribute('data-genre');
            const dayMatch = activeDay === 'all' || cardDay === activeDay;
            const genreMatch = activeGenre === 'all' || cardGenre === activeGenre;
            return cardDay === headerDay && dayMatch && genreMatch && !card.classList.contains('hidden');
        });
        
        if (activeDay === 'all' || headerDay === activeDay) {
            if (hasConcerts) {
                header.classList.remove('hidden');
            } else {
                header.classList.add('hidden');
            }
        } else {
            header.classList.add('hidden');
        }
    });
}

// Filtre par jour
filterDayButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons jour
        filterDayButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        activeDay = button.getAttribute('data-day');
        filterConcerts();
    });
});

// Filtre par genre
filterGenreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons genre
        filterGenreButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        activeGenre = button.getAttribute('data-genre');
        filterConcerts();
    });
});
// === FILTRES PROGRAMME ===

// Sélectionner tous les boutons de filtre
const filterDayButtons = document.querySelectorAll('.filter-btn[data-day]');
const filterGenreButtons = document.querySelectorAll('.filter-btn[data-genre]');
const concertCards = document.querySelectorAll('.concert-card');
const dayHeaders = document.querySelectorAll('.day-header');

let activeDay = 'all';
let activeGenre = 'all';

// Fonction pour filtrer les concerts
function filterConcerts() {
    concertCards.forEach(card => {
        const cardDay = card.getAttribute('data-day');
        const cardGenre = card.getAttribute('data-genre');
        
        const dayMatch = activeDay === 'all' || cardDay === activeDay;
        const genreMatch = activeGenre === 'all' || cardGenre === activeGenre;
        
        if (dayMatch && genreMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
    
    // Gérer l'affichage des en-têtes de jour
    dayHeaders.forEach(header => {
        const headerDay = header.getAttribute('data-day');
        const hasConcerts = Array.from(concertCards).some(card => {
            const cardDay = card.getAttribute('data-day');
            const cardGenre = card.getAttribute('data-genre');
            const dayMatch = activeDay === 'all' || cardDay === activeDay;
            const genreMatch = activeGenre === 'all' || cardGenre === activeGenre;
            return cardDay === headerDay && dayMatch && genreMatch && !card.classList.contains('hidden');
        });
        
        if (activeDay === 'all' || headerDay === activeDay) {
            if (hasConcerts) {
                header.classList.remove('hidden');
            } else {
                header.classList.add('hidden');
            }
        } else {
            header.classList.add('hidden');
        }
    });
}

// Filtre par jour
filterDayButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons jour
        filterDayButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        activeDay = button.getAttribute('data-day');
        filterConcerts();
    });
});

// Filtre par genre
filterGenreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons genre
        filterGenreButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
        
        activeGenre = button.getAttribute('data-genre');
        filterConcerts();
    });
});
