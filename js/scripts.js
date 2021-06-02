'use strict';

function toggleModal() {
    const overlay = document.querySelector('#overlay');
    overlay.classList.toggle('visible');
}

const closeModalButton = document.querySelector('#closeModal');

closeModalButton.addEventListener('click', () => {
    toggleModal();
});

function buildQuote(theQuote) {
    const modalElement = document.querySelector('#modal p');
    modalElement.innerText = theQuote;
    toggleModal();
}

document.addEventListener('DOMContentLoaded', () => {
    fetch(
        'https://api.chucknorris.io/jokes/random?category=dev'
    ).then((response) => {
            return response.json();
    }).then((data) => {
            buildQuote(data.value);
    }).catch((error) => {
            console.error("ERROR: ", error);
            return error;
    });
});