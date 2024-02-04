import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { graphql } from '@octokit/graphql'
import { typeDefs } from './schemas'
import { GraphQLResult, ReposArgsType } from './types'

const resolvers = {
	Query: {
		repos: async (_: unknown, args: ReposArgsType) => {
			const query = `query {
				user(login: "${args.userName}") {
					repositories(visibility: PUBLIC, first: 100) {
						edges {
							node {
								defaultBranchRef{
									name
								}
								name,
								description,
								url,
								collaborators{
									edges{
										node{
											name,
											avatarUrl,
											url
										}
									}
								},
								stargazerCount
								createdAt,
								forkingAllowed,
								forks(privacy: PUBLIC, first: 100) {
									edges{
										node{
											name,
											url
										}
									}
								},
								latestRelease {
									name
									url
									createdAt
								},

							}
						}
					}
				}
			}
			`

			const repos = (await graphql(query, {
				headers: {
					accept: 'gzip',
					authorization: `bearer ${process.env.GIT_API_KEY}`,
				},
			})) as GraphQLResult

			return repos
		},
	},
}

const server = new ApolloServer({
	resolvers,
	typeDefs,
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }
