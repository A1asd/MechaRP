import React, { Component } from 'react';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {username: '', password: ''};
		
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.login = this.login.bind(this);
	}

	login() {
		let user = this.state.username;
		let password = this.state.password;
		fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({user: user, password: password}),
		})
		.then(data => data.json())
		.then(response => {
			if (response.authenticated) {
				this.props.setUser(response.user);
			}
		});
	}

	handleChangeUsername(event) {
		this.setState({username: event.target.value});
	}

	handleChangePassword(event) {
		this.setState({password: event.target.value});
	}

	render() {
		if (this.props.user.username) {
			return <div>Hallo {this.props.user.username}</div>
		} else {
			return (
				<div>
					<input type="text" value={this.state.username} onChange={this.handleChangeUsername} placeholder="username"></input>
					<input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="password"></input>
					<input type="button" onClick={this.login} value="login"></input>
				</div>
			);
		}
	}
}
