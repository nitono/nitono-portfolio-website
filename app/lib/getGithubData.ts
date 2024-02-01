import axios from 'axios'

async function processing(name: string) {
	return await axios.get(`/api/git?user=${name}`)
}

export default async function getGithubData(name: string) {
	return await processing(name).then(r => {
		return r
	})
}
