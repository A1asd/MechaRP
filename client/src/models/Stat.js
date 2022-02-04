export default class Stat {
    name; base; bought; modifier;

    static FIGHTING = 'stat.fig';
    static STRENGTH = 'stat.str';
    static DEXTERITY = 'stat.dex';
    static INTELLIGENCE = 'stat.int';
    static CHARISMA = 'stat.cha';
    static SENSE = 'stat.sns';

    constructor(name = '', base = 8, bought = 0, modifier = 0) {
        this.name = name;
        this.base = base;
        this.bought = bought;
        this.modifier = modifier;
    }

    changeBought(value) {
        this.bought = this.bought + value;
    }

    getValue() {
        return this.base + this.bought + this.modifier;
    }
}
