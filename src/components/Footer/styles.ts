import styled from 'styled-components';

const Footer = styled.footer`
	width: 100%;
	height: 100%;
	grid-area: FT;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 2rem;

	#footer-content {
		padding: 1rem 3rem;
		border-radius: 0.8rem;
		border: 2px solid hsl(217, 16%, 45%);
		font-size: 1.6rem;
		letter-spacing: 0.2rem;
		color: #fff;
		cursor: pointer;
		position: relative;
		z-index: 9;
	}

	@media (max-width: 620px) {
		justify-content: center;
	}
`;

export { Footer };
