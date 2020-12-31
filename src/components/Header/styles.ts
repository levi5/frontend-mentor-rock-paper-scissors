import styled from 'styled-components';

const Header = styled.header`
	width: 100%;
	height: 100%;
	padding: 3rem 0;
	grid-area: HD;
	display: flex;
	justify-content: center;
	align-items: center;

	#scoreboard {
		max-width: 60rem;
		width: 100%;
		height: auto;
		padding: 2rem 2.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 1rem;
		border: 2px solid hsl(217, 16%, 45%);
	}
	#scoreboard .group-01 {
		display: flex;
		flex-direction: column;
	}
	#scoreboard .group-01 img {
		width: 100%;
		height: 100%;
	}
	#scoreboard .group-01 h1:last-child {
		margin-bottom: 0rem;
	}
	#scoreboard .group-01 #score {
		padding: 1rem 3.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 0.4rem;
		background: linear-gradient(
			to bottom,
			rgb(252, 252, 252),
			rgb(245, 245, 245)
		);
	}

	#scoreboard .group-01 #score .score-title {
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		color: hsl(229, 64%, 46%);
	}
	#scoreboard .group-01 #score .score-number {
		font-size: 5.2rem;
		font-weight: 700;
		color: hsl(229, 25%, 31%);
	}

	@media (max-width: 620px) {
		#scoreboard {
			max-width: 40rem;
			width: 100%;
			height: auto;
			padding: 2rem 1.5rem;
		}
	}
`;

export { Header };
