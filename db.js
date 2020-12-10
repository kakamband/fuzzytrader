// Back end code used to talk to the database.
// As we are using RestDB, a serverless web available service, are calls
// are made over HTTP methods GET (to fetch data), POST (to include data) and
// DELETE (to remove data).

import {$,jQuery} from 'https://code.jquery.com/jquery-2.2.3.min.js'

function getDBURL() {
   return process.env.
function createRequest(collection, operation = "GET") {
	return {
		"async": true,
		"crossDomain": true,
		"url": "https://fuzzytradertest-8c08.restdb.io/rest/" + collection,
		"method": operation,
		"headers": {
		  "content-type": "application/json",
		  "x-apikey": "5fd04edaff9d67063814039e",
		  "cache-control": "no-cache"
		}
	}
}

function createPortfolioRequest(operation) {
	return createRequest('portfolio', operation)
}

function createAssetsRequest(operation) {
	return createRequest('assets', operation)
}

function listAvailableAssets() {
	$.ajax(createAssetsRequest()).done(function (response) {
		console.log(response.length);
	});
}

function deletePortfolioItem(id) {
	let settings = createPortfolioRequest("DELETE")
	settings.url += "/" + id
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}

function clearPortfolio() {
	listPortfolio(function (response) {
		response.forEach(function(obj) { deletePortfolioItem(obj._id) })
	});
}

function listPortfolio(callback) {
	$.ajax(createRequest()).done((response) => callback(response))
}

module.exports = {listAvailableAssets, listPortfolio}
