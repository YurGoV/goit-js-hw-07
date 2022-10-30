import { galleryItems } from './gallery-items.js';
// Change code below this line

import { Gallery } from './gallery-class.js';

const refGallery = document.querySelector('div.gallery')// шукаємо дів-ку галереї

let lightBoxInstanse = '';//ініціалізуємо


// додаткове тренування: Переробка на клас



const gallery = new Gallery(refGallery, galleryItems);//будуємо галерею в ДОМі з класу


refGallery.addEventListener('click', onOpenModal);//додаємо слухача (на галарею в цілому)

function onOpenModal(event) {
    event.preventDefault();//не даємо відкриватися імг-шці за замовченням
    const modalSrc = event.target.dataset.source;//отримуємо посилання на поточний src

    // викликаємо модалку basic
    lightBoxInstanse = basicLightbox.create(`
            <img min-width="100%" min-height="100%" src=${modalSrc}>                
    `,{
      onShow: () => {document.addEventListener('keyup', onCloseModal)/* console.log("onShow!!!") */;},//додаємо слухача клави при відкритті модалки
      onClose: () => {document.removeEventListener('keyup', onCloseModal)/* console.log("onClose!!!") */;}// знімаємо слухача клави при закритті модалки мишею
    },
    );
    lightBoxInstanse.show();
}

function onCloseModal(event) {
  // console.log(event);
  if (event.key === "Escape"){
    lightBoxInstanse.close();
  }
  // console.log(event.type);//перевіряємо чи знімається слухач з клави
}
