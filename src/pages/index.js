import './index.css';
import {
	editButton,
	addButton,
	elements,
	popupEditProfile,
	inputName,
	inputProfession,
	popupAddElement,
	addFormElement,
	popupPhotoFullscreen,
	initialCards,
	object,
	createButton,
	saveButton
} from '../js/utils/constants.js';
import Card from '../js/components/Card.js';
import Section from '../js/components/Section.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import UserInfo from '../js/components/UserInfo.js';
import FormValidator from '../js/components/FormValidator.js';

//Создается и вызывается валидация форм добавления карточки и редактирования профиля
const addFormValidator = new FormValidator(object, popupAddElement);
const editFormValidator = new FormValidator(object, popupEditProfile);
addFormValidator.enableValidation();
editFormValidator.enableValidation();

const photoFullscreen = new PopupWithImage('.popup_type_photo-fullscreen');
photoFullscreen.setEventListeners();

function addCard(item) {
	const card = new Card({
		data: item,
		handleCardClick: (cardInfo) => {
			photoFullscreen.open(cardInfo);
		}
	}, '.element-template');

	const addElement = card.generateCard();
	cardItem.addItem(addElement);
}

const cardItem = new Section({
	items: initialCards,
	renderer: (item) => {
		addCard(item);
	}
}, '.elements');
cardItem.renderItems();

const popupAddCard = new PopupWithForm({
	submitForm: (inputValues) => {
		cardItem.renderAddCard(inputValues);
		popupAddCard.close()
	}
}, '.popup_type_add-element');

addButton.addEventListener('click', () => {
	popupAddCard.open();
	addFormElement.reset();
	addFormValidator.buttonStateDisabled(createButton);
	addFormValidator.errorReset();
});
popupAddCard.setEventListeners();

//Профиль
const userInfo = new UserInfo({
	profileName: '.profile__name',
	profession: '.profile__profession',
});

const editProfile = new PopupWithForm({
	submitForm: (inputValues) => {
		userInfo.setUserInfo(inputValues.name, inputValues.job);
		editProfile.close();
	}
}, '.popup_type_edit-profile');

editButton.addEventListener('click', () => {
	editFormValidator.buttonStateActive(saveButton);
	editFormValidator.errorReset();
	const newUserInfo = userInfo.getUserInfo();

	inputName.value = newUserInfo.name;
	inputProfession.value = newUserInfo.job;
	editProfile.open();
});

editProfile.setEventListeners();