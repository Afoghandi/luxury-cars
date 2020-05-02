import React from "react";
import Banner from "./Banner";

export default function Animate() {
	return (
		<section className="tasteful-luxury between">
			<div className="container">
				<div className="global-headline">
					<div className="animate-top">
						<Banner header="Beast Mode" />{" "}
					</div>{" "}
				</div>{" "}
				<div className=" animate-bottom">
					<h2 className="global-headline headline"> Luxury cars </h2>{" "}
				</div>{" "}
			</div>{" "}
		</section>
	);
}
