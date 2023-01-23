import BaseRepository from './BaseRepository';
import translate from '../Translation';
import Talentgroup from '../models/Talentgroup';
import TalentRepository from './TalentRepository';

const talentgroups = require('../data/Talentgroups.json');

export default class TalentgroupRepository extends BaseRepository {
	LIST = {};

	static DAREDEVIL = "daredevil"
	static CALM = "calm"

	constructor() {
		super();
		if (TalentgroupRepository.getInstance()) return TalentgroupRepository.instance;
		TalentgroupRepository.instance = this;
		this.initialize(talentgroups);
	}

	convert(talentgroup) {
		let talentRepository = new TalentRepository();
		return new Talentgroup(talentgroup.id, translate(talentgroup.name), talentRepository.findByGroup(talentgroup.id), translate(talentgroup.description));
	}

	static instance;
	static getInstance() {
		return TalentgroupRepository.instance;
	}
}
