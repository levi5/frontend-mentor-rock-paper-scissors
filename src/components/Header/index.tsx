import * as styles from './styles';

const Header = () => (
	<styles.Header>
		<div id="scoreboard">
			<div className="group-01">
				<img src="/assets/images/logo.svg" />
			</div>

			<div className="group-01">
				<div id="score">
					<h4 className="score-title">Score</h4>
					<span className="score-number">12</span>
				</div>
			</div>
		</div>
	</styles.Header>
);

export default Header;
