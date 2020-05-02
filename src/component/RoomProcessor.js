import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Display({ car }) {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	let { slug, description, images, name, price } = car;

	return (
		<div>
			<article className="car">
				<div className="img-container" data-aos="zoom-in">
					<img src={images[0]} alt="thsddc" />{" "}
					<div className="price-top">
						<h4> £{price} </h4> <p> only </p>{" "}
					</div>{" "}
					<Link to={`/cars/${slug}`} className="btn-primary car-link">
						Explore
					</Link>{" "}
				</div>{" "}
				<p className="car-info" data-aos="fade-down">
					{" "}
					{name}{" "}
				</p>{" "}
			</article>{" "}
			<p data-aos="fade-right">{description} </p>
		</div>
	);
}
