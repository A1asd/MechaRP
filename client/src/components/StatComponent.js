import { Component } from "react"
import StatRepository from "../Repository/StatRepository";

const statRepository = new StatRepository();

export default class StatComponent extends Component {
	state = {
		hero: this.props.hero,
	}

	constructor(props) {
		super(props);

		this.incrementStat = this.incrementStat.bind(this);
		this.decrementStat = this.decrementStat.bind(this);
		this.changeStat = this.changeStat.bind(this);

		this.statsMin = 0;
		this.statsMax = 25;
		this.maxStatpoints = 50;
	}

	incrementStat(stat) {
		this.changeStat(stat, 1);
	}

	decrementStat(stat) {
		let statModValue = this.props.hero.getStat(stat).bought;
		let statBaseValue = this.props.hero.getStat(stat).base;
		console.log(statBaseValue - statModValue)
		if (statBaseValue - statModValue <= 8) this.changeStat(stat, -1);
	}

	totalStatpoints(statid = '') {
		let total = this.maxStatpoints;
		Object.entries(this.state.hero.stats.getBag()).forEach(stat => {
			if (stat[1].id !== statid) {
				total -= parseInt(stat[1].getValue());
			}
		})
		return total;
	}

	changeStat(stat, value) {
		//if (e.nativeEvent.inputType !== 'insertReplacementText') return;
		stat = statRepository.findById(stat);
		value = parseInt(value.replace(/[^\d]/g, ''));
		if (!value) value = 0;
		if (this.totalStatpoints(stat.id) - value < 0) return;
		if (value > this.statsMax) value = this.statsMax;
		if (value < this.statsMin) value = this.statsMin;
		this.state.hero.getStat(stat.id).bought = value;
		let hero = this.state.hero;
		this.setState({hero: hero});
	}

	render() {
		let id = this.props.stat[0];
		let stat = this.props.stat[1];
		return (
			<div key={id}>
				<label htmlFor={id}>{stat.name} ({stat.abbr})</label>
				<input id={id} type="text" min={this.statsMin} max={this.statsMax} onInput={(e) => this.changeStat(stat.id, e.target.value)} value={this.state.hero.getStat(stat.id).getValue()} />
				<input type="button" onClick={() => this.changeStat(id, 1)} value="+" />
				<input type="button" onClick={() => this.changeStat(id, -1)} value="-" />
			</div>
		)
	}
}
