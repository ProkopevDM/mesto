import {popupPhotoFullscreen, openPopupPhotoFullscreen, photoFullscreenTitle} from './constants.js';

function togglePopup(popupOpen) {
	popupOpen.classList.toggle('popup_opened');
	document.addEventListener('keydown', function closePopup(evt) {
		if (evt.key === 'Escape') { 
			popupOpen.classList.remove('popup_opened');
			document.removeEventListener('keydown', closePopup);
		}
	});

	document.addEventListener('mousedown', function closePopup(evt) {
		if (evt.target.classList.contains('popup')) { 
			popupOpen.classList.remove('popup_opened');
			document.removeEventListener('mousedown', closePopup);
		}
	});
}

export {popupPhotoFullscreen, openPopupPhotoFullscreen, photoFullscreenTitle, togglePopup}