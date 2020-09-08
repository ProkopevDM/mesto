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
	object,
	createButton,
	saveButton
} from './constants.js';
import {togglePopup} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

initialCards.forEach(data => {
	renderElements(data);
});

const addFormValidator = new FormValidator(object, popupAddElement);
const editFormValidator = new FormValidator(object, popupEditProfile);
addFormValidator.enableValidation();
editFormValidator.enableValidation();


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

function profileStandardState() {
	inputName.value = profileName.textContent;
	inputProfession.value = profession.textContent;
	saveButton.classList.remove('popup__form-button_disabled');
	saveButton.disabled = false;
	editFormValidator.errorReset();
	togglePopup(popupEditProfile);
}

function addElementStandardState() {
	addFormElement.reset();
	createButton.classList.add('popup__form-button_disabled');
	createButton.disabled = true;
	addFormValidator.errorReset();
	togglePopup(popupAddElement);
}

//Отслеживание действий с первым popup
editButton.addEventListener('click', profileStandardState);
editFormElement.addEventListener('submit', profileFormSubmitHandler);
editProfileCloseButton.addEventListener('click', () => {togglePopup(popupEditProfile)});

//Отслеживание действий с вторым popup
addButton.addEventListener('click', addElementStandardState);
addFormElement.addEventListener('submit', addElement,);
addElementCloseButton.addEventListener('click', () => {togglePopup(popupAddElement)});

//Отслеживание действий с третьим popup
photoFullscreenCloseButton.addEventListener('click', () => {togglePopup(popupPhotoFullscreen)});