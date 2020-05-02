import React, { Component } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";

class NavBar extends Component {
	//set initial state to false
	state = {
		isOpen: false,
	};

	//toggles  action to opposite of state
	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<section className={this.state.isOpen ? "open header " : "    header"}>
				<div className="header">
					<div className="container">
						<nav className="nav">
							<span className="menu-toggle" onClick={this.handleToggle}>
								<FiAlignCenter className="fas fa-bars" />
								<FiAlignLeft className="fas fa-times" />
							</span>{" "}
							<article> </article> <Link to="/" className="logo"></Link>{" "}
							<div className="  nav-item ">
								<ul className="nav-list">
									<Link to="/">
										{" "}
										<li className="nav-link active nav-item"> Home </li>{" "}
									</Link>{" "}
									<Link to="/cars/">
										{" "}
										<li className="nav-link  nav-item"> Cars </li>{" "}
									</Link>{" "}
									<li className=" nav-link  nav-item"> Reservations </li>{" "}
									<li className=" nav-link  nav-item "> Contact </li>{" "}
								</ul>{" "}
							</div>{" "}
						</nav>{" "}
					</div>{" "}
				</div>{" "}
			</section>
		);
	}
}

export default NavBar;
