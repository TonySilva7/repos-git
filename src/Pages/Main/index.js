import React, { useCallback, useEffect, useState } from 'react';
import {
	FaBars,
	FaGithub,
	FaPlusCircle,
	FaSpinner,
	FaTrash,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, DeleteButton, Form, List, SubmitButton } from './styles';

function Main(props) {
	const [newRepo, setNewRepo] = useState('');
	const [reposGit, setReposGit] = useState([]);
	const [loading, setLoading] = useState(false);
	const [myAlert, setMyAlert] = useState(null);

	//buscar
	useEffect(() => {
		const repoStorage = localStorage.getItem('repos');
		if (repoStorage) {
			setReposGit(JSON.parse(repoStorage));
		}
	}, []);

	//salvar
	useEffect(() => {
		localStorage.setItem('repos', JSON.stringify(reposGit));
	}, [reposGit]);

	function handleInputChange(event) {
		setNewRepo(event.target.value);
		setMyAlert(null);
	}

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();

			async function submit(event) {
				setLoading(true);
				setMyAlert(null);
				try {
					if (newRepo === '') {
						throw new Error('Você precisa indicar um repositório!');
					}

					const response = await api.get(`repos/${newRepo}`);
					const hasRepo = reposGit.find((repo) => repo.name === newRepo);
					if (hasRepo) {
						throw new Error('Repositório duplicado!');
					}

					const data = {
						name: response.data.full_name,
					};

					setReposGit([...reposGit, data]);
					setNewRepo('');
				} catch (err) {
					setMyAlert(true);
					console.log(err);
				} finally {
					setLoading(false);
				}
			}

			submit();
		},
		[newRepo, reposGit]
	);

	const handleDelete = useCallback(
		(repo) => {
			const repos = reposGit.filter((r) => r.name !== repo);
			setReposGit(repos);
		},
		[reposGit]
	);

	return (
		<Container>
			<h1>
				<FaGithub size={30} />
				Meus Repositórios
			</h1>

			<Form onSubmit={handleSubmit} error={myAlert}>
				<input
					type='text'
					placeholder='Adicionar Repositório'
					value={newRepo}
					onChange={handleInputChange}
				/>

				<SubmitButton loading={loading ? 1 : 0}>
					{loading ? (
						<FaSpinner color='#FFF' size={14} />
					) : (
						<FaPlusCircle color='#FFF' size={17} />
					)}
				</SubmitButton>
			</Form>

			<List>
				{reposGit.map((repo) => (
					<li key={repo.name}>
						<span>
							<DeleteButton onClick={() => handleDelete(repo.name)}>
								<FaTrash size={14} />
							</DeleteButton>
							{repo.name}
						</span>
						<Link to={`/repository/${encodeURIComponent(repo.name)}`}>
							<FaBars size={20} />
						</Link>
					</li>
				))}
			</List>
		</Container>
	);
}

export default Main;
