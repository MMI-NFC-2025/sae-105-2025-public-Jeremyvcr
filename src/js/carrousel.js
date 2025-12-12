// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    const track = document.querySelector('.carrousel-track');
    const slides = document.querySelectorAll('.carrousel-slide');
    const prevBtn = document.querySelector('.carrousel-btn.prev');
    const nextBtn = document.querySelector('.carrousel-btn.next');
    const indicators = document.querySelectorAll('.indicator');
    
    // Vérifier que les éléments existent
    if (!track || !slides.length || !prevBtn || !nextBtn) {
        console.error('Carrousel : éléments introuvables');
        return;
    }

    let currentSlide = 0;
    const totalSlides = slides.length;

    console.log('Carrousel initialisé avec', totalSlides, 'slides');

    // Fonction pour déplacer le carrousel
    function moveToSlide(index) {
        // Gestion des limites
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        
        console.log('Passage au slide', currentSlide);
        
        // Déplacer la track
        const offset = -currentSlide * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        // Mettre à jour les indicateurs
        indicators.forEach((indicator, i) => {
            if (i === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Bouton Précédent
    prevBtn.addEventListener('click', function() {
        console.log('Clic sur Précédent');
        moveToSlide(currentSlide - 1);
    });

    // Bouton Suivant
    nextBtn.addEventListener('click', function() {
        console.log('Clic sur Suivant');
        moveToSlide(currentSlide + 1);
    });

    // Indicateurs (dots)
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            console.log('Clic sur indicateur', index);
            moveToSlide(index);
        });
    });

    // Défilement automatique toutes les 5 secondes
    let autoSlide = setInterval(function() {
        moveToSlide(currentSlide + 1);
    }, 5000);

    // Pause sur hover
    const carrousel = document.querySelector('.carrousel');
    if (carrousel) {
        carrousel.addEventListener('mouseenter', function() {
            clearInterval(autoSlide);
            console.log('Auto-scroll en pause');
        });

        carrousel.addEventListener('mouseleave', function() {
            autoSlide = setInterval(function() {
                moveToSlide(currentSlide + 1);
            }, 5000);
            console.log('Auto-scroll repris');
        });
    }

    // Support tactile (swipe sur mobile)
    let touchStartX = 0;
    let touchEndX = 0;

    const carrouselContainer = document.querySelector('.carrousel-container');
    
    if (carrouselContainer) {
        carrouselContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        carrouselContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe vers la gauche
            moveToSlide(currentSlide + 1);
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe vers la droite
            moveToSlide(currentSlide - 1);
        }
    }

});
