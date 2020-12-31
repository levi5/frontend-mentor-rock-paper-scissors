import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	grid-area: CT;
	display: flex;
	justify-content: center;
	align-items: center;

	#contains-buttons {
		width: 50rem;
		height: 34rem;
		margin: 3rem 0 0 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	#contains-buttons #bg {
		width: 30rem;
		height: 25rem;
		margin-top: 10%;
	}

	#contains-buttons .contains_paper-button,
	.contains_scissors-button,
	.contains_rock-button {
		position: absolute;
		cursor: pointer;
	}
	#contains-buttons .contains_paper-button {
		top: 1%;
		left: 14%;
	}

	#contains-buttons .contains_scissors-button {
		top: 1%;
		right: 14%;
	}
	#contains-buttons .contains_rock-button {
		bottom: 6%;
		left: 35%;
	}

	#contains-result {
		width: auto;
		height: auto;
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#contains-result div {
		display: flex;
		flex-direction: column;
	}

	#contains-result h3 {
		margin-bottom: 1.4rem;
		font-size: 1.8rem;
		color: #fff;
		text-align: center;
		text-transform: uppercase;
	}
	#contains-result .display-result {
		opacity: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 4rem;
		position: relative;
		z-index: -1;
		transition: all 1s linear;
	}
	#contains-result .active {
		opacity: 1 !important;
		z-index: 1;
	}
	#contains-result .display-result h1 {
		margin-bottom: 1.4rem;
		font-size: 4.5rem;
		color: #fff;
		text-transform: uppercase;
	}
	#contains-result .display-result button {
		padding: 1.2rem 4rem;

		background: linear-gradient(
			to bottom,
			rgb(252, 252, 252),
			rgb(245, 245, 245)
		);
		border-radius: 0.6rem;
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.2rem;
		color: hsl(349, 71%, 52%);
		text-transform: uppercase;
	}

	@media (max-width: 620px) {
		#contains-result {
			position: relative;
			height: 100%;
			align-items: normal;
		}
		#contains-result #contains-result-player {
			margin-right: 2rem;
		}
		#contains-result .display-result {
			position: absolute;
			top: 65%;
			left: 15%;
		}
		#contains-result .display-result h1 {
			font-size: 2.5rem;
		}
	}
`;

export { Wrapper };
