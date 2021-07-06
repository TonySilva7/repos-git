import React, { useState } from 'react';
import { FaGithub, FaPlusCircle } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

function Main(props) {
	const [newRepo, setNewRepo] = useState('');

	function handleInputChange(event) {
		setNewRepo(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		alert(newRepo);
	}

	return (
		<Container>
			<h1>
				<FaGithub size={30} />
				Meus Repositórios
			</h1>
			<Form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Adicionar Repositório'
					value={newRepo}
					onChange={handleInputChange}
				/>

				<SubmitButton>
					<FaPlusCircle color='#FFF' size={17} />
				</SubmitButton>
			</Form>
		</Container>
	);
}

export default Main;
