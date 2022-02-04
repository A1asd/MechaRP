class Skill {
    name; effect; types; origin; range;

    static LIST = [
        Skill.Fireball(),
        Skill.Etherbound(),
        Skill.Control(),
        Skill.Smokescreen(),
    ];

    constructor(name, desc, effect, types, origin, range, shortDesc = desc, requirements = null) {
        this.name = name;
        this.desc = desc;
        this.shortDesc = shortDesc;
        this.effect = effect;
        this.types = types;
        this.origin = origin;
        this.range = range;
        this.requirements = requirements;
    }

    objectAsString() {
        return JSON.stringify(this);
    }

    toString() {
        return (this.name
            + " (<b>"
            + this.origin.join(", ")
            + ", "
            + this.types.join(", ")
            + ", "
            + this.range
            + ".</b> "
            + this.effect
        );
    }

    static Fireball() {
        return new Skill("Flammenwerfer", "Ein Flammenwerfer... Ayyy", "1W10 DMG", ["Waffe", "Thermisch"], ["Mensch", "Ausrüstung"], Range.CLOUD);
    }

    static Etherbound() {
        return new Skill("Ätherbund", "Der Verbund über Äther mit dem Mecha", "1W4 Heilung", ["Kraft", "Äther"], ["Mensch", "Mech"], Range.SELF);
    }

    static Control() {
        return new Skill("Kontrolle", "Hacke einen Mech", "", ["Kraft", "Äther"], ["Mech"], Range.SELFRANGED);
    }

    static Smokescreen() {
        return new Skill("Nebelwerfer", "Schmeiße Nebelgranaten vor und um dich. " +
        "Andere Mechs können nicht in den Nebel zielen und andere Mechs im Nebel können nur noch Fähigkeiten mit Reichweite" +
        Range.SELFCLOSE + "verwenden.", "", ["Ausrüstung"], ["Mech"], Range.SELFCLOSE);
    }
}
