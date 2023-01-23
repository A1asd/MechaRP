import BaseRepository from './BaseRepository';
import translate from '../Translation';
import Stat from '../models/Stat';

const stats = require('../data/Stats.json');

export default class StatRepository extends BaseRepository {
	LIST = {};

	static PHYSIQUE = "physique"
	static REFLEXES = "reflexes"
	static WITS = "wits"
	static SENSE = "sense"
	static EMPATHY = "empathy"

	constructor() {
		super();
		if (StatRepository.getInstance()) return StatRepository.instance;
		StatRepository.instance = this;
		this.initialize(stats);
	}

	convert(stat) {
		return new Stat(stat.id, translate(stat.name), translate(stat.abbr), translate(stat.desc));
	}

	static instance;
	static getInstance() {
		return StatRepository.instance;
	}
}
