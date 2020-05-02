import React, { Component } from "react";
import Banner from "../component/Banner";
import CarList from "../component/RoomList";
class CarPage extends Component {
	render() {
		return (
			<>
				<section className="main-car-page between">
					<div className="container">
						<div className="global-headline">
							<div className="animate-top">
								<Banner header="Luxury Cars" />{" "}
							</div>
						</div>{" "}
					</div>{" "}
				</section>
				<CarList />
			</>
		);
	}
}

export default CarPage;
