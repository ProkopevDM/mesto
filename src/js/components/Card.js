export default class Card {
	constructor ({data, handleCardClick}, cardSelector) {
		this._text = data.name;
		this._link = data.link;
		this._handleCardClick = handleCardClick;
		this._cardSelector = cardSelector;
	};

	_setEventListeners() {
		const elementPhoto = this._element.querySelector('.element__photo');
		this._element.querySelector('.element__button-delete').addEventListener('click', () => {this._elementDelete()});
		elementPhoto.addEventListener('click', () => {this._handleCardClick({
			alt: elementPhoto.alt,
			link: elementPhoto.src,
			name: this._element.textContent,
		})});
		this._element.querySelector('.element__button-like').addEventListener('click', () => {this._elementLike()});
	};

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();

		const elementPhoto = this._element.querySelector('.element__photo');
		const elementPlace = this._element.querySelector('.element__place');

		elementPhoto.src = this._link;
		elementPhoto.alt = this._text;
		elementPlace.textContent = this._text;
		this._setEventListeners();

		return this._element;
	};

	_elementDelete() {
		this._element.remove();
		this._element = null;
	};

	_elementLike() {
		this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active')
	};
}