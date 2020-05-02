import React, { Component } from "react";
import { CarContext } from "../context";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../component/StyledHero";

class SingleCarPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
		};
	}
	static contextType = CarContext;

	render() {
		const { getCar } = this.context;
		const car = getCar(this.state.slug);
		if (!car) {
			return (
				<div className="error">
					<h3> Sorry, No cars found</h3>
					<Link className="btn-primary" to="/">
						{" "}
						back to rooms
					</Link>
				</div>
			);
		}
		const {
			images,
			description,
			price,

			breakfast,
			name,
			capacity,
		} = car;
		const [MainImg, ...defaultImg] = images;
		return (
			<>
				<StyledHero img={MainImg}></StyledHero>
				<div className="global-headline">
					<div className="animate-top">
						<Banner header={`${name} cars`}>
							{" "}
							<Link to="/" className="btn cta-btn">
								{" "}
								See more Cars
							</Link>{" "}
						</Banner>{" "}
					</div>
				</div>{" "}
				<section className="single-car">
					<div className="single-car-images">
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={name} />;
						})}
					</div>
					<div className="single-car-info">
						<article className="desc">
							<h3> Details</h3>
							<p> {description}</p>
						</article>
						<article className="info">
							<h3>info:</h3>
							<h6>Price:£{price} </h6>

							<h6>
								max capacity:
								{capacity < 1 ? `${capacity} person` : `${capacity} people`}
							</h6>
							<h6>{breakfast && "breakfast is included"}</h6>
						</article>
					</div>
				</section>
			</>
		);
	}
}

export default SingleCarPage;
