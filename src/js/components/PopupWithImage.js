import Popup from './Popup.js';
import {openPopupPhotoFullscreen, photoFullscreenTitle} from './../utils/constants.js';

export default class PopupWithImage extends Popup{
	constructor(popupSelector) {
		super(popupSelector);
	};

	open(cardInfo) {
		openPopupPhotoFullscreen.src = cardInfo.link;
		openPopupPhotoFullscreen.alt = cardInfo.alt;
		photoFullscreenTitle.textContent = cardInfo.name;
		super.open();
	};
}