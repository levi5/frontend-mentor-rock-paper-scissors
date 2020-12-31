import scoreboardContext from 'contexts/scoreboard';
import { useContext } from 'react';
import * as styles from './styles';

const Footer = () => {
	const { showHideModal } = useContext(scoreboardContext);
	function openRules() {
		showHideModal();
	}
	return (
		<styles.Footer>
			<div id="footer-content" onClick={openRules}>
				<h5>RULES</h5>
			</div>
		</styles.Footer>
	);
};

export default Footer;
