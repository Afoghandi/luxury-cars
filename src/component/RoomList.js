import React, { Component } from "react";
import Display from "./RoomProcessor";

import { CarContext } from "../context";
import Loading from "./Loading";

class RoomList extends Component {
	static contextType = CarContext;
	render() {
		let { loading, cars } = this.context;

		cars = cars.map((car) => {
			return <Display key={car.id} car={car} />;
		});
		return (
			<section className="carlist">
				<div className="container">
					<div className="featured-cars-center">
						{" "}
						{loading ? <Loading /> : cars}{" "}
					</div>
				</div>
			</section>
		);
	}
}

export default RoomList;
