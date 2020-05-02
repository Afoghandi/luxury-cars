import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
export default function Footer() {
	return (
		<section className="container">
			<div className="footer-container">
				<div className="back-to-top">
					<div className="hero">
						<Link to="/" className="icon">
							<FaChevronUp className="fas" />{" "}
						</Link>
					</div>
				</div>{" "}
				<div className="footer-content">
					<div className="footer-content-about animate-up">
						<h4>About Us</h4>
						<div className="asterisk">
							<FaAsterisk className="fas" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
								dolore dolores fuga sit doloribus! Ratione eum repellendus
								tenetur at maxime ducimus nemo. Reiciendis ullam fugit excepturi
								totam facere praesentium eius.
							</p>
						</div>
						<div className="footer-content-divider animate-bottom">
							<div className="social-media">
								<h4>Follow along</h4>
								<ul className="social-icons">
									<li>
										<FaFacebookSquare className="fab" />
									</li>
									<li>
										<FaPinterestSquare className="fab" />
									</li>
									<li>
										<FaTwitter className="fab" />
									</li>
									<li>
										<FaLinkedinIn className="fab" />
									</li>
									<li>
										<FaInstagram className="fab" />
									</li>
								</ul>
							</div>
							<div className="newsletter-container">
								<h4>newsletter</h4>
								<form className="newsletter-form">
									<input type="text" className="newsletter-input" />
									<button className="newsletter-btn">
										<FaEnvelopeOpenText />{" "}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
