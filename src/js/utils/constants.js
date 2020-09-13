//Определяем нужные элементы внутри класса profile
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__button-edit');
const profileName = profile.querySelector('.profile__name');
const profession = profile.querySelector('.profile__profession');
const addButton = profile.querySelector('.profile__button-add');

//Определяем нужные элементы внутри класса elements
const elements = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.element-template').content;

//Определяем нужные элементы для попапа редактировани профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const saveButton = popupEditProfile.querySelector('.popup__form-button_type_save');
const editProfileCloseButton = popupEditProfile.querySelector('.popup__button-close');
const editFormElement = popupEditProfile.querySelector('.popup__form');
const inputName = editFormElement.querySelector('.popup__input_field_name');
const inputProfession = editFormElement.querySelector('.popup__input_field_profession');

//Определяем нужные элементы для попапа добавления элеманта
const popupAddElement = document.querySelector('.popup_type_add-element');
const createButton = popupAddElement.querySelector('.popup__form-button_type_create');
const addElementCloseButton = popupAddElement.querySelector('.popup__button-close');
const addFormElement = popupAddElement.querySelector('.popup__form');
const inputPlace = addFormElement.querySelector('.popup__input_type_place');
const inputUrl = addFormElement.querySelector('.popup__input_type_url');

//Определяем нужные элементы для попапа увеличения картинки
const popupPhotoFullscreen = document.querySelector('.popup_type_photo-fullscreen');
const openPopupPhotoFullscreen = popupPhotoFullscreen.querySelector('.popup__photo-fullscreen');
const photoFullscreenTitle = popupPhotoFullscreen.querySelector('.popup__photo-fullscreen-title');
const photoFullscreenCloseButton = popupPhotoFullscreen.querySelector('.popup__button-close');

//Добавляем стандартные элементы
const initialCards = [{
		name: 'Екатеринбург',
		link: './images/photo-grid-Ekaterinburg.jpg'
	},
	{
		name: 'Каменск-Уральский',
		link: './images/photo-grid-Kamensk-Uralskiy.jpg'
	},
	{
		name: 'Деревня Новый Быт',
		link: './images/photo-grid-cat-traveler.jpg'
	},
	{
		name: 'Каменск-Уральский',
		link: './images/photo-grid-bridge.jpg'
	},
	{
		name: 'Водохранилище',
		link: './images/photo-grid-lake.jpg'
	},
	{
		name: 'Река',
		link: './images/photo-grid-river.jpg'
	}];

const object = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_invalid',
	submitButtonSelector: '.popup__form-button',
	inactiveButtonClass: 'popup__form-button_disabled',
	errorClass: 'popup__span-error',
};

export {
	editButton,
	addButton,
	elements,
	popupEditProfile,
	inputName,
	inputProfession,
	popupAddElement,
	addFormElement,
	openPopupPhotoFullscreen,
	photoFullscreenTitle,
	popupPhotoFullscreen,
	initialCards,
	object,
	createButton,
	saveButton
}