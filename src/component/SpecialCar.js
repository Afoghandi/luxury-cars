import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Special() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<section className="perfect-blend between">
			<div className="container">
				<div className="global-headline">
					<div className="animate-top" data-aos="zoom-in">
						<Banner header="The Perfect" />{" "}
					</div>
				</div>{" "}
				<div className=" animate-bottom">
					<h2 className="global-headline headline"> Perfection</h2>
				</div>
			</div>{" "}
		</section>
	);
}
