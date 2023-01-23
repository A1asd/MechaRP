export default class Stat {
    id; name; abbr; description; base; bought; modifier;

    static FIGHTING = 'stat.fig';
    static STRENGTH = 'stat.str';
    static DEXTERITY = 'stat.dex';
    static INTELLIGENCE = 'stat.int';
    static CHARISMA = 'stat.cha';
    static SENSE = 'stat.sns';

    constructor(id, name, abbr, description, base = 0, bought = 0, modifier = 0) {
		this.id = id;
        this.name = name;
		this.abbr = abbr;
        this.description = description;
        this.base = base;
        this.bought = bought;
        this.modifier = modifier;
    }

    changeBought(value) {
        this.bought = this.bought + parseInt(value);
    }

    getValue() {
        return this.base + this.bought + this.modifier;
    }
}
