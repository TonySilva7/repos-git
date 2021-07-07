import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../services/api';
import {
	BackButton,
	Container,
	FilterList,
	IssuesList,
	Loading,
	Owner,
	PageActions,
} from './styles';

function Repository({ match }) {
	const [repo, setRepo] = useState({});
	const [issues, setIssues] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [state, setState] = useState('open');
	const [filters, setFilters] = useState([
		{ state: 'all', label: 'Todas', active: true },
		{ state: 'open', label: 'Abertas', active: false },
		{ state: 'closed', label: 'Fechadas', active: false },
	]);
	const [filterIndex, setFilterIndex] = useState(0);

	useEffect(() => {
		async function load() {
			const repoName = decodeURIComponent(match.params.repository);
			const [repoData, issueData] = await Promise.all([
				api.get(`/repos/${repoName}`),
				api.get(`/repos/${repoName}/issues`, {
					params: {
						state: filters.find((f) => f.active).state, // pega o state do active = true
						per_page: 5,
					},
				}),
			]);

			setRepo(repoData.data);
			setIssues(issueData.data);
			setLoading(false);
		}

		load();
	}, [filters, match.params.repository]);

	useEffect(() => {
		async function loadIssue() {
			const repoName = decodeURIComponent(match.params.repository);

			const response = await api.get(`/repos/${repoName}/issues`, {
				params: {
					state: filters[filterIndex].state,
					page: page,
					per_page: 5,
				},
			});

			console.log(`/repos/${repoName}/issues`, 'Page: ' + page);

			setIssues(response.data);
		}

		loadIssue();
	}, [filterIndex, filters, match.params.repository, page, state]);

	function handlePage(action) {
		setPage(action === 'back' ? page - 1 : page + 1);
	}

	if (loading) {
		return (
			<Loading>
				<h1>Carregando...</h1>
			</Loading>
		);
	}

	function handleFilter(index) {
		setFilterIndex(index);
	}

	return (
		<Container>
			<BackButton to='/'>
				<FaArrowLeft color='#0d2636' size={25} />
			</BackButton>

			<Owner>
				<img src={repo.owner.avatar_url} alt={repo.owner.login} />
				<h1>{repo.name}</h1>
				<p>{repo.description}</p>
			</Owner>

			<FilterList numChild={filterIndex}>
				{filters.map((filter, index) => (
					<button
						key={filter.label}
						type='button'
						onClick={() => handleFilter(index)}>
						{filter.label}
					</button>
				))}
			</FilterList>

			<IssuesList>
				{issues.map((issue) => (
					<li key={String(issue.id)}>
						<img src={issue.user.avatar_url} alt={issue.user.login} />
						<div>
							<strong>
								<a href={issue.html_url}>{issue.title}</a>
								{issue.labels.map((label) => (
									<span key={String(label.id)}>{label.name}</span>
								))}
							</strong>
							<p>@{issue.user.login}</p>
						</div>
					</li>
				))}
			</IssuesList>

			<PageActions>
				<button
					type='button'
					disabled={page < 2}
					onClick={() => handlePage('back')}>
					Voltar
				</button>

				<button type='button' onClick={() => handlePage('next')}>
					Próxima
				</button>
			</PageActions>
		</Container>
	);
}

export default Repository;
