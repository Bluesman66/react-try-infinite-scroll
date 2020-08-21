import * as api from 'api';

export const createRef = (collection, docId) =>
	api.createRef(collection, docId);

export * from './items';
