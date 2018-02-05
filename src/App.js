import React, {Component} from 'react';

import './assets/styles/app.css'

import CardContainer from './assets/components/CardContainer';

import SliderContainer from './assets/components/SliderContainer'

class App extends Component {
	render() {
		return (
				<div className="container">
					<CardContainer title="Game of Thrones"/>
					<CardContainer title="Game of Thrones"/>
					<CardContainer title="Game of Thrones"/>
					<CardContainer title="Game of Thrones"/>
					<SliderContainer />
				</div>
		);
	}
}

export default App;