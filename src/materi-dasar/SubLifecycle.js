import React, { Component } from "react";

export default class SubLifecycle extends Component {
	componentWillUnmount() {
		this.props.ubahMakanan("Rawon");
	}

	render() {
		return <div>Component Sub Lifecycle</div>;
	}
}
