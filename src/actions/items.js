import * as api from 'api';

let size = 0;
let items = [];
export const fetchFirstItems = async () => {
	await api.getItemsSize().then((value) => (size = value));
	return api.fetchFirstItems().then((data) => {
		items = data;
		return items;
	});
};

export const fetchMoreItems = (eof) =>
	api.fetchMoreItems().then((data) => {
		items = items.concat(data);
		if (items.length >= size) eof();
		return items;
	});
