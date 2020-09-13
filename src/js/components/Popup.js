export default class Popup {
	constructor(popupSelector) {
		this._popupSelector = document.querySelector(popupSelector);
	};

// Открыть popup/Навесить слушаетли
	open() {
		this._popupSelector.classList.add('popup_opened');
		this._popupSelector.addEventListener('mousedown', (evt) => this._handleOverlayClose(evt));
		document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
	};

// Закрыть popup/Удалить слушатели
	close() {
		this._popupSelector.classList.remove('popup_opened');
		this._popupSelector.removeEventListener("mouseup", this._handleOverlayClose);
		document.removeEventListener("keydown", this._handleEscClose);
	};

//Закрыть popup по клику на ESC
	_handleEscClose(evt) {
		if (evt.key === 'Escape' && this._popupSelector.classList.contains('popup_opened')) { 
			this.close();
		}
	};

//Закрыть popup по клику на Overlay
	_handleOverlayClose(evt) {
		if (evt.target.classList.contains('popup') && this._popupSelector.classList.contains('popup_opened')) {
			this.close();
		}
	};

//Навесить слушатель на кнопку закрытия
	setEventListeners() {
		const popupCloseButton = this._popupSelector.querySelector('.popup__button-close');
		popupCloseButton.addEventListener('click', () => {this.close()});
	};
}