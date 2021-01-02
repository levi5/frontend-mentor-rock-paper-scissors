import { OptionComponentProps } from '@types';
import * as styles from './styles';

const Rock: React.FC<OptionComponentProps> = ({ Type }) => (
	<styles.Wrapper Type={Type}>
		<button className="btn-select">
			<img src="/assets/images/icon-rock.svg" alt="rock" />
		</button>
	</styles.Wrapper>
);

export default Rock;
