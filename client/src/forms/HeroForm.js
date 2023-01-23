import { Component } from "react"
import ActiveTraitBag from "../bags/ActiveTraitBag";
import StatComponent from "../components/StatComponent";
import TalentgroupComponent from "../components/TalentgroupComponent";
import TraitListComponent from "../components/TraitListComponent";
import JobRepository from "../Repository/JobRepository";
import StatRepository from "../Repository/StatRepository";
import TalentgroupRepository from "../Repository/TalentgroupRepository";

const statRepository = new StatRepository();
const jobRepository = new JobRepository();
const talentgroupRepository = new TalentgroupRepository()

export default class HeroForm extends Component {
	state = {
		job: this.props.hero.job,
		hero: this.props.hero,
		talentgroups: talentgroupRepository.findAll(),
		talents: {},
		statpoints: 50,
	}

	constructor(props) {
		super(props);

		this.changeName = this.changeName.bind(this);
		this.changeJob = this.changeJob.bind(this);

		this.maxTalentpoints = 300;
		window.app = this;
	}

	changeName(event) {
		let hero = this.state.hero;
		hero.name = event.target.value;
		this.setState({hero: hero});
	}

	changeJob(jobId) {
		this.state.job.removeModifications(this.props.hero);
		this.props.hero.activeTraits = new ActiveTraitBag();
		this.props.hero.setJob(jobRepository.findById(jobId));
		this.setState({job: this.props.hero.job});
		jobRepository.findById(jobId).applyModifications(this.props.hero);
	}

	displayTraits(level) {
		let filteredTraits = this.state.job.traits.filter(trait => trait.requirements.level === level)
		return (
			<div>
				<h1>Level {level}</h1>
				{filteredTraits.map((trait, i) => 
				<div key={i}>
					<input id={trait.name} type="checkbox"
						checked={this.state.hero.hasTrait(trait)}
						onChange={(e) => this.toggleTrait(trait, e)} />
					<label htmlFor={trait.name}>{trait.name} - {trait.description}</label></div>
				)}
			</div>
		)
	}

	totalTalentpoints(talentgroupid = '') {
		let total = this.maxTalentpoints;
		Object.entries(this.state.talentgroups).forEach(element => {
			if (element[1].id !== talentgroupid) {
				total -= element[1].value;
			}
		});
		return total;
	}

	render() {
		//const stats = [Stat.STRENGTH, Stat.DEXTERITY, Stat.FIGHTING, Stat.INTELLIGENCE, Stat.CHARISMA, Stat.SENSE];
		const stats = statRepository.findAll();
		const jobs = jobRepository.findAll();
		const talentgroups = talentgroupRepository.findAll();

		return (
			<div>
				<label htmlFor="nameInput">Name</label>
				<input id="nameInput" value={this.state.hero.name} onChange={this.changeName} />
				<label>{this.state.statpoints - this.totalStatpoints()}/{this.maxStatpoints}</label>
				{Object.entries(stats).map((stat) => {
					return <StatComponent stat={stat} hero={this.stat.hero}></StatComponent>
				})}
				<select value={this.state.job.id} onChange={(e) => { this.changeJob(e.target.value) }}>
					{Object.entries(jobs).map((job) => 
						<option key={job[0]} value={job[0]}>{job[1].name}</option>
					)}
				</select>
				<div>{this.state.job.name}, {this.state.job.description}</div>
				<label>talentpoints: {this.totalTalentpoints()}/{this.maxTalentpoints}</label>
				{Object.entries(talentgroups).map((talentgroup) => {
					return <TalentgroupComponent key={talentgroup[0]} hero={this.state.hero} talentgroup={talentgroup} totalTalentpoints={this.totalTalentpoints}></TalentgroupComponent>
				})}
				<TraitListComponent level={1} hero={this.state.hero}></TraitListComponent>
				<TraitListComponent level={3} hero={this.state.hero}></TraitListComponent>
				<button onClick={() => {console.log(this.props.hero)}}>print hero to console</button>
			</div>
		)
	}
}
