import './index.css';
import {
	changeAvatarButton,
	editButton,
	addButton,
	elements,
	popupEditAvatar,
	avatarFormElement,
	avatarChangeSubmit,
	popupEditProfile,
	inputName,
	inputProfession,
	popupAddElement,
	addFormElement,
	openPopupPhotoFullscreen,
	photoFullscreenTitle,
	popupPhotoFullscreen,
	object,
	createButton,
	saveButton,
	popupDeleteCard,
	approveButton
} from '../js/utils/constants.js';
import Api from '../js/components/Api.js';
import Card from '../js/components/Card.js';
import Section from '../js/components/Section.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import UserInfo from '../js/components/UserInfo.js';
import FormValidator from '../js/components/FormValidator.js';

//Создается и вызывается валидация форм
const addFormValidator = new FormValidator(object, popupAddElement);
const editFormValidator = new FormValidator(object, popupEditProfile);
const avatarFormValidator = new FormValidator(object, popupEditAvatar);
addFormValidator.enableValidation();
editFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const photoFullscreen = new PopupWithImage('.popup_type_photo-fullscreen', openPopupPhotoFullscreen, photoFullscreenTitle);
photoFullscreen.setEventListeners();

const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-16',
	headers: {
		authorization: '2898ad1c-4456-4857-a6ce-22f1f08bf45a',
		'Content-Type': 'application/json'
	}
})

api.getAppInfo()
	.then((infoFromServer) => {
		const [userData, cardsData] = infoFromServer;
		userInfo.setUserInfo(userData.name, userData.about);
		userInfo.setUserAvatar(userData.avatar);

		const cardItem = new Section({
			items: cardsData.reverse(),
			renderer: item => addCard(item)
		}, '.elements');
		cardItem.renderItems();

		function addCard(item) {
			const card = new Card({
				data: item,
				user: userData,
				handleCardClick: (cardInfo) => {
					photoFullscreen.open(cardInfo);
				},
				handleCardClickDelete: (cardInfo) => {
					photoFullscreen.open(cardInfo);
				},
				handleLikeClick: (likeCard, id, like) => {
					console.log(likeCard)
					likeCard.classList.toggle('element__button-like_active')
				}
			}, '.element-template');
			const addElement = card.generateCard();
			cardItem.addItem(addElement, item);
		}

		const popupAddCard = new PopupWithForm({
			submitForm: (inputValues) => {
				popupAddCard.actionBtn('Создаётся...');

				api.postCardInfo(inputValues)
					.then((newCard) => {
						console.log(newCard)
						cardItem.renderAddCard(newCard)})
					.catch((err) => console.log(err))
					.finally(() => popupAddCard.actionBtn('Создать'));

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
	});










//Профиль
const userInfo = new UserInfo({
	profileName: '.profile__name',
	profession: '.profile__profession',
	avatar: '.profile__avatar-image'
});

//Аватар
const popupChangeAvatar = new PopupWithForm({
	submitForm: (inputValues) => {
		popupChangeAvatar.actionBtn('Сохранение...');

		api.patchAvatarInfo(inputValues)
			.then(() => {
				userInfo.setUserAvatar(inputValues.avatar)
			})
			.catch((err) => console.log(err))
			.finally(() => popupChangeAvatar.actionBtn('Сохранить'));

		popupChangeAvatar.close();
	}
}, '.popup_type_edit-avatar');

changeAvatarButton.addEventListener('click', () => {
	popupChangeAvatar.open();
	avatarFormElement.reset();
	avatarFormValidator.buttonStateDisabled(avatarChangeSubmit);
	avatarFormValidator.errorReset();
});

popupChangeAvatar.setEventListeners();
//Конец Аватар

const editProfile = new PopupWithForm({
	submitForm: (inputValues) => {
		editProfile.actionBtn('Сохранение...');

		api.patchUserInfo(inputValues)
			.then(() => {
				userInfo.setUserInfo(inputValues.name, inputValues.job);
			})
			.catch((err) => console.log(err))
			.finally(() => editProfile.actionBtn('Сохранить'));

		editProfile.close();
	}
}, '.popup_type_edit-profile');

editButton.addEventListener('click', () => {
	editFormValidator.buttonStateActive(saveButton);
	editFormValidator.errorReset();

	const userInputState = userInfo.getUserInfo();
	inputName.value = userInputState.name;
	inputProfession.value = userInputState.job;
	editProfile.open();
});

editProfile.setEventListeners();
//Конец Профиль