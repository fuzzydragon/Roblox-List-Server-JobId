// ==UserScript==
// @name         Show Server GUID
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.roblox.com/games/*
// @icon         https://www.google.com/s2/favicons?domain=roblox.com
// @grant        none
// ==/UserScript==

const LIST_TIMEOUT = 1000

async function displayGUID(item) {
	const id = item.getAttribute(`data-gameid`)
	const details = item.children[1]

	if (details.children.length == 3 && id != null) {
		const label = document.createElement(`p`)

		label.innerText = id
		details.appendChild(label)
	}
}

async function update() {
	const items = document.getElementsByClassName(`stack-row rbx-game-server-item`)

	for (const item of items) {
		displayGUID(item)
	}
}

setInterval(update, LIST_TIMEOUT)
