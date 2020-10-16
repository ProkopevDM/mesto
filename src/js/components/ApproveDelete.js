import Popup from './Popup.js';

export default class ApproveDelete extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._popupDeleteCard = document.querySelector(popupSelector);
		this._anyBtnSubmitForm = this._popupDeleteCard.querySelector('.popup__form-button');
	}

	actionBtn(text) {
		this._anyBtnSubmitForm.textContent = text;
	}

	setSubmitAction(submitActon) {
		this._handleCardClickDelete = submitActon;
	}

	setEventListeners() {
		super.setEventListeners();
		this._formSubmit = this._popupDeleteCard.querySelector('.popup__form');
		this._formSubmit.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._handleCardClickDelete();
		});
	}
}