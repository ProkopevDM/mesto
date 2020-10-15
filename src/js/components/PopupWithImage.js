import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
	constructor(popupSelector, imagesData, imagesTitle) {
		super(popupSelector);
		this._imagesData = imagesData;
		this._imagesTitle = imagesTitle;
	};

	open(cardInfo) {
		this._imagesData.src = cardInfo.link;
		this._imagesData.alt = cardInfo.alt;
		this._imagesTitle.textContent = cardInfo.alt;
		super.open();
	};
}