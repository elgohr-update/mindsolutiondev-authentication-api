import crypto from 'crypto'
import querystring from 'querystring'

export function decodeAuthCredentials(auth) {
	var clientCredentials = Buffer.from(auth.slice("basic ".length), "base64")
		.toString()
		.split(":")
	var clientId = querystring.unescape(clientCredentials[0])
	var clientSecret = querystring.unescape(clientCredentials[1])
	return { clientId, clientSecret }
}

export function randomString() {
	const randomBytes = crypto.randomBytes(20)
	return randomBytes.toString("base64")
}

export function containsAll(arr1, arr2) {
	const arr1Set = new Set()
	for (let i = 0; i < arr1.length; i++) {
		arr1Set.add(arr1[i])
	}

	for (let i = 0; i < arr2.length; i++) {
		if (!arr1Set.has(arr2[i])) {
			return false
		}
	}
	return true
}


