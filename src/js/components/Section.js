export default class Section {
	constructor({items, renderer}, containerSelector) {
		this._renderedItems = items;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	};

	renderItems() {
		this._renderedItems.forEach(item => {
			this._renderer(item);
		});
	};

	renderAddCard(inputValues) {
		this._renderer(inputValues);
	};

	addItem(addElement, item) {
		item.isinitialCards? this._container.append(addElement):this._container.prepend(addElement);
	};
}