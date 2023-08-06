import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const container = document.querySelector(".gallery");
console.log(container);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li> <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> </li>`;
    })
    .join("");
}
createMarkup(galleryItems);
console.log(createMarkup);
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

new SimpleLightbox(".gallery a", { captionsData: "alt", captionsDelay: 250 });
