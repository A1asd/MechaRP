import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

class Navigation extends Component {
	account() {
		if (!this.props.user.username) {
			return (
				<div>
					<LoginForm setUser={this.props.setUser} user={this.props.user} />
				</div>
			)
		} else {
			return <div>Hallo {this.props.user.username} | <input type="button" onClick={this.props.logout} value="logout"/></div>
		}
	}

	render() {
		return (
			<nav>
				<ul>
					{this.account()}
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/hero/list">Hero</NavLink></li>
					<li><NavLink to="/account">Account</NavLink></li>
					<li><NavLink to="/tables">Tische</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/hero/edit">edit</NavLink></li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;
