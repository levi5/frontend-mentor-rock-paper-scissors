import scoreboardContext from 'contexts/scoreboard';
import { useContext } from 'react';
import * as styles from './styles';

const RPS = () => {
	const { gameType, showHideModal } = useContext(scoreboardContext);

	function closeModal() {
		showHideModal();
	}

	return (
		<styles.Wrapper>
			<div className="modal-content">
				<div className="modal-header">
					<h2>Rules</h2>
					<button onClick={closeModal}>
						<img
							src="/assets/images/icon-close.svg"
							alt="close modal"
						/>
					</button>
				</div>
				{gameType == 0 ? (
					<img
						className="image-rule"
						src="/assets/images/image-rules.svg"
						alt="image rules"
					/>
				) : (
					<img
						className="image-rule"
						src="/assets/images/image-rules-bonus.svg"
						alt="image rules"
					/>
				)}
			</div>
		</styles.Wrapper>
	);
};
export default RPS;
