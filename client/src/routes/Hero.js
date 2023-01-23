import React, { Component } from 'react';
import { Route } from 'react-router';
import HeroForm from '../forms/HeroForm';

class HeroComponent extends Component {
	state = {heroList: [], heroname: ''}

	constructor(props) {
		super(props);

		this.newName = this.newName.bind(this);
	}

	componentDidMount() {
		/*
		let urlSingleHero = '/api/hero/' + this.props.match.params.heroid;
		fetch(urlSingleHero)
			.then(data => data.json())
			.then(hero => this.props.setHero(hero));
		*/
		if (this.props.user.id) {
			let urlHeroList = '/api/user/' + this.props.user.id + '/heroes';
			fetch(urlHeroList)
				.then(data => data.json())
				.then(heroList => this.setState({heroList: heroList}));
		}
	}
	
	listHeroes() {
		return (
			<ul>
				{this.state.heroList.map((hero, index) => {
					return <li key={index}>{hero.name}</li>
				})}
			</ul>
		);
	}

	newName(event) {
		this.props.hero.name = event.target.value;
		this.setState({heroname: event.target.value});
	}

	render() {
		return (
			<div>
				<Route path="/hero/list" render={() => (this.listHeroes())}></Route>
				<Route path="/hero/edit" render={() => (<HeroForm hero={this.props.hero} />)} />
			</div>
		);
	}
}

export default HeroComponent;
