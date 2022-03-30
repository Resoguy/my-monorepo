import styled from 'styled-components';

const ButtonBase = styled.button`
	background-color: slateblue;
	padding: 15px 25px;
	color: snow;
	border: none;
	border-radius: 4px;
	transition: 150ms;
	cursor: pointer;

	&:hover {
		background-color: slategray;
	}
`;

export default ButtonBase;
