import { Nullable } from '../types'

export type Collaborator = {
	node: {
		name: string
		avatarUrl: Nullable<string>
		url: string
	}
}

export type Repo = {
	node: {
		name: string
		url: string
		defaultBranchRef: {
			name: string
		}
		description: Nullable<string>
		collaborators: {
			edges: Collaborator[]
		}
		stargazerCount: number
		createdAt: string
		forkingAllowed: boolean
		forks: {
			edges: Nullable<
				[
					{
						node: {
							name: string
							url: string
						}
					},
				]
			>
		}
		latestRelease: Nullable<{
			name: string
			url: string
			createdAt: string
		}>
	}
}
export type GraphQLResult = {
	user: {
		repositories: Nullable<{
			edges: Repo[]
		}>
	}
}

export type ArgsType = {
	name: string
}
export type ReposArgsType = {
	userName: string
}
