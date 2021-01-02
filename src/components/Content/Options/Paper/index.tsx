import { OptionComponentProps } from '../../../../@types';
import * as styles from './styles';

const Paper: React.FC<OptionComponentProps> = ({ Type }) => (
	<styles.Wrapper Type={Type}>
		<button className="btn-select">
			<img src="/assets/images/icon-paper.svg" alt="paper" />
		</button>
	</styles.Wrapper>
);

export default Paper;
