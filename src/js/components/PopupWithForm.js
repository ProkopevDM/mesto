import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor({submitForm}, popupSelector) {
		super(popupSelector);
		this._submitForm = submitForm;
	};

	_getInputValues() {
		this._inputList = this._popupSelector.querySelectorAll('.popup__input');
		this._formValues = {};
		this._inputList.forEach((input) => {
			this._formValues[input.name] = input.value;
		});
		return this._formValues;
	};

	setEventListeners() {
		const anyPopupSubmitForm = this._popupSelector.querySelector('.popup__form');
		anyPopupSubmitForm.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._submitForm(this._getInputValues());
		});
		super.setEventListeners();
	};

	close() {
		super.close();
	};
}