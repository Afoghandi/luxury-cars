import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<Hero>
			<section className="container">
				<Banner header="Oops" title="No page found" subtitle="Ready to Explore">
					<Link to="/" className="btn cta-btn">
						{" "}
						Back to home
					</Link>
				</Banner>
			</section>
		</Hero>
	);
}
