import React, { Component } from "react";
import items from "./Data";
const CarContext = React.createContext();

class CarProvider extends Component {
	state = {
		cars: [],
		sortedCars: [],
		featuredCars: [],
		specialCar: [],
		loading: true,
	};
	componentDidMount() {
		let cars = this.formData(items);
		let featuredCars = cars.filter((car) => car.featured === true);
		let specialCar = cars.filter((car) => car.special === true);
		this.setState({
			cars,
			featuredCars,
			specialCar,
			sortedCars: cars,
			loading: false,
		});
	}
	formData(items) {
		let tempCars = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let cars = { ...item.fields, id, images };
			return cars;
		});
		return tempCars;
	}
	getCar = (slug) => {
		let tempCars = [...this.state.cars];
		let cars = tempCars.find((item) => item.slug === slug);
		return cars;
	};
	render() {
		return (
			<CarContext.Provider value={{ ...this.state, getCar: this.getCar }}>
				{" "}
				{this.props.children}{" "}
			</CarContext.Provider>
		);
	}
}
const CarConsumer = CarContext.Consumer;

export { CarProvider, CarContext, CarConsumer };
