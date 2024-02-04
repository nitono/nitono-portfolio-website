import { Nullable } from '../types'

export type ReadmeResponse = {
	user: Nullable<{ repository: { object: { text: string } } }>
}
export type Args = { branch: string; userName: string; repoName: string }
