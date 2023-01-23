import { Component } from "react"

export default class TraitListComponent extends Component {
	state = {
		hero: this.props.hero,
	}

	render() {
		//const stats = [Stat.STRENGTH, Stat.DEXTERITY, Stat.FIGHTING, Stat.INTELLIGENCE, Stat.CHARISMA, Stat.SENSE];
		let filteredTraits = this.state.hero.job.traits.filter(trait => trait.requirements.level === this.props.level)

		return (
			<div>
				<h1>Level {this.props.level}</h1>
				{filteredTraits.map((trait, i) => 
					<div key={i}>
						<TraitComponent trait={trait} hero={this.state.hero}></TraitComponent>
					</div>
				)}
			</div>
		)
	}
}

class TraitComponent extends Component {
	state = {
		hero: this.props.hero,
	}

	constructor(props) {
		super(props);

		this.toggleTrait = this.toggleTrait.bind(this);
	}

	toggleTrait(trait) {
		if (this.state.hero.hasTrait(trait)) {
			let filteredTraits = this.state.hero.activeTraits.getBag().filter(aTrait => aTrait.requirements.trait === trait);
			if (filteredTraits.length === 0) {
				this.state.hero.activeTraits.removeTrait(trait);
			} else {
				console.log(filteredTraits[0]);
			}
		} else {
			if (trait.requirements.trait === undefined || this.state.hero.hasTrait(trait.requirements.trait)) {
				this.state.hero.activeTraits.addTrait(trait);
			} else {
				console.log(trait.requirements.trait);
			}
		}
		let hero = this.state.hero;
		this.setState({hero: hero});
	}

	render() {
		const trait = this.props.trait;

		return (
			<div>
				<input id={trait.name} type="checkbox"
					checked={this.state.hero.hasTrait(trait)}
					onChange={(e) => this.toggleTrait(trait, e)} />
				<label htmlFor={trait.name}>{trait.name} - {trait.description}</label>
			</div>
		)
	}
}
