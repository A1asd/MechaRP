import BaseRepository from './BaseRepository';
import translate from '../Translation';
import Talent from '../models/Talent';
import StatRepository from './StatRepository';

const talents = require('../data/Talents.json');

export default class TalentRepository extends BaseRepository {
	LIST = {};

	static MELEE = "melee"
	static RANGED = "ranged"

	constructor() {
		super();
		if (TalentRepository.getInstance()) return TalentRepository.instance;
		TalentRepository.instance = this;
		this.initialize(talents);
	}

	convert(talent) {
		let statRepository = new StatRepository();
		return new Talent(talent.id, translate(talent.name), statRepository.findById(talent.stat), talent.group, translate(talent.description));
	}

	findByGroup(talentgroup) {
		let filteredObjects = Object.entries(this.LIST).filter((talent) => talent[1].group.includes(talentgroup));
		return filteredObjects.map(talentArray => talentArray[1]);
	}

	static instance;
	static getInstance() {
		return TalentRepository.instance;
	}
}
