import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

// ======= Створюємо розмітку

const galleryCard = (flower) => {
    // кріейтемо "а"-шку
    const linkOfPicture = document.createElement('a');
    /* linkOfPicture.classList.add('gallery__link'); */
    linkOfPicture.classList.add('gallery__item');
    linkOfPicture.href = flower.original;

    // кріейтемо імг-шку
    const imgOfPicture = document.createElement('img');
    imgOfPicture.classList.add('gallery__image');
    imgOfPicture.src = flower.preview;
    imgOfPicture.alt = flower.description;
    /* imgOfPicture.setAttribute('data-source', flower.original); */

    // вкладаємо імаджі у посилання
    linkOfPicture.append(imgOfPicture);    
    // console.log(aOfPicture);

    return linkOfPicture;
    // console.log(imgOfPicture);
};

// мапаємо масив у галерею
const galleryCards = galleryItems.map(galleryCard);
// console.log(...galleryCards);


// ============ Закидуємо розмірку у ДОМ і отримуємо url великого зображення

// шукаємо дів-ку
const gallery = document.querySelector('.gallery')
// console.log(gallery);

// аппендимо галерею в ДОМ
gallery.append(...galleryCards);

// // ============ Додаємо слухача на gallery (галарею в цілому), та виклик SimpleLightbox


gallery.addEventListener('click', openModal);


function openModal(event) {
    event.preventDefault();
}

let lightbox = new SimpleLightbox('.gallery a', {
    // close: false,
    // showCounter: false,
    // captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    // captionPosition: 'bottom',
});