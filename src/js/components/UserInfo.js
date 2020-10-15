export default class UserInfo {
	constructor({profileName, profession, avatar}) {
		this._profileName = document.querySelector(profileName);
		this._profession = document.querySelector(profession);
		this._avatar = document.querySelector(avatar);
	};

	getUserInfo() {
		return {
			name: this._profileName.textContent,
			job: this._profession.textContent,
		}
	};

	setUserInfo(name, about) {
		this._profileName.textContent = name;
		this._profession.textContent = about;
	};

	setUserAvatar(avatar) {
		this._avatar.src = avatar;
	}
}