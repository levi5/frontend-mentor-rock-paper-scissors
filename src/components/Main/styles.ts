import styled from 'styled-components';

const Wrapper = styled.div`
	max-width: 1366px;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 20rem auto 6rem;
	grid-template-columns: 100%;
	grid-template-areas: 'HD' 'CT' 'FT';
	background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	overflow-y: auto;
	overflow-x: hidden;
`;

export { Wrapper };
