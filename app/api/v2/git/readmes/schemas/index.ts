import gql from 'graphql-tag'

export const typeDefs = gql`
	type TextO {
		text: String
	}
	type Object {
		object: TextO
	}
	type Repository {
		repository: Object
	}
	type Response {
		user: Repository
	}
	type Query {
		readme(branch: String, userName: String, repoName: String): Response
	}
`
