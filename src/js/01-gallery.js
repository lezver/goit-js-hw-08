// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const [gallery] = document.getElementsByClassName('gallery');

const createGallery = items =>
  [...items].reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
			<li class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img class="gallery__image" src="${preview}" alt="${description}" />
				</a>
			</li>
			`,
    ''
  );

gallery.innerHTML = createGallery(galleryItems);

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionsData: 'alt',
  captionDelay: 250,
});
