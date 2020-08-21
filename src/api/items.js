import db from 'db';

const ITEMS_PER_PAGE = 5;

export const getItemsSize = () =>
	db
		.collection('items')
		.get()
		.then((snapshots) => snapshots.size);

let last = 0;
const firstQuery = () => db.collection('items').limit(ITEMS_PER_PAGE);
const moreQuery = () =>
	db.collection('items').startAfter(last).limit(ITEMS_PER_PAGE);

const fetchItems = (query) =>
	query.get().then((snapshots) => {
		last = snapshots.docs[snapshots.docs.length - 1] || null;
		return snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	});

export const fetchFirstItems = () => fetchItems(firstQuery());

export const fetchMoreItems = () => fetchItems(moreQuery());
