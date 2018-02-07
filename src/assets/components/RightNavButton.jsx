import React from 'react';

class RightNavButton extends React.Component {

	render() {
		return <button onClick={this.props.onClick}>Next</button>
	}
}

export default RightNavButton;