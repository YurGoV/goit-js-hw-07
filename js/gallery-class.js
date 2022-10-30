export class Gallery {
    constructor (galleryDomRef, galleryItemsArray) {
      this.gallery = galleryDomRef;
      this.itemsArray = galleryItemsArray;
      // this.itemsMarkup = '';
  
     this.itemsMarkup = this.makeGalleryCards();
  
    //  console.log(this.itemsMarkup);
  
     this.gallery.insertAdjacentHTML('beforeend', this.itemsMarkup);//інсертимо галерею в ДОМ
      
    }
  
    makeGalleryCards () {
    return this.itemsArray.map(({description, original, preview}) => 
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img 
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
     </a>
     </div>`)
    .join("");
  
    // console.log(itemsMarkup);
    }
  };