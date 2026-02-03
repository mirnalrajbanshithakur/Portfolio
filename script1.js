const cards = document.querySelectorAll('.card');
        let currentIndex = 0;

        function updateSlider() {
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next', 'hide');
                
                if (index === currentIndex) {
                    card.classList.add('active');
                } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                    card.classList.add('prev');
                } else if (index === (currentIndex + 1) % cards.length) {
                    card.classList.add('next');
                } else {
                    card.classList.add('hide');
                }
            });
        }

        function rotate(direction) {
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % cards.length;
            } else {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            }
            updateSlider();
        }

// Scroll buttons for grid
const gridContainer = document.querySelector('.grid-container');
const scrollUpBtn = document.querySelector('.scroll-btn.up');
const scrollDownBtn = document.querySelector('.scroll-btn.down');

scrollUpBtn.addEventListener('click', () => {
    gridContainer.scrollBy({ top: -100, behavior: 'smooth' });
});

scrollDownBtn.addEventListener('click', () => {
    gridContainer.scrollBy({ top: 100, behavior: 'smooth' });
});

// Modal functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

document.querySelector('.grid-container').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});