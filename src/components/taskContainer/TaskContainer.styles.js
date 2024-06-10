import styled from 'styled-components';

const StyledTaskContainer = styled.div`
	background-color: #24273d;
	border: none;
	color: white;
	width: 540px;
	height: 64px;
	display: flex;
	margin: 158px auto;
	margin-bottom: 24px;
	padding: 24px;
	gap: 24px;
	align-items: center;
	border-radius: 20px;
	input {
		background-color: transparent;
		border: none;
		outline: none;
		height: 40px;
		padding: 5px;
		font-size: 18px;
		font-family: 'Josefin Sans';
		color: white;
	}
	input[type='submit'] {
		display: none;
	}
`;
const StyledTaskPending = styled.div`
	background-color: #24273d;
	border: none;
	color: white;
	width: 540px;
	height: 64px;
	display: flex;
	margin: 158px auto;
	padding: 24px;
	gap: 24px;
	align-items: center;
	margin: 0 auto;
	h1 {
		font-size: 18px;
		font-weight: normal;
	}
	border-top: 1px solid #979797;
`;
const StyledTaskFooter = styled.div`
	background-color: #24273d;
	border: none;
	color: white;
	width: 540px;
	height: 64px;
	display: flex;
	justify-content: space-around;
	margin: 158px auto;
	padding: 24px;
	gap: 24px;
	align-items: center;
	border-radius: 0px 0px 20px 20px;
	margin: 0 auto;
	border-top: 1px solid #979797;
`;
const FilterContainer = styled.div`
	display: flex;
	gap: 10px;
	a:hover {
		color: #3a7cfd;
	}
`;

export {
	StyledTaskContainer,
	StyledTaskFooter,
	StyledTaskPending,
	FilterContainer
};
