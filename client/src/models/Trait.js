export default class Trait {
    name; description; requirements;

	static LIST = {
        bogenskills: Trait.Bogenskills(),
        tierkram: Trait.Tierkram(),
        schuss: Trait.Schuss(),
        schwertskills: Trait.Schwertskills(),
        schildkram: Trait.Schildkram(),
        schildstos: Trait.Schildstos(),
	}

    constructor(name, description, requirements) {
        this.name = name;
        this.description = description;
        this.requirements = requirements;
    };

    meetsRequirements(hero) {
    }

	static Bogenskills() {
        return new Trait('bogenskills', 'du hast krasse bogenskills', {level: 1});
	}

	static Schildkram() {
        return new Trait('schildkram', 'schildzeug', {level: 1});
	}

	static Tierkram() {
		return new Trait('tierkram', 'du kannst tiere zähmen und so', {level: 1});
	}

	static Schuss() {
		return new Trait('präziser schuss', 'ein ganz dolle doller präzise schuss', {level: 3, trait: Trait.Bogenskills});
	}

	static Schwertskills() {
		return new Trait('schwertskills', 'du hast krasse schwertskills', {level: 1});
	}

	static Schildstos() {
		return new Trait('schildstoß', 'stoß mit dem schild... duh', {level: 3, trait: Trait.Schildkram});
	}
}