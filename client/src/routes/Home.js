import React, { Component } from 'react';

class Home extends Component {
	test() {
		return "this is my Home!";
	}

	render() {
		return (
			<div>{this.test()}</div>
		);
	}
}

export default Home;
