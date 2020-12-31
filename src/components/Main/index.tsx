import { useContext } from 'react';

import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import RPS from 'components/Modal/Rules/RPS';

import scoreboardContext from 'contexts/scoreboard';
import * as styles from './styles';

const Main = () => {
	const { showModal } = useContext(scoreboardContext);
	return (
		<styles.Wrapper>
			{showModal && <RPS />}
			<Header />
			<Content />
			<Footer />
		</styles.Wrapper>
	);
};

export default Main;
