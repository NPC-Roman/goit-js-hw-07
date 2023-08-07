import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const container = document.querySelector(".gallery");
console.log(container);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class=".js-gallery-item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}
createMarkup(galleryItems);
console.log(createMarkup);
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

container.addEventListener("click", ImageClick);
function ImageClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  evt.preventDefault();
  modalOpen(evt);
  console.log(evt.target.dataset.source);
}

function modalOpen(evt) {
  const originalSizeImage = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${originalSizeImage}" width="1980" height="1024">`
  );
  instance.show();

  container.addEventListener("keydown", onEscapeClick);

  function onEscapeClick(evt) {
    if (modalOpen && evt.key === "Escape") {
      instance.close();
      container.removeEventListener("keydown", onEscapeClick);
    }
  }
}
