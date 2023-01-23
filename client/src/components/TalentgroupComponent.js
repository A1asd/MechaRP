import { Component } from "react"
import TalentgroupRepository from "../Repository/TalentgroupRepository";

const talentgroupRepository = new TalentgroupRepository()

export default class TalentgroupComponent extends Component {
	constructor(props) {
		super(props);

		this.changeTalentgroupValue = this.changeTalentgroupValue.bind(this);
		this.changeTalentValue = this.changeTalentValue.bind(this);

		this.maxTalentpoints = 300;
	}

	state = {
		hero: this.props.hero,
		talentgroups: talentgroupRepository.findAll(),
		talents: {},
		talentpoints: 300,
	}

	totalTalentpoints = this.props.totalTalentpoints;

	changeTalentgroupValue(talentgroup, value) {
		value = parseInt(value.replace(/[^\d]/g, ''));
		if (!value) value = 0;
		if (this.totalTalentpoints(talentgroup) - value < 0) return;
		talentgroup = talentgroupRepository.findById(talentgroup);
		talentgroup.setValue(value);
		let talentgroups = this.state.talentgroups;
		talentgroups[talentgroup.id] = talentgroup;
		this.setState({talentgroups: talentgroups});
	}

	changeTalentValue(talent, value) {
		value = parseInt(value.replace(/[^\d]/g, ''));
		if (!value) value = 0;
		if (this.state.talentgroups[talent.group].getSpentValue(talent.id) - value < 0) return;
		if (this.state.talentgroups[talent.group].getBonus() + this.state.hero.getStat(talent.stat.id).getValue() + value > 100) return;
		talent.setValue(value);
		let talents = this.state.talents;
		talents[talent.id] = talent;
		this.setState({talents: talents});
	}

	render() {
		//const stats = [Stat.STRENGTH, Stat.DEXTERITY, Stat.FIGHTING, Stat.INTELLIGENCE, Stat.CHARISMA, Stat.SENSE];
		const talentgroup = this.props.talentgroup;

		return (
			<div>
				<label htmlFor={talentgroup[0]} title={talentgroup[1].description}>{talentgroup[1].name}</label>
				<input type="text" value={talentgroup[1].value} onInput={(e) => this.changeTalentgroupValue(talentgroup[1].id, e.target.value)} />
				<label>{talentgroup[1].getSpentValue()} (Gruppenbonus: {talentgroup[1].getBonus()})</label>
				{talentgroup[1].talents.map((talent) => {
					return (<div key={talent.id}>
						<label htmlFor={talent.id} title={talent.description}>{talent.name} ({talent.stat.abbr})</label>
						<input type="text" id={talent.id} name="talents" value={talent.value} onInput={(e) => this.changeTalentValue(talent, e.target.value)} />
						<label>total: {talent.value + talentgroup[1].getBonus() + talent.stat.getValue()}</label>
					</div>)
				})}
			</div>
		)
	}
}
