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
const editProfilecloseButton = popupEditProfile.querySelector('.popup__button-close');
const editformElement = popupEditProfile.querySelector('.popup__form');
const inputName = editformElement.querySelector('.popup__input_field_name');
const inputProfession = editformElement.querySelector('.popup__input_field_profession');

//Определяем нужные элементы для попапа добавления элеманта
const popupAddElement = document.querySelector('.popup_type_add-element');
const addElementCloseButton = popupAddElement.querySelector('.popup__button-close');
const addformElement = popupAddElement.querySelector('.popup__form');
const inputPlace = addformElement.querySelector('.popup__input_type_place');
const inputUrl = addformElement.querySelector('.popup__input_type_url');

//Определяем нужные элементы для попапа увеличения картинки
const popupPhotoFullscreen = document.querySelector('.popup_type_photo-fullscreen');
const openPopupPhotoFullscreen = popupPhotoFullscreen.querySelector('.popup__photo-fullscreen');
const photoFullscreenTitle = popupPhotoFullscreen.querySelector('.popup__photo-fullscreen-title');
const photoFullscreenCloseButton = popupPhotoFullscreen.querySelector('.popup__button-close');

//Добавляем стандартные элементы
const initialCards = [
	{
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
	}
];

//Открываем или закрываем popup. popupOpen - это аргумент функции, который передает какой именно popup нужно открыть или закрыть
function openPopup(popupOpen) {
	popupOpen.classList.toggle('popup_opened');
}

//Эта функция задаёт значения полей при закрытии popup на крестик
function inputStandardValue(popupOpen) {
	openPopup(popupOpen);
	if (popupOpen === popupEditProfile && popupOpen.classList.contains('popup_opened')) {
		inputName.value = profileName.textContent;
		inputProfession.value = profession.textContent;
	} else if (popupOpen === popupAddElement && popupOpen.classList.contains('popup_opened')) {
			inputPlace.value = '';
			inputUrl.value = '';
	}
}

//Эта функция заполняет элемент и возвращает его в функцию renderElements, которая добавит элемент на страницу
function createElement (data) {
	const element = elementsTemplate.cloneNode(true);
	const elementDeleteButton = element.querySelector('.element__button-delete');
	const elementPhoto = element.querySelector('.element__photo');
	const elementPlace = element.querySelector('.element__place');
	const elementLikeButton = element.querySelector('.element__button-like');

//Отслеживает действие на кнопке удаления и запускает фунцию для удаления элемента
	elementDeleteButton.addEventListener('click', elementDelete);

//Отслеживает действие на увеличение картинки и запускает фунцию для увеличения картинки
	elementPhoto.addEventListener('click',() => {openPhoto(data)});

//Отслеживает действие на кнопке like и добавляет класс активному элементу
	elementLikeButton.addEventListener('click', () => {
		elementLikeButton.classList.toggle('element__button-like_active');
	})

//Задает нужные параметры атрибутам и возвращает результат
	elementPhoto.src = data.link;
	elementPhoto.alt = data.name;
	elementPlace.textContent = data.name;
	return element;
}

//Эта функция принимает значение из метода forEach вида initialCards[#] и отправляет в функию createElement, которая создаст и вернет ноый элемент
function renderElements(data) {
	elements.prepend(createElement(data));
}

//Эта метод парсит список стандартных элементов (initialCards) и куждый из них отправляет в функцию renderElements
initialCards.forEach((data) => {
	renderElements(data);
})

//Эта функция удаляет элемент со страницы. Методом target получаем элемент по которому произошло действие, а методом closest находим ближайшего родителя с классом element
function elementDelete(evt) {
	evt.target.closest('.element').remove();
}

//Эта функция отправляет значения при submit первого и второго popup
//Первый popup
function formSubmitHandler (evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profession.textContent = inputProfession.value;
	inputStandardValue(popupEditProfile);
}
//Второй popup
function addElement (evt) {
	evt.preventDefault();
	renderElements({name:inputPlace.value, link:inputUrl.value})
	inputStandardValue(popupAddElement);
}

//Функция открытия третьего popup
function openPhoto(data) {
	openPopupPhotoFullscreen.src = data.link;
	openPopupPhotoFullscreen.alt = data.name;
	photoFullscreenTitle.textContent = data.name;
	openPopup(popupPhotoFullscreen);
}

//Отслеживание действий с первым popup
editButton.addEventListener('click', () => {inputStandardValue(popupEditProfile)});
editformElement.addEventListener('submit', formSubmitHandler);
editProfilecloseButton.addEventListener('click', () => {openPopup(popupEditProfile)});

//Отслеживание действий с вторым popup
addButton.addEventListener('click', () => {inputStandardValue(popupAddElement)});
addformElement.addEventListener('submit', addElement);
addElementCloseButton.addEventListener('click', () => {openPopup(popupAddElement)});

//Отслеживание действий с третьим popup
photoFullscreenCloseButton.addEventListener('click', () => {openPopup(popupPhotoFullscreen)});