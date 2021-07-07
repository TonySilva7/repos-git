import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
	max-width: 700px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	padding: 30px;
	margin: 80px auto;

	h1 {
		font-size: 30px;
		display: flex;
		align-items: center;

		svg {
			margin-right: 10px;
		}
	}
`;

export const Form = styled.form`
	display: flex;
	margin-top: 30px;

	input {
		flex: 1;
		border: solid 1px ${(props) => (props.error ? '#ff0045' : '#ddd')};
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 17px;
	}
`;

// criando animação
const animate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const SubmitButton = styled.button.attrs((props) => ({
	type: 'submit',
	disabled: props.loading,
}))`
	display: flex;
	align-items: center;
	justify-content: center;

	background: #0d2636;
	border: none;
	border-radius: 4px;
	margin-left: 10px;
	padding: 0 15px;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.5;
	}

	${(props) =>
		props.loading &&
		css`
			svg {
				animation: ${animate} 2s linear infinite;
			}
		`}
`;

export const List = styled.ul`
	list-style: none;
	margin-top: 20px;

	li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15px;

		& + li {
			border-top: solid 1px #eee;
		}

		a {
			color: #0d2636;
			text-decoration: none;
		}
	}
`;

export const DeleteButton = styled.button.attrs({ type: 'submit' })`
	background: transparent;
	color: #e4605e;
	border: 0;
	padding: 8px 7px;
	outline: 0;
	border-radius: 4px;
`;
