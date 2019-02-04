import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	render() {
		return(
			<button>{this.props.children}</button>
		);
	}
}

Button.propTypes = {
	children: PropTypes.string.isRequired
};

export default Button;