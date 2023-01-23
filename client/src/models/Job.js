export default class Job {
    id; name; description; traits; modifications;
	skills = {};

    constructor(id, name, description, traits, modifications, skills) {
		this.id = id;
        this.name = name;
        this.description = description;
        this.traits = traits;
        this.modifications = modifications;
		for (let skill in skills) {
			if (Object.hasOwnProperty.call(skills, skill)) {
				/*eslint no-new-func: "off"*/
				this.skills[skill] = new Function(skills[skill].params, skills[skill].body);
			}
		}
    }

    applyModifications(hero) {
        this.modifications.map((modification) => hero.getStat(modification.stat).modifier += modification.value);
    }

    removeModifications(hero) {
        this.modifications.map((modification) => hero.getStat(modification.stat).modifier -= modification.value);
    }
}
