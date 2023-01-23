export default class Talentgroup {
    id; name; description; talents; value;

    constructor(id, name, talents, description, value = 0) {
		this.id = id;
        this.name = name;
		this.talents = talents;
        this.description = description;
		this.value = value;
    }

	setValue(value) {
		this.value = value;
		return this;
	}

	getValue() {
		return this.value;
	}

	getBonus() {
		return parseInt(this.value * 0.1);
	}

	getSpentValue(talentid = '') {
		let total = this.value;
		this.talents.forEach(talent => {
			if (talent.id !== talentid) {
				total -= talent.value;
			}
		});
		return total;
	}
}
