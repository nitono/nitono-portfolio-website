import gql from 'graphql-tag'

export const typeDefs = gql`
	type Nodes {
		name: String
		avatarUrl: String
		url: String
	}

	type Edges {
		node: Nodes
	}
	type Collaborators {
		edges: [Edges]
	}
	type ForksNode {
		name: String
		url: String
	}
	type ForkEdges {
		node: ForksNode
	}
	type Forks {
		edges: [ForkEdges]
	}
	type Branch {
		name: String
	}
	type LatestRelease {
		name: String
		url: String
		createdAt: String
	}
	type RepoEdges {
		name: String
		url: String
		description: String
		defaultBranchRef: Branch
		collaborators: Collaborators
		stargazerCount: String
		createdAt: String
		forkingAllowed: Boolean
		forks: Forks
		latestRelease: LatestRelease
	}
	type Node {
		node: RepoEdges
	}
	type Repos {
		edges: [Node]
	}
	type User {
		repositories: Repos
	}

	type Response {
		user: User
	}

	type Query {
		repos(userName: String): Response
	}
`
