import StatBag from '../bags/StatBag';
import SkillBag from '../bags/SkillBag';
import ActiveTraitBag from '../bags/ActiveTraitBag';
import ItemBag from '../bags/ItemBag';
import JobRepository from '../Repository/JobRepository';
import StatRepository from '../Repository/StatRepository';
import TalentBag from '../bags/TalentBag';
import TalentRepository from '../Repository/TalentRepository';

let jobRepo = new JobRepository();
let statRepo = new StatRepository();
let talentRepo = new TalentRepository();

export default class Hero {
    name; level; job; maxhp; stats; activeTraits; talents; skills; inventory;

    constructor() {
        this.name = "";
        this.level = 0;
        this.stats = new StatBag();
        this.activeTraits = new ActiveTraitBag();
        this.skills = new SkillBag();
        this.inventory = new ItemBag();
		this.talents = new TalentBag();
		this.job = jobRepo.findById(JobRepository.FIGHTER);
        this.stats.addStats(
            statRepo.findById(StatRepository.PHYSIQUE),
            statRepo.findById(StatRepository.REFLEXES),
            statRepo.findById(StatRepository.WITS),
            statRepo.findById(StatRepository.SENSE),
            statRepo.findById(StatRepository.EMPATHY),
        );
		this.talents.addTalents(talentRepo.findAll())
    }

    hasTrait(trait) {
        return this.activeTraits.has(trait);
        //return this.activeTraits.filter(t => t.name === trait.name );
    }

    setName(name) {
        this.name = name;
        return this;
    }

	setJob(job) {
		this.job = job;
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
