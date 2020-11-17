import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			makanan: "Bakso",
		};
	}

	gantiMakanan = (makanan_baru) => {
		this.setState({
			makanan: makanan_baru,
		});
	};

	render() {
		return (
			<div>
				<h3>{this.state.makanan}</h3>
				<button onClick={() => this.gantiMakanan("Rujak")}>
					Ganti Makanan
				</button>
				<Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
			</div>
		);
	}
}
