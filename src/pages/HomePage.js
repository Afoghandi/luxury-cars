import React from "react";
import Services from "../component/Services";
import Title from "../component/SpecialCar";
import FeaturedCars from "../component/FeaturedRooms";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Animate from "../component/Animate";
import SpecialCar from "../component/SpecialCar";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<Hero>
				<section className="container">
					<Banner header="Enjoy" title="The Oshun" subtitle="Ready to Explore">
						<Link to="/" className="btn cta-btn">
							{" "}
							Explore
						</Link>
					</Banner>
				</section>
			</Hero>
			<Services />
			<Animate />
			<FeaturedCars />
			<SpecialCar />
		</>
	);
}
