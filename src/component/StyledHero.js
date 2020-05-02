import styled from "styled-components";
import defaultImg from "../images/blackdodge.jpg";

const styledHero = styled.header `
	min-height: 60vh;
	background: url(${(props) => (props.img ? props.img : defaultImg)}) center
		no-repeat;
	background-size: cover;
	display: flex;

	align-items: center;
	text-align: center;
`;

export default styledHero;