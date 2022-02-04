import { Component } from "react"
import Job from "../models/Job";
import Stat from "../models/Stat"
import trans from "../Translation";

const stats = [
	Stat.STRENGTH, Stat.DEXTERITY, Stat.FIGHTING, Stat.INTELLIGENCE, Stat.CHARISMA, Stat.SENSE
];

const jobs = Job.LIST;

export default class HeroForm extends Component {
	state = {
		strengthValue: this.props.hero.getStat(Stat.STRENGTH).getValue(),
		job: Job.LIST.fighter,
	}

	constructor(props) {
		super(props);

		this.incrementStat = this.incrementStat.bind(this);
		this.decrementStat = this.decrementStat.bind(this);
		this.changeStat = this.changeStat.bind(this);

		this.changeJob = this.changeJob.bind(this);
		this.toggleTrait = this.toggleTrait.bind(this);

		this.statInput = this.statInput.bind(this);
	}

	statInput(stat, i) {
		return (
			<div key={i}>
				<label htmlFor={stat}>{trans(stat)}</label>
				<input id={stat} type="number" min="7" readOnly value={this.props.hero.getStat(stat).getValue()} />
				<input type="button" onClick={(e) => this.incrementStat(stat, e)} value="+" />
				<input type="button" onClick={this.decrementStat.bind(this, stat)} value="-" />
			</div>
		)
	}

	toggleTrait(trait) {
		console.log(trait);
		if (this.props.hero.hasTrait(trait)) {
			this.props.hero.activeTraits.removeTrait(trait);
		} else {
			console.log(trait.requirements.trat);
			if (this.props.hero.hasTrait(trait.requirements.trait)) {
				this.props.hero.activeTraits.addTrait(trait);
			}
		}
	}

	displayTraits(level) {
		let filteredTraits = this.state.job.traits.filter(trait => trait.requirements.level === level)
		return (
			<div>
				<h1>Level {level}</h1>
				{filteredTraits.map((trait, i) => 
				<div key={i}>
					<input id={trait.name} type="checkbox"
						defaultChecked={this.props.hero.hasTrait(filteredTraits[i])}
						onChange={(e) => this.toggleTrait(filteredTraits[i], e)} />
					<label htmlFor={trait.name}>{trait.name} - {trait.description}</label></div>
				)}
			</div>
		)
	}

	changeJob(event) {
		this.state.job.removeModifications(this.props.hero);
		this.setState({job: Job.LIST[event.target.value]});
		Job.LIST[event.target.value].applyModifications(this.props.hero);
	}

	incrementStat(stat) {
		this.changeStat(stat, 1);
	}

	decrementStat(stat) {
		this.changeStat(stat, -1);
	}

	changeStat(stat, value) {
		this.props.hero.getStat(stat).changeBought(value);
		this.setState({strengthValue: this.props.hero.getStat(stat).getValue()});
	}

	render() {
		return (
			<div>
				{stats.map((stat, i) => this.statInput(stat, i))}
				<select value={this.state.job.id} onChange={this.changeJob}>
					{Object.entries(jobs).map((job, i) => 
						<option key={i} value={job[0]}>{job[1].name}</option>
					)}
				</select>
				<div>{this.state.job.name}, {this.state.job.description}</div>
				{this.displayTraits(1)}
				{this.displayTraits(3)}
			</div>
		)
	}
}