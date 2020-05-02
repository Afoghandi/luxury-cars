import React from "react";
import { FaAsterisk } from "react-icons/fa";

export default function Banner({ children, header, Dtitle, title, subtitle }) {
	return (
		<section>
			{" "}
			<h2 className="sub-headline"> {header} </h2>{" "}
			<h1 className="headline"> {title} </h1>{" "}
			<h1 className="headline-dark"> {Dtitle} </h1>{" "}
			<div className="headline-description">
				<div className="seperator">
					<div className="line line-left"> </div>{" "}
					<div className="asterisk">
						<FaAsterisk className="fas fa-asterisks" />{" "}
					</div>{" "}
					<div className="line line-right"> </div>{" "}
				</div>{" "}
				<div className=" single-animation">
					<h5> {subtitle} </h5> {children}{" "}
				</div>{" "}
			</div>{" "}
		</section>
	);
}
