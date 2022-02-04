class Talent {
    name; stats; desc; base; bought;

    constructor(name, stats, desc) {
        this.name = name;
        this.stats = stats;
        this.desc = desc;
        this.updateBase();
    }

    updateBase() {
        this.base = this.stats[0].getValue() + this.stats[1].getValue();
    }

    setBought(value) {
        this.bought = value;
    }

    getValue() {
        return this.base + this.bought;
    }
}
