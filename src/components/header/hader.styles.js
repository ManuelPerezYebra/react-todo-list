import styled from 'styled-components';

const StyledHeader = styled.div`
	height: 300px;
	width: 100%;
	background-image: url('bg-desktop-light.jpg');
	background-size: cover;
	position: absolute;
	top: 0;
	display: flex;
	justify-content: space-around;
	padding-top: 70px;
	z-index: -1;
`;
const Title = styled.h1`
	color: white;
	font-family: 'Josefin Sans';
	font-weight: bold;
`;

export { StyledHeader, Title };
