import {
	profile,
	editButton,
	profileName,
	profession,
	addButton,
	elements,
	elementsTemplate,
	popupEditProfile,
	editProfileCloseButton,
	editFormElement,
	inputName,
	inputProfession,
	popupAddElement,
	addElementCloseButton,
	addFormElement,
	inputPlace,
	inputUrl,
	popupPhotoFullscreen,
	openPopupPhotoFullscreen,
	photoFullscreenTitle,
	photoFullscreenCloseButton,
	initialCards,
	object
} from './constants.js';
import {togglePopup} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

initialCards.forEach(data => {
	renderElements(data);
});

function renderElements (data) {
	const card = new Card(data, '.element-template');
	const cardElement = card.generateCard();
	elements.prepend(cardElement);
}

function profileFormSubmitHandler (evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profession.textContent = inputProfession.value;
	togglePopup(popupEditProfile);
}

function addElement (evt) {
	evt.preventDefault();
	renderElements({name:inputPlace.value, link:inputUrl.value});
	togglePopup(popupAddElement);
}

function profileInputStandardValue() {
	inputName.value = profileName.textContent;
	inputProfession.value = profession.textContent;
	const editFormValidator = new FormValidator(object, popupEditProfile);
	editFormValidator.enableValidation();
	togglePopup(popupEditProfile);
}

function addElementInputStandardValue() {
	addFormElement.reset();
	const addFormValidator = new FormValidator(object, popupAddElement);
	addFormValidator.enableValidation();
	togglePopup(popupAddElement);
}

//Отслеживание действий с первым popup
editButton.addEventListener('click', profileInputStandardValue);
editFormElement.addEventListener('submit', profileFormSubmitHandler);
editProfileCloseButton.addEventListener('click', () => {togglePopup(popupEditProfile)});

//Отслеживание действий с вторым popup
addButton.addEventListener('click', () => {addElementInputStandardValue()});
addFormElement.addEventListener('submit', addElement);
addElementCloseButton.addEventListener('click', () => {togglePopup(popupAddElement)});

//Отслеживание действий с третьим popup
photoFullscreenCloseButton.addEventListener('click', () => {togglePopup(popupPhotoFullscreen)});