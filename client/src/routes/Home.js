import React, { Component } from 'react';
import TalentgroupRepository from '../Repository/TalentgroupRepository';
import translate from '../Translation';

class Home extends Component {
	constructor() {
		super();

		let repo = new TalentgroupRepository();
		window.repo = repo;
		console.log(repo.findAll());
		//console.log(new TraitRepository());
	}

	test() {
		return translate('stat.physique.name');
	}

	render() {
		return (
			<div>{this.test()}</div>
		);
	}
}

export default Home;
