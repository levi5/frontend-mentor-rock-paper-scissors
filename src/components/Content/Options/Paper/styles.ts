import styled from 'styled-components';

import { OptionComponentPropsStyle } from '../../../../@types';

const Wrapper = styled.div<OptionComponentPropsStyle>`
	width: 100%;
	height: 100%;
	padding: ${(OptionComponentPropsStyle) => {
		if (OptionComponentPropsStyle.Type === 'large') {
			return '2rem';
		} else if (OptionComponentPropsStyle.Type === 'medium') {
			return '1.4rem';
		} else {
			return '0.9rem';
		}
	}};
	border-radius: 50%;
	pointer-events: none;
	background: linear-gradient(
		to bottom,
		rgba(72, 101, 244, 1),
		rgba(86, 113, 245, 1)
	);
	box-shadow: ${(OptionComponentPropsStyle) => {
		let size;
		if (OptionComponentPropsStyle.Type === 'large') {
			size = '10px';
		} else if (OptionComponentPropsStyle.Type === 'medium') {
			size = '7px';
		} else {
			size = '5px';
		}
		return `1px ${size} 0px -2px rgba(41, 69, 193, 0.8)`;
	}};

	.btn-select {
		width: 100%;
		border-radius: 50%;
		height: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #e9e9e9;

		box-shadow: ${(OptionComponentPropsStyle) => {
			let size;
			if (OptionComponentPropsStyle.Type === 'large') {
				size = '8px';
			} else if (OptionComponentPropsStyle.Type === 'medium') {
				size = '7px';
			} else {
				size = '5px';
			}
			return `inset 1px ${size} 0px -2px rgba(8, 8, 8, 0.3);`;
		}};
	}
	.btn-select img {
		width: ${(OptionComponentPropsStyle) => {
			let size;
			if (OptionComponentPropsStyle.Type === 'small') {
				size = '3rem';
			} else {
				size = '5rem';
			}
			return size;
		}};
		height: ${(OptionComponentPropsStyle) => {
			let size;
			if (OptionComponentPropsStyle.Type === 'small') {
				size = '3rem';
			} else {
				size = '5rem';
			}
			return size;
		}};
		display: flex;
	}
`;

export { Wrapper };
