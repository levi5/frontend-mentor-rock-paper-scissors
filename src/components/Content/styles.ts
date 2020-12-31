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
		width: 15rem;
		height: 15rem;
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

	@media (max-width: 480px) {
		#contains-buttons {
			margin: -5rem 0 0 0%;
		}
		#contains-buttons #bg {
			width: 25rem;
			height: 15rem;
		}
		#contains-buttons .contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button {
			width: 13rem;
			height: 13rem;
		}
		#contains-buttons .contains_paper-button {
			top: 12%;
			left: 10%;
		}

		#contains-buttons .contains_scissors-button {
			top: 12%;
			right: 10%;
		}
		#contains-buttons .contains_rock-button {
			bottom: 1%;
		}
	}

	@media (max-width: 375px) {
		#contains-buttons .contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button {
			width: 12rem;
			height: 12rem;
		}
		#contains-buttons .contains_paper-button {
			top: 14%;
			left: 10%;
		}

		#contains-buttons .contains_scissors-button {
			top: 14%;
			right: 10%;
		}
		#contains-buttons .contains_rock-button {
			bottom: 4%;
		}
	}
`;

export { Wrapper };
