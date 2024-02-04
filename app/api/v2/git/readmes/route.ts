// import { graphql } from '@octokit/graphql'
// import { NextResponse } from 'next/server'

// export const GET = async (req: Request) => {
// 	const username = new URL(req.url).searchParams.get('user')

// 	const query = `query {
// 			user(login: "${username}") {
// 				repositories(visibility: PUBLIC, first: 100) {
// 					edges {
// 						node {
// 							name,
// 							description,
// 							url,
// 							collaborators{
// 								edges{
// 									node{
// 										name,
// 										avatarUrl,
// 										url
// 									}
// 								}
// 							},
// 							stargazerCount
// 							createdAt,
// 							forkingAllowed,
// 							forks(privacy: PUBLIC, first: 100) {
// 								edges{
// 									node{
// 										name,
// 										url
// 									}
// 								}
// 							},

// 							latestRelease {
// 								name
// 								url
// 								createdAt
// 							},

// 						}
// 					}
// 				}
// 			}
// 		}
// 		`

// 	try {
// 		const repos = await graphql(query, {
// 			headers: {
// 				accept: 'gzip',
// 				authorization: `bearer ${process.env.GIT_API_KEY}`,
// 			},
// 		})

// 		return NextResponse.json(repos)
// 	} catch (err) {
// 		return NextResponse.json(err)
// 	}
// }
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { graphql } from '@octokit/graphql'
import { typeDefs } from './schemas'
import { Args, ReadmeResponse } from './types'

// const query = `query {
// 				user(login: "${username}") {
// 					repositories(visibility: PUBLIC, first: 100) {
// 						edges {
// 							node {
// 								name,
// 								description,
// 								url,
// 								collaborators{
// 									edges{
// 										node{
// 											name,
// 											avatarUrl,
// 											url
// 										}
// 									}
// 								},
// 								stargazerCount
// 								createdAt,
// 								forkingAllowed,
// 								forks(privacy: PUBLIC, first: 100) {
// 									edges{
// 										node{
// 											name,
// 											url
// 										}
// 									}
// 								},

// 								latestRelease {
// 									name
// 									url
// 									createdAt
// 								},

// 							}
// 						}
// 					}
// 				}
// 			}
// 			`

// const repos = await graphql(query, {
// 	headers: {
// 		accept: 'gzip',
// 		authorization: `bearer ${process.env.GIT_API_KEY}`,
// 	},
// })

const resolvers = {
	Query: {
		readme: async (_: unknown, args: Args) => {
			const query = `
			query {
				user(login: "${args.userName}") {
					repository(name: "${args.repoName}") {
						object(expression: "${args.branch}:README.md") {
							... on Blob {
								text
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
			})) as ReadmeResponse

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
