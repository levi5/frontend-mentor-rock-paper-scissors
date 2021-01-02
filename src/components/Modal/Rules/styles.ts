import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(1, 1, 1, 0.6);
	z-index: 999;

	.modal-content {
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		border-radius: 0.6rem;
	}

	.modal-content .modal-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
	}

	.modal-content .modal-header h2 {
		font-size: 2.4rem;
		font-weight: 700;
		color: #3b4363;
		text-transform: uppercase;
	}

	.modal-content .modal-header button {
		width: 3.5rem;
		height: 3.5rem;
		padding: 1rem;
		background: transparent;
	}

	.modal-content .modal-header button img {
		width: 100%;
		height: 100%;
	}

	.modal-content .image-rule {
		width: 24.4rem;
		height: 23rem;
		margin: 3rem 2.5rem 1rem 2.5rem;
	}

	@media (max-width: 480px) {
		.modal-content {
			width: 100%;
			height: 100%;
			gap: 1fr;
		}
		.modal-content .modal-header {
			justify-content: center;
		}
		.modal-content .modal-header h2 {
			position: absolute;
			top: 10%;
		}
		.modal-content .modal-header button {
			position: absolute;
			bottom: 10%;
		}
	}
`;

export { Wrapper };
