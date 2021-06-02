'use strict';

function toggleModal() {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}

toggleModal();

const closeModalButton = document.querySelector('#closeModal');

closeModalButton.addEventListener('click', () => {
    toggleModal();
});