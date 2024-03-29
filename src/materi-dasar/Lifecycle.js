import React, { Component } from "react";
import SubLifecycle from "./SubLifecycle";

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			makanan: "Pecel",
			data: {},
			tampilHalamanSub: false,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					data: json,
				});
			});
	}

	ubahMakanan(value) {
		this.setState({
			makanan: value,
		});
	}

	render() {
		return (
			<div>
				<h4>{this.state.makanan}</h4>
				{this.state.tampilHalamanSub && (
					<SubLifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
				)}
				<button
					onClick={() =>
						this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })
					}
				>
					Tampil Halaman Sub
				</button>
			</div>
		);
	}
}
