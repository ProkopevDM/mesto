export default class Card {
	constructor ({data, user, handleCardClick, handleCardClickDelete, handleLikeClick}, cardSelector) {
		this._text = data.name;
		this._link = data.link;
		this._cardId = data._id;
		this._postCardId = data.owner._id;
		this._like = data.likes;
		this._userId = user._id;
		this._handleCardClick = handleCardClick;
		this._handleCardClickDelete = handleCardClickDelete;
		this._handleLikeClick = handleLikeClick;
		this._cardSelector = cardSelector;
	};

	_setEventListeners() {
		const elementPhoto = this._element.querySelector('.element__photo');
		this._element.querySelector('.element__button-delete').addEventListener('click', () => {this._handleCardClickDelete({
			alt: elementPhoto.alt,
			link: elementPhoto.src,
			name: this._element.textContent,
		})});
		elementPhoto.addEventListener('click', () => {this._handleCardClick({
			alt: elementPhoto.alt,
			link: elementPhoto.src,
			name: this._element.textContent,
		})});
		const likeCard = this._element.querySelector('.element__button-like');
		likeCard.addEventListener('click', () => {this._handleLikeClick(likeCard, this._cardId, this._like)});
	};

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();

		const elementPhoto = this._element.querySelector('.element__photo');
		const elementPlace = this._element.querySelector('.element__place');
		const elementLikes = this._element.querySelector('.element__liked')

		elementPhoto.src = this._link;
		elementPhoto.alt = this._text;
		elementPlace.textContent = this._text;
		elementLikes.textContent = this._like.length;
		this._deleteButtonVisibility();
		this._setEventListeners();

		return this._element;
	};

	_deleteButtonVisibility() {
		const buttonDelete = this._element.querySelector(".element__button-delete");
		if (this._postCardId !== this._userId) {
			buttonDelete.style.display = 'none';
		}
	}

	_elementDelete() {
		this._element.remove();
		this._element = null;
	};

	// _elementLike() {
	// 	this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active')
	// };
}