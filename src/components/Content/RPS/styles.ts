import styled from 'styled-components';

const Wrapper = styled.section`
	width: 50rem;
	height: 34rem;
	margin: 3rem 0 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	#bg {
		width: 30rem;
		height: 25rem;
		margin-top: 10%;
	}

	.contains_paper-button,
	.contains_scissors-button,
	.contains_rock-button {
		width: 15rem;
		height: 15rem;
		position: absolute;
		cursor: pointer;
	}
	.contains_paper-button {
		top: 1%;
		left: 14%;
	}

	.contains_scissors-button {
		top: 1%;
		right: 14%;
	}
	.contains_rock-button {
		bottom: 6%;
		left: 35%;
	}

	@media (max-width: 480px) {
		margin: -5rem 0 0 0%;

		#bg {
			width: 25rem;
			height: 15rem;
		}
		.contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button {
			width: 13rem;
			height: 13rem;
		}
		.contains_paper-button {
			top: 12%;
			left: 10%;
		}

		.contains_scissors-button {
			top: 12%;
			right: 10%;
		}
		.contains_rock-button {
			bottom: 1%;
		}
	}

	@media (max-width: 375px) {
		.contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button {
			width: 12rem;
			height: 12rem;
		}
		.contains_paper-button {
			top: 14%;
			left: 10%;
		}

		.contains_scissors-button {
			top: 14%;
			right: 10%;
		}
		.contains_rock-button {
			bottom: 4%;
		}
	}

	@media (max-width: 325px) {
		.contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button {
			width: 11rem;
			height: 11rem;
		}
		.contains_paper-button {
			top: 18%;
			left: 5%;
		}

		.contains_scissors-button {
			top: 18%;
			right: 5%;
		}
		.contains_rock-button {
			bottom: 8%;
			left: 32%;
		}
	}
`;

export { Wrapper };
