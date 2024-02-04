/**
 * use a old api v1*/

import { graphql } from "@octokit/graphql";
import { NextResponse } from "next/server";
import { GraphQLResult } from "./types";

export const GET = async (req: Request) => {
  const username = new URL(req.url).searchParams.get("user");

  const query = `query {
			user(login: "${username}") {
				repositories(visibility: PUBLIC, first: 100) {
					edges {
						node {
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
		`;

  try {
    const repos = await graphql(query, {
      headers: {
        accept: "gzip",
        authorization: `bearer ${process.env.GIT_API_KEY}`,
      },
    });

    return NextResponse.json(repos as GraphQLResult);
  } catch (err) {
    return NextResponse.json(err);
  }
};
