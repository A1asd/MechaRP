export default class BaseRepository {
	initialize(objects) {
		for (const raw in objects) {
			if (Object.hasOwnProperty.call(objects, raw)) {
				objects[raw].id = raw;
				let object = this.convert(objects[raw]);
				this.LIST[raw] = object;
			}
		}
	}

	findAll() {
		return this.LIST;
	}

	findById(id) {
		return this.LIST[id];
	}

	static instance;
	static getInstance() {
		return BaseRepository.instance;
	}
}