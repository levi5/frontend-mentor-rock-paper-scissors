/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

import Lizard from 'components/Content/Options/Lizard';
import Paper from 'components/Content/Options/Paper';
import Rock from 'components/Content/Options/Rock';
import Scissors from 'components/Content/Options/Scissors';
import Spock from 'components/Content/Options/Spock';

import { RPSProps } from '@types';
import * as styles from './styles';

const RPSLS: React.FC<RPSProps> = ({ Select }) => {
	const [windowWidth, setWindowWidth] = useState(0);

	const resizeWindow = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	};

	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	}, []);

	return (
		<styles.Wrapper>
			<img
				id="bg-02"
				src="/assets/images/bg-pentagon.svg"
				alt="background"
			/>

			<div
				className="contains_paper-button"
				data-option={'paper'}
				onClick={Select}
			>
				<Paper Type={windowWidth >= 620 ? 'medium' : 'small'} />
			</div>
			<div
				className="contains_scissors-button"
				data-option={'scissors'}
				onClick={Select}
			>
				<Scissors Type={windowWidth >= 620 ? 'medium' : 'small'} />
			</div>

			<div
				className="contains_rock-button"
				data-option={'rock'}
				onClick={Select}
			>
				<Rock Type={windowWidth >= 620 ? 'medium' : 'small'} />
			</div>

			<div
				className="contains_lizard-button"
				data-option={'lizard'}
				onClick={Select}
			>
				<Lizard Type={windowWidth >= 620 ? 'medium' : 'small'} />
			</div>

			<div
				className="contains_spock-button"
				data-option={'spock'}
				onClick={Select}
			>
				<Spock Type={windowWidth >= 620 ? 'medium' : 'small'} />
			</div>
		</styles.Wrapper>
	);
};

export default RPSLS;
