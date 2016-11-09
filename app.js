$(document).ready(function() {

	var youTubeUrl = 'https://www.googleapis.com/youtube/v3/search';

	function getDataFromApi(searchTerm, callback) {
		var query = {
			part: 'snippet',
			key: 'AIzaSyBznytozllymVwHgbwDHasvhFYaALBmbA4',
			q: searchTerm,
			r: 'json'
		}
		$.getJSON(youTubeUrl, query, callback);
	} 


	function displayYouTubeSearchData(data) {
		var resultElement = '';
		if (data.items) {
			data.items.forEach(function(item) {
				resultElement += '<a href="' + 'https://www.youtube.com/watch?v=' + item.id.videoId + '">' + '<img src="' + item.snippet.thumbnails.default.url + '"/>' + '</a>';
			});

		}
		else {
			resultElement += '<p>No results</p>';

		}

		$('.js-search-results').html(resultElement);
	}

	function watchSubmit() {
		$('.js-search-form').submit(function(e) {
			e.preventDefault();
			var query = $(this).find('.js-query').val();
			getDataFromApi(query, displayYouTubeSearchData);
		});

	} 

	$(function(){watchSubmit();});

});