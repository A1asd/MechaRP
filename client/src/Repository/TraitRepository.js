import Trait from '../models/Trait';
import BaseRepository from './BaseRepository';
import translate from '../Translation';

const traits = require('../data/Traits.json');

export default class TraitRepository extends BaseRepository {
	LIST = {};

	static BOGENSKILLS = "bogenskills"
	static TIERKRAM = "tierkram"
	static SCHUSS = "schuss"
	static SCHWERTSKILLS = "schwertskills"
	static SCHILDKRAM = "schildkram"
	static SCHILDSTOS = "schildstos"

	constructor() {
		super();
		if (TraitRepository.getInstance()) return TraitRepository.instance;
		TraitRepository.instance = this;
		this.initialize(traits);
	}

	convert(trait) {
		if (trait.requirements.trait !== undefined) {
			if (!this.findById(trait.requirements.trait)) {
				this.convert(traits[trait.requirements.trait]);
			}
			let requirementTrait = this.findById(trait.requirements.trait);
			trait.requirements.trait = requirementTrait;
		}
		return new Trait(trait.id, translate(trait.name), translate(trait.description), trait.requirements);
	}

	static instance;
	static getInstance() {
		return TraitRepository.instance;
	}
}
