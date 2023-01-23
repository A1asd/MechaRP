export default class Trait {
    name; description; requirements;

    constructor(id, name, description, requirements) {
		this.id = id;
        this.name = name;
        this.description = description;
        this.requirements = requirements;
    };

    meetsRequirements(hero) {
    }
}
