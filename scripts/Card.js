import {popupPhotoFullscreen, openPopupPhotoFullscreen, photoFullscreenTitle} from './constants.js';
import {togglePopup} from './index.js'

export class Card {
	constructor (data, cardSelector) {
		this._cardSelector = cardSelector;
		this._text = data.name;
		this._link = data.link;
	};

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();

		this._element.querySelector('.element__photo').src = this._link;
		this._element.querySelector('.element__photo').alt = this._text;
		this._element.querySelector('.element__place').textContent = this._text;
		return this._element;
	};

	_setEventListeners() {
		this._element.querySelector('.element__button-delete').addEventListener('click', () => {this._elementDelete()});;
		this._element.querySelector('.element__photo').addEventListener('click', () => {this._openPhoto()});
		this._element.querySelector('.element__button-like').addEventListener('click', () => {this._elementLike()});
	};

	_elementDelete() {
		this._element.closest('.element').remove();
	};

	_openPhoto() {
		openPopupPhotoFullscreen.src = this._link;
		openPopupPhotoFullscreen.alt = this._text;
		photoFullscreenTitle.textContent = this._text;
		togglePopup(popupPhotoFullscreen);
	};

	_elementLike() {
		this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active')
	};
}
