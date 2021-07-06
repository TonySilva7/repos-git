import styled from 'styled-components';

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
		border: solid 1px #ddd;
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 17px;
	}
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
	display: flex;
	align-items: center;
	justify-content: center;

	background: #0d2636;
	border: none;
	border-radius: 4px;
	margin-left: 10px;
	padding: 0 15px;
`;
