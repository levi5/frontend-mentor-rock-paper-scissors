import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem;
	border-radius: 50%;
	pointer-events: none;
	background: linear-gradient(
		to bottom,
		rgba(72, 101, 244, 1),
		rgba(86, 113, 245, 1)
	);
	box-shadow: 1px 10px 0px -2px rgba(41, 69, 193, 0.8);

	.btn-select {
		width: 100%;
		border-radius: 50%;
		height: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #e9e9e9;
		box-shadow: inset 1px 8px 0px -2px rgba(8, 8, 8, 0.3);
	}
	.btn-select img {
		width: 5rem;
		height: 5rem;
		display: flex;
	}
`;

export { Wrapper };
