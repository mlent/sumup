angular.module('tweetFilter', []).filter('parseTweet', function($sce) {
	return function(input) {
		if (!input.entities.hashtags && !input.entities.urls)
			return input.tweet;

		// Derived from https://gist.github.com/wadey/442463
		// Removed jQuery Dependency
		var map = {};
		input.entities.urls.forEach(function(el) {
			map[el.indices[0]] = [el.indices[1], function(text) {
				return '<a href="' + el.url + '">' + text + '</a>'
			}];
		});
		input.entities.hashtags.forEach(function(el) {
			map[el.indices[0]] = [el.indices[1], function(text) {
				return '<a href="http://twitter.com/search?q=#' + el.text + '">' + text + '</a>'}];
		});
		input.entities.user_mentions.forEach(function(el) {
			map[el.indices[0]] = [el.indices[1], function(text) {
				return '<a title="' + el.name + '" href="http://twitter.com/' + el.screen_name + '">' + text + '</a>'
			}];
		});

		var parsed = '', pos = 0, i = 0;
		for (i = 0; i < input.tweet.length; ++i) {
			var j = map[i];
			if (!j) continue;

			var parse = j[1];
			if (i > pos) parsed += input.tweet.substring(pos, i);
			parsed += parse(input.tweet.substring(i, j[0]));
			i = j[0] - 1;
			pos = j[1];
		}

		if (i > pos) parsed += input.tweet.substring(pos, i);

		return $sce.trustAsHtml(parsed);
	}
});
