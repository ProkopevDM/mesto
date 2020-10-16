export default class Card {
	constructor ({data, user, handleCardClick, handleCardClickDelete, handleCardLikeClick, handleCardDislikeClick}, cardSelector) {
		this._data = data;
		this._text = data.name;
		this._link = data.link;
		this._cardId = data._id;
		this._postCardId = data.owner._id;
		this._like = data.likes;
		this._userId = user._id;
		this._handleCardClick = handleCardClick;
		this._handleCardClickDelete = handleCardClickDelete;
		this._handleCardLikeClick = handleCardLikeClick;
		this._handleCardDislikeClick = handleCardDislikeClick;
		this._cardSelector = cardSelector;
	};

	_setEventListeners() {
		const elementPhoto = this._element.querySelector('.element__photo');
		const elementDelete = this._element.querySelector('.element__button-delete');
		const likeCard = this._element.querySelector('.element__button-like');

		elementPhoto.addEventListener('click', () => {
			this._handleCardClick({
				alt: elementPhoto.alt,
				link: elementPhoto.src,
				name: this._element.textContent,
		})});

		elementDelete.addEventListener('click', () => {
			this._handleCardClickDelete(this._cardId);
		});

		likeCard.addEventListener('click', () => {
			this._renderLike();
		});
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
		this._deleteButtonVisibility();
		this.updateLike(this._data);
		this._setEventListeners();
		return this._element;
	};

	_deleteButtonVisibility() {
		const buttonDelete = this._element.querySelector('.element__button-delete');
		if (this._postCardId !== this._userId) {
			buttonDelete.style.display = 'none';
		}
	}

	elementDelete() {
		this._element.remove();
		this._element = null;
	};

	_renderLikesNumber(setNumber) {
		const spanLike = this._element.querySelector('.element__liked');
		spanLike.textContent = setNumber.length;
	}

	updateLike(likeData) {
		this._setLike = likeData.likes;
		this._renderLikesNumber(this._setLike);
		const isLiked = this._setLike.some((person) => {
			return person._id === `${this._userId}`;
		});
		this._checkLike(isLiked);
	}

	_checkLike(isLiked) {
		if (isLiked) {
			this._element.querySelector('.element__button-like').classList.add('element__button-like_active');
		} else {
				this._element.querySelector('.element__button-like').classList.remove('element__button-like_active');
		}
	}

	_renderLike() {
		if (this._element.querySelector('.element__button-like').classList.contains('element__button-like_active')) {
			this._handleCardDislikeClick(this._cardId);
		} else {
			this._handleCardLikeClick(this._cardId);
		}
	}
}