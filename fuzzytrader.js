const calctotalTip = (total, tipPercent = 0.2) => {
	const tip = total * tipPercent
	return total + tip
}

let getDBURL = () => {
	return 1
}

let getDBKey = () => {
	return 333
}

module.exports = {calctotalTip, getDBURL, getDBKey}
