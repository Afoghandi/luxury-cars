import React, { Component } from "react";
import { GiAfrica } from "react-icons/gi";
import { GiEuropeanFlag } from "react-icons/gi";
import { GiEarthAsiaOceania } from "react-icons/gi";
import Banner from "../component/Banner";

class Services extends Component {
	state = {
		services: [
			{
				icon: <GiAfrica />,
				title: "in Afrca",
				info:
					"Africa is the most diversed culture in all the continents. Come with us and learn from the reknoewed experts ",
			},
			{
				icon: <GiEuropeanFlag />,
				title: "in Europe",
				info:
					"Once the power house of the continent, Europe conquered the world with an iron fist and spread a religion that is still prevailen to this day ",
			},
			{
				icon: <GiEarthAsiaOceania />,
				title: "in Asia",
				info:
					"Once the power house of the continent, Europe conquered the world with an iron fist and spread a religion that is still prevailen to this day ",
			},
		],
	};

	render() {
		return (
			<section className="discover-our-story">
				<div className="container">
					<div className="restaurant-info">
						<div className="restaurant-description paddin-right animate-left">
							<div className="global-headline headline-dark"> </div>{" "}
							<Banner
								header="Discover"
								Dtitle="our story"
								className="headline-dark"
							/>{" "}
							{this.state.services.map((item, index) => {
								return (
									<article index={index}>
										<div className="restaurant-info-img animate-right">
											{" "}
											{item.icon}{" "}
										</div>{" "}
										<h6 className="btn body-btn"> {item.title} </h6>{" "}
										<p> {item.info} </p>{" "}
									</article>
								);
							})}{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</section>
		);
	}
}

export default Services;
