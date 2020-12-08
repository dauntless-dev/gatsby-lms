const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://freejapaneselessons.com",
		"gaTrackingId": "UA-1449192-1"
	},
	"header": {
		"logo": "",
		"logoLink": "",
		"title": "Free Japanese Lessons",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "Members", "link": "/members/"}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/japanese-alphabet-hiragana",
			"/katakana",
			"/basic-vocabulary-phrases",
			"/basic-grammar",
			"/numbers-time-date",
			"/verb-conjugation",
			"/more-verb-conjugation",
			"/verb-bases",
			"/adjectives-adverbs",
			"/useful-phrases",
			"/register"
		],
    	"collapsedNav": [
    	],
		"links": [
			{ "text": "SpanishPod101", "link": "http://www.spanishpod101.com/member/go.php?r=381338&l=%2F"},
			{ "text": "Rocket Spanish", "link": "http://www.rocketlanguages.com/spanish/premium/?aff=mezzoguild&type=freetrial&tid=learnerspanish"},
			{ "text": "Spanish Uncovered", "link": "https://learn.iwillteachyoualanguage.com/spanish-beginnersfz5inudw?affiliate_id=420071"},
		],
		"frontline": false,
		"ignoreIndex": false,
	},
	"siteMetadata": {
		"title": "Free Japanese Lessons",
		"description": "Learn to speak the Japanese language online for free!",
		"ogImage": "/og-image.jpg",
		"docsLocation": "/",
		"favicon": ""
	},
	"pwa": {
		"enabled": true, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Free Japanese Lessons",
			"short_name": "Free Japanese Lessons",
			"start_url": "/",
			"background_color": "#262626",
			"theme_color": "#262626",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
