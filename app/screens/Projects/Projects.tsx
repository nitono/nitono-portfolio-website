/* eslint-disable @next/next/no-img-element */
'use client'
import { Collaborator, GraphQLResult, Repo } from '@/app/api/git/types'
import getGithubData from '@/app/lib/getGithubData'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { v4 } from 'uuid'
interface ProjectItemProps {
	repo: Repo
}

const Item: FC<ProjectItemProps> = ({ repo }) => {
	const {
		name,
		latestRelease,
		forks,
		url,
		forkingAllowed,
		description,
		createdAt,
		collaborators,
		stargazerCount,
	} = repo.node

	return (
		<motion.div
			whileHover={{
				scale: 1.01,
			}}
			onClick={() => window.location.assign(url)}
			className='project cursor-pointer lg:h-[300px] h-fit dark:bg-zinc-900 dark:text-zinc-300 bg-zinc-300 text-zinc-600 font-code rounded-lg flex justify-around items-center flex-col lg:p-2 p-2 w-[90vw] lg:w-[400px]'
		>
			<div className='project-info flex justify-around items-start flex-col'>
				<h2 className='project-name text-lg lg:text-xl text-zinc-900 dark:text-zinc-300 font-code font-semibold'>
					{name}
				</h2>
				<p className='project-description text-sm lg:text-lg text-zinc-600'>
					{description}
				</p>
			</div>
			<div className='other-info flex justify-between items-center flex-col'>
				<div className='line flex gap-3'>
					<time className=''>
						<span className='text-orange-500'>Created At:</span>{' '}
						{new Date(createdAt).toLocaleDateString('en-US')}
					</time>
					<h3 className=''>
						<span className='text-green-600'>Latest release:</span>{' '}
						{latestRelease !== null ? (
							<>
								<a href={latestRelease.url}>{latestRelease.name}</a> at{' '}
								<time>
									{new Date(latestRelease.createdAt).toLocaleDateString(
										'en-US'
									)}
								</time>
							</>
						) : (
							'No release'
						)}
					</h3>
				</div>
				<div className='line flex w-full justify-around items-center gap-1'>
					<div className='stars flex justify-around items-center'>
						<FaStar className='text-amber-300' />
						<h3>{stargazerCount}</h3>
					</div>
					<h3 className=''>
						<span className='text-violet-500'>Forking Allowed:</span>{' '}
						{forkingAllowed ? (
							<em className=''>true</em>
						) : (
							<em className=''>false</em>
						)}
					</h3>

					<div>
						<span className='text-cyan-600'>Forks:</span>{' '}
						{forks.edges !== null && forks.edges.length}
					</div>
				</div>
				<div className='line flex mt-2'>
					<div className='collaborators flex justify-around items-center'>
						{collaborators.edges.map((collaborator: Collaborator) => {
							const { name, avatarUrl, url } = collaborator.node

							return (
								<div
									key={v4()}
									className='collaborator flex flex-col-reverse justify-around items-center'
								>
									<a className='collaborator-name' href={url}>
										{name}
									</a>

									<img
										className='collaborator-avatar w-9 h-9 rounded-full'
										src={avatarUrl !== null ? avatarUrl : ''}
										alt={`${name} avatar`}
									/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</motion.div>
	)
}

const Projects = () => {
	const [repos, setRepos] = useState<GraphQLResult>({
		user: {
			repositories: null,
		},
	})

	const processData = () => {
		getGithubData('nitono').then(res => {
			setRepos(res.data as GraphQLResult)
		})
	}
	useEffect(() => processData(), [])

	const cn = `${repos.user.repositories !== null ? 'flex justify-around items-center flex-col lg:grid lg:grid-cols-3 gap-5' : 'lg:flex lg:justify-center lg:items-center'}`

	return (
		<article className={`projects ${cn} scroll-m-96`} id='projects'>
			{repos.user.repositories !== null ? (
				repos.user.repositories.edges.map((repo: Repo, index) => {
					return <Item repo={repo} key={v4()} />
				})
			) : (
				<Loading />
			)}
		</article>
	)
}

const Loading = () => {
	return (
		<h2 className=' text-xl lg:text-2xl'>
			Loading <span className='animate-spin inline-block'>🔃</span> ...
		</h2>
	)
}

export default Projects
