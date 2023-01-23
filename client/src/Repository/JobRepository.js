import Job from '../models/Job';
import Modification from '../models/Modification';
import trans from '../Translation';
import BaseRepository from './BaseRepository';
import TraitRepository from './TraitRepository';

const jobs = require('../data/Jobs.json');

export default class JobRepository extends BaseRepository {
	LIST = {};

	static RANGER = 'ranger';
	static FIGHTER = 'fighter';

	constructor() {
		super();
		if (JobRepository.getInstance()) return JobRepository.instance;
		JobRepository.instance = this;
		this.initialize(jobs);
	}

	convert(job) {
		let traits = [];
		let traitRepository = new TraitRepository();
		job.traits.forEach(trait => {
			traits.push(traitRepository.findById(trait));
		});

		let mods = [];
		job.modifications.forEach(mod => {
			mods.push(new Modification(mod.stat, mod.value));
		})
		return new Job(job.id, trans(job.name), trans(job.description), traits, mods, job.skills);
	}

	findByTrait(trait) {
		let filteredObjects = Object.entries(this.LIST).filter((job) => job[1].traits.includes(trait));
		return filteredObjects.map(jobArray => jobArray[1]);
	}

	static instance;
	static getInstance() {
		return JobRepository.instance;
	}
}

window.JobRepository = JobRepository;
