import fetch from "node-fetch";

const GITIGNORE_URL = "https://gitignore.io/api/";

export default function gitignore(...query: string[]) {
	return fetch(GITIGNORE_URL + query.join(","))
		.then(res => res.text());
}