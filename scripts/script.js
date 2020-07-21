let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__button-edit');
let closeButton = popup.querySelector('.popup__button-close');
let name = profile.querySelector('.profile__name');
let profession = profile.querySelector('.profile__profession');
let inputName = popup.querySelector('.popup__input_field_name');
let inputProfession = popup.querySelector('.popup__input_field_profession');
let formElement = popup.querySelector('.popup__form');

function editProfile() {
	popup.classList.toggle('popup_opened');
	if (popup.classList.contains('popup_opened')) {
		inputName.value = name.textContent;
		inputProfession.value = profession.textContent;
	}
}

function formSubmitHandler (evt) {
	evt.preventDefault();
	name.textContent = inputName.value;
	profession.textContent = inputProfession.value;
	editProfile();
}

editButton.addEventListener('click', editProfile);
formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', editProfile);