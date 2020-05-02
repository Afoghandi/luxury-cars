import React, { Component } from "react";
import { CarContext } from "../context";
import Display from "./RoomProcessor";
import Loading from "./Loading";
import Banner from "../component/Banner";

class FeaturedCars extends Component {
	static contextType = CarContext;

	render() {
		let { loading, featuredCars: cars } = this.context;
		cars = cars.map((car) => {
			return <Display key={car.id} car={car} />;
		});

		return (
			<section className="discover-our-feature">
				<div className="container">
					<div className="featured-cars">
						<div className="featured-cars-center">
							{" "}
							{loading ? <Loading /> : cars}{" "}
						</div>{" "}
					</div>{" "}
					<div className="global-headline">
						<Banner header="Discover" Dtitle="our Ranges" />{" "}
					</div>{" "}
				</div>{" "}
			</section>
		);
	}
}

export default FeaturedCars;
