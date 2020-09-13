export default class UserInfo {
	constructor({profileName, profession}) {
		this._profileName = document.querySelector(profileName);
		this._profession = document.querySelector(profession);
	};

	getUserInfo() {
		return {
			name: this._profileName.textContent,
			job: this._profession.textContent,
		}
	};

	setUserInfo(name, job) {
		this._profileName.textContent = name;
		this._profession.textContent = job;
	};
}