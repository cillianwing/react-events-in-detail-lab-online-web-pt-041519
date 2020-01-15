// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

	handleClick = (event) => {
		const mouseCoordinates = [event.clientX, event.clientY]
		return this.props.onReceiveCoordinates(mouseCoordinates)
	}

	render() {
		return (
			<button onClick={this.handleClick} />
		)
	}

}