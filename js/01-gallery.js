import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryCards = galleryItems.map((oneCard) => 
  `<a class="gallery__link" href="${oneCard.original}">
  <img 
    class="gallery__image"
    src="${oneCard.preview}"
    data-source="${oneCard.original}"
    alt="${oneCard.description}"
  />
</a>`)
.join("");

// ============
// Закидуємо розмітку у ДОМ і отримуємо url великого зображення

// шукаємо дів-ку
const gallery = document.querySelector('div.gallery')
// console.log(gallery);

// аппендимо галерею в ДОМ
// gallery.append(...galleryCards);
gallery.insertAdjacentHTML('beforeend', galleryCards);


// ============
// Додаємо слухача на gallery (галарею в цілому), виклик basicLightbox, та прослуховування клави

let instance = '';

gallery.addEventListener('click', openModal);

function openModal(event) {//
    event.preventDefault();
    const modalSrc = event.target.dataset.source;//отримуємо посилання на поточний src

    // викликаємо модалку basic
    instance = basicLightbox.create(`
            <img min-width="100%" min-height="100%" src=${modalSrc}>                
    `,{
      onShow: () => {document.addEventListener('keyup', onCloseModal)/* console.log("onShow!!!") */;},//додаємо слухача клави при відкритті модалки
      onClose: () => {document.removeEventListener('keyup', onCloseModal)/* console.log("onClose!!!") */;}// знімаємо слухача клави при закритті модалки мишею
    },
    );
    instance.show();
}

function onCloseModal(event) {
  // console.log(event);
  if (event.key === "Escape"){
    instance.close();
  const modal = document.querySelector('div.basicLightbox')
  }
  // console.log(event.type);//перевіряємо чи знімається слухач з клави
}
// =====================
// РОЗМІТКА ЧЕРЕЗ АППЕНД
// Створюємо розмітку
/* 
const galleryCard = (flower) => {
    // кріейтемо "а"-шку
    const linkOfPicture = document.createElement('a');
    linkOfPicture.classList.add('gallery__link');
    linkOfPicture.href = flower.original;

    // кріейтемо імг-шку
    const imgOfPicture = document.createElement('img');
    imgOfPicture.classList.add('gallery__image');
    imgOfPicture.src = flower.preview;
    imgOfPicture.alt = flower.description;
    imgOfPicture.setAttribute('data-source', flower.original);

    // console.log(flower.preview);

    // вкладаємо імаджі у посилання
    linkOfPicture.append(imgOfPicture);    
    // console.log(aOfPicture);

    return linkOfPicture;
    // console.log(imgOfPicture);
};


// мапаємо масив у галерею
// const galleryCards = galleryItems.map(galleryCard);
// console.log(galleryCards);

 */
