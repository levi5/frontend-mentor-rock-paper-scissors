import styled from 'styled-components';

const Wrapper = styled.section`
	width: 50rem;
	height: 40rem;
	margin: 3rem 0 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	#bg-02 {
		width: 27.9rem;
		height: 26.3rem;
		margin-top: -5%;
	}

	.contains_paper-button,
	.contains_scissors-button,
	.contains_rock-button,
	.contains_lizard-button,
	.contains_spock-button {
		width: 12rem;
		height: 12rem;
		position: absolute;
		cursor: pointer;
	}
	.contains_paper-button {
		top: 25%;
		right: 12%;
	}

	.contains_scissors-button {
		top: 0%;
		left: 38%;
	}
	.contains_rock-button {
		bottom: 6%;
		right: 21%;
	}
	.contains_lizard-button {
		bottom: 6%;
		left: 21%;
	}
	.contains_spock-button {
		top: 25%;
		left: 12%;
	}

	@media (max-width: 620px) {
		#bg-02 {
			width: 25.9rem;
			height: 24.3rem;
		}
		.contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button,
		.contains_lizard-button,
		.contains_spock-button {
			width: 9rem;
			height: 9rem;
		}
		.contains_paper-button {
			top: 28%;
			right: 17%;
		}

		.contains_scissors-button {
			top: 7%;
			left: 41%;
		}
		.contains_rock-button {
			bottom: 18%;
			right: 25%;
		}
		.contains_lizard-button {
			bottom: 18%;
			left: 25%;
		}
		.contains_spock-button {
			top: 28%;
			left: 17%;
		}
	}

	@media (max-width: 480px) {
		margin: -5rem 0 0 0%;

		#bg-02 {
			width: 23.9rem;
			height: 22.3rem;
			margin-top: 5%;
		}
		.contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button,
		.contains_lizard-button,
		.contains_spock-button {
			width: 9rem;
			height: 9rem;
		}
		.contains_paper-button {
			top: 34%;
			right: 16%;
		}

		.contains_scissors-button {
			top: 14%;
			left: 38.9%;
		}
		.contains_rock-button {
			bottom: 12%;
			right: 24%;
		}
		.contains_lizard-button {
			bottom: 12%;
			left: 24%;
		}
		.contains_spock-button {
			top: 34%;
			left: 16%;
		}
	}
	@media (max-width: 380px) {
		#bg-02 {
			width: 23.9rem;
			height: 22.3rem;
			margin-top: -5%;
		}
		.contains_paper-button,
		.contains_scissors-button,
		.contains_rock-button,
		.contains_lizard-button,
		.contains_spock-button {
			width: 8rem;
			height: 8rem;
		}
		.contains_paper-button {
			top: 34%;
			right: 10%;
		}

		.contains_scissors-button {
			top: 14%;
			left: 38.9%;
		}
		.contains_rock-button {
			bottom: 15%;
			right: 20%;
		}
		.contains_lizard-button {
			bottom: 15%;
			left: 20%;
		}
		.contains_spock-button {
			top: 34%;
			left: 10%;
		}
	}
`;

export { Wrapper };
