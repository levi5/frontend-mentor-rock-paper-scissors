import styled from 'styled-components';

const Wrapper = styled.div`
	width: 15rem;
	height: 15rem;
	padding: 2rem;
	pointer-events: none;
	border-radius: 50%;
	background: linear-gradient(
		to bottom,
		rgba(236, 158, 14, 1),
		rgba(236, 169, 34, 1)
	);
	box-shadow: 1px 10px 0px -2px rgba(199, 108, 29, 0.8);

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