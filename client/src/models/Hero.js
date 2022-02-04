import StatBag from '../bags/StatBag';
import SkillBag from '../bags/SkillBag';
import ActiveTraitBag from '../bags/ActiveTraitBag';
import ItemBag from '../bags/ItemBag';
import Stat from './Stat';

export default class Hero {
    name; level; job; maxhp; stats; activeTraits; talents; skills; inventory;

    constructor() {
        this.name = "peter";
        this.level = 0;
        this.stats = new StatBag();
        this.activeTraits = new ActiveTraitBag();
        this.skills = new SkillBag();
        this.inventory = new ItemBag();
        this.stats.addStats(
            new Stat(Stat.CHARISMA),
            new Stat(Stat.STRENGTH),
            new Stat(Stat.DEXTERITY),
            new Stat(Stat.FIGHTING),
            new Stat(Stat.SENSE),
            new Stat(Stat.INTELLIGENCE)
        );
    }

    hasTrait(trait) {
        return this.activeTraits.has(trait);
        //return this.activeTraits.filter(t => t.name === trait.name );
    }

    setName(name) {
        this.name = name;
        return this;
    }

    getName() {
        return this.name;
    }

    getStat(stat) {
        return this.stats.getStat(stat);
    }

    getStats() {
        return this.stats;
    }

    getSkills() {
        return this.skills.bag;
    }

    static createFromJSON(json) {
        let hero = new Hero();
        hero.name = json.name;
        /*hero.maxhp = json.maxhp;
        hero.stats = json.stats;
        hero.talents = json.talents;
        hero.skills = json.skills;
        hero.inventory = json.inventory;*/
        return hero;
    }
}
