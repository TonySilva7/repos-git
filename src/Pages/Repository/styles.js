import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Loading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	height: 100vh;
`;

export const Container = styled.div`
	max-width: 700px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	padding: 30px;
	margin: 80px auto;
`;

export const Owner = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 100px;
		border-radius: 50%;
		margin: 20px 0;
	}

	h1 {
		font-size: 30px;
		color: #0d2636;
	}

	p {
		margin-top: 5px;
		font-size: 14px;
		color: #000;
		text-align: center;
		line-height: 1.4;
		max-width: 400px;
	}
`;

export const BackButton = styled(Link)`
	border: 0;
	outline: 0;
	background-color: transparent;
`;

export const IssuesList = styled.ul`
	margin-top: 30px;
	padding-top: 30px;
	border-top: solid 1px #eee;
	list-style: none;

	li {
		display: flex;
		padding: 15px 10px;

		& + li {
			margin-top: 12px;
		}

		img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			box-shadow: 1px 3px 4px -2px rgba(18, 46, 102, 0.39);
		}

		div {
			flex: 1;
			margin-left: 12px;

			p {
				margin-top: 10px;
				font-size: 12px;
				color: #0d2636;
			}

			strong {
				font-size: 15px;

				a {
					text-decoration: none;
					color: #222;
					transition: all 0.3s ease;

					&:hover {
						color: #0071db;
					}
				}

				span {
					background-color: #ccc;
					color: #fff;
					border-radius: 50px;
					font-size: 12px;
					font-weight: 600px;
					padding: 3px 7px;
					margin-left: 10px;
				}
			}
		}
	}
`;

export const PageActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		outline: 0;
		border: 0;
		background-color: #0d0232;
		color: #fff;
		padding: 5px 10px;
		border-radius: 4px;

		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
`;

export const FilterList = styled.div`
	margin: 15px 0;

	button {
		outline: 0;
		border: 0;
		padding: 8px;
		border-radius: 4px;
		margin: 0 3px;

		// pega o filho dinamicamente
		&: nth-child(${(props) => props.numChild + 1}) {
			background-color: #0071eb;
			color: #fff;
		}
	}
`;
