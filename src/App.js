import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";
import SingleCarPage from "./pages/SingleCarPage";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />{" "}
				<Route exact path="/cars/" component={CarPage} />{" "}
				<Route exact path="/cars/:slug" component={SingleCarPage} />{" "}
				<Route component={ErrorPage} />{" "}
			</Switch>{" "}
			<Footer />
		</>
	);
}

export default App;
