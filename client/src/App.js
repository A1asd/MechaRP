import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';
import Hero from './models/Hero';
//import usePersistedState from './Hook';
//import logo from './logo.svg';
import './App.css';

// Components
const Navigation = lazy(() => import('./components/Navigation'));
const Footer = lazy(() => import('./components/Footer'));

// Routes
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const LoginForm = lazy(() => import('./forms/LoginForm'));
const HeroComponent = lazy(() => import('./routes/Hero'));

class App extends Component {
	state = {user: {}, hero: new Hero()};

	constructor(props) {
		super(props);

		this.setUser = this.setUser.bind(this);
		this.unsetUser = this.unsetUser.bind(this);
		this.setHero = this.setHero.bind(this);
	}
		
	setUser(user) {
		this.setState({
			user: user,
		});
	}

	unsetUser() {
		this.setUser({});
		this.setHero({});
	}

	setHero(hero) {
		this.setState({
			hero: Hero.createFromJSON(hero),
		});
		//usePersistedState('hero', hero);
	}

	render() {
		return (
			<HashRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Navigation setUser={this.setUser} logout={this.unsetUser} user={this.state.user} />
					<div className="content">
						<Route exact path="/" render={() => (<Home hero={this.state.hero} />)} />
						<Route path="/hero" render={(props) => (<HeroComponent setHero={this.setHero} hero={this.state.hero} user={this.state.user} {...props} />)} />
						<Route path="/account" render={() => (<LoginForm setUser={this.setUser} user={this.state.user} />)} />
						<Route path="/about" component={About} />
					</div>
					<Footer />
				</Suspense>
			</HashRouter>
		);
	}
}

export default App;
