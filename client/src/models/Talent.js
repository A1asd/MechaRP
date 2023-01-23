export default class Talent {
    id; name; stat; group; desc; value;

    constructor(id, name, stat, group, description, value = 0) {
		this.id = id;
        this.name = name;
        this.stat = stat;
		this.group = group;
        this.description = description;
		this.value = value;
    }

	setValue(value) {
		this.value = value;
		return value;
	}

	getValue() {
		return this.value;
	}
}
