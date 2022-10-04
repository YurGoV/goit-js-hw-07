import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);


const galleryCards = galleryItems.map(({description, original, preview}) => 
  `<a class="gallery__item" href="${original}">
  <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>`)
.join("");


const refGallery = document.querySelector('.gallery')// шукаємо дів-ку
// console.log(refGallery);

refGallery.insertAdjacentHTML('beforeend', galleryCards)// аджастимо галерею в ДОМ

refGallery.addEventListener('click', openModal);//Додаємо слухача на gallery (галарею в цілому), та виклик SimpleLightbox


function openModal(event) {
    event.preventDefault();//не даємо відкриватися імг-шці за замовченням
}

// ініціалізуємо SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
    // close: false,
    // showCounter: false,
    // captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    // captionPosition: 'bottom',
});


// =====================
// РОЗМІТКА ЧЕРЕЗ АППЕНД
// // ======= Створюємо розмітку

// const galleryCard = (flower) => {
//     // кріейтемо "а"-шку
//     const linkOfPicture = document.createElement('a');
//     /* linkOfPicture.classList.add('gallery__link'); */
//     linkOfPicture.classList.add('gallery__item');
//     linkOfPicture.href = flower.original;

//     // кріейтемо імг-шку
//     const imgOfPicture = document.createElement('img');
//     imgOfPicture.classList.add('gallery__image');
//     imgOfPicture.src = flower.preview;
//     imgOfPicture.alt = flower.description;
//     /* imgOfPicture.setAttribute('data-source', flower.original); */

//     // вкладаємо імаджі у посилання
//     linkOfPicture.append(imgOfPicture);
//     // console.log(aOfPicture);

//     return linkOfPicture;
//     // console.log(imgOfPicture);
    
// };

// // мапаємо масив у галерею
// const galleryCards = galleryItems.map(galleryCard);
// console.log(...galleryCards);

// // аппендимо галерею в ДОМ
// gallery.append(...galleryCards);