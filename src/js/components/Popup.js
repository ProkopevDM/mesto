export default class Popup {
	constructor(popupSelector) {
		this._popupSelector = document.querySelector(popupSelector);
		this.popupCloseButton = this._popupSelector.querySelector('.popup__button-close');
		this.clickMouse = this.clickMouse.bind(this);
		this.tapEsc = this.tapEsc.bind(this);
	};

	clickMouse(evt) {
		this._handleOverlayClose(evt);
	}

	tapEsc(evt) {
		this._handleEscClose(evt);
	}

// Открыть popup/Навесить слушаетли
	open() {
		this._popupSelector.classList.add('popup_opened');
		this._popupSelector.addEventListener('mousedown', this.clickMouse);
		document.addEventListener("keydown", this.tapEsc);
	};

// Закрыть popup/Удалить слушатели
	close() {
		this._popupSelector.classList.remove('popup_opened');
		this._popupSelector.removeEventListener("mouseup", this.clickMouse);
		document.removeEventListener("keydown", this.tapEsc);
	};

//Закрыть popup по клику на ESC
	_handleEscClose(evt) {
		if (evt.key === 'Escape') {
			this.close();
		}
	};

//Закрыть popup по клику на Overlay
	_handleOverlayClose(evt) {
		if (evt.target.classList.contains('popup')) {
			this.close();
		}
	};

//Навесить слушатель на кнопку закрытия
	setEventListeners() {
		this.popupCloseButton.addEventListener('click', () => {this.close()});
	};
}