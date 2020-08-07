const object = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_invalid',
	submitButtonSelector: '.popup__form-button',
	inactiveButtonClass: 'popup__form-button_disabled',
	errorClass: 'popup__span-error',
};

//Показывает ошибку при не валидном инпуте
const showInputError = (formElement, inputElement, errorMessage, object) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add(object.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(object.errorClass);
};

//Скрывает ошибку при валидном инпуте
const hideInputError = (formElement, inputElement, object) => {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove(object.inputErrorClass);
	errorElement.classList.remove(object.errorClass);
	errorElement.textContent = '';
};

//

//Проверяет валидность инпутов, получает ошибку инпута, запускает фунции показать/скрыть span с ошибкой
const checkInputValidity = (formElement, inputElement) => {
	if(!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, object);
	} else {
		hideInputError(formElement, inputElement, object);
	}
};

//Проверяет валидность всех инпутов
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	})
};

//Добавляет и удаляет состояние для кнопки, кнопка будет активна только если все инпуты валидны, это проверяется функцией hasInvalidInput
const toggleButtonState = (inputList, buttonElement) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(object.inactiveButtonClass);
		buttonElement.disabled = true;
	} else {
		buttonElement.classList.remove(object.inactiveButtonClass);
		buttonElement.disabled = false;
	}
};

//Находит все инпуты форм, запускает проверку состояния кнопки, запускает проверку инпутов, проверку инпутов и кнопки проверяет при каждом измении инпута
const setEventListeners = (formElement, object) => {
	const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
	const buttonElement = formElement.querySelector(object.submitButtonSelector);
	toggleButtonState(inputList, buttonElement);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};

//Находит и добавляет все формы в массив, у каждой формы отключает стандартное поведение при submit
//Запускает следующую функцию передавая аргументом формы
const enableValidation = (object) => {
	const formList = Array.from(document.querySelectorAll(object.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', function (evt) {
			evt.preventDefault();
		});
		setEventListeners(formElement, object);
	});
};