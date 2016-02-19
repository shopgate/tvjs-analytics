// Reference window to global object
var window = this;

// Mock HTML document
window.document = (new DOMParser()).parseFromString('<html><head></head><body></body></html>', 'application/xml');

// Mock cookie. But be careful, cookie here is just a plain object property and will not work the same as the native browser object
window.document.cookie = '';

// Mock navigator
window.navigator = {
	appCodeName: 'Mozilla',
	appName: 'Netscape',
	appVersion: '5.0 (AppleTV; CPU AppleTV OS ' + Device.systemVersion.replace('.', '_') + ' like Mac OS X) AppleWebKit (KHTML, like Gecko) Mobile',
	cookieEnabled: true,
	doNotTrack: null,
	hardwareConcurrency: 4,
	language: Settings.language,
	languages: [Settings.language],
	maxTouchPoints: 0,
	mimeTypes: [],
	onLine: true,
	permissions: {},
	platform: 'AppleTV',
	plugins: [],
	product: 'Gecko',
	productSub: '20030107',
	userAgent: 'Mozilla/5.0 (AppleTV; CPU AppleTV OS ' + Device.systemVersion.replace('.', '_') + ' like Mac OS X) AppleWebKit (KHTML, like Gecko) Mobile',
	vendor: 'Apple Computer, Inc.',
	vendorSub: ''
};

// Mock history
window.history = {
	length: 1,
	scrollRestoration: 'auto',
	state: null
};

// Mock location
window.location = document.location = {
	hash: '',
	host: 'domain.com',
	hostname: 'domain.com',
	href: 'http://domain.com/',
	origin: 'http://domain.com',
	pathname: '/',
	port: '',
	protocol: 'http:',
	search: ''
};

// Mock screen
window.screen = {
	availHeight: 1080,
	availLeft: 0,
	availTop: 0,
	availWidth: 1920,
	colorDepth: 24,
	height: 1080,
	orientation: {
		angle: 0,
		type: 'landscape-primary'
	},
	pixelDepth: 24,
	width: 1920
};

// Google Analytics checks this
XMLHttpRequest.prototype.withCredentials = false;

// Init Google Analytics object
window.ga = window.ga || function() {
		(ga.q = ga.q || []).push(arguments)
	};
ga.l = +new Date;

// Register account. Don't use cookie storage but that unique identifier manually.
ga('create', 'UA-XXXXX-Y', 'auto', {
	'storage': 'none',
	'clientId': Device.vendorIdentifier
});

// Use XHR because images are not working
ga('set', 'transport', 'xhr');

// Load Analytics scripts. Scripts of plugins must be loaded manually before using the plugin.
evaluateScripts([
  'https://www.google-analytics.com/analytics.js',
  'https://www.google-analytics.com/plugins/ua/ecommerce.js'
], function(success) {});

// Now it's possible to track as usual
ga('send', 'pageview', {
  'page': '/my-page',
  'title': 'My page title'
});