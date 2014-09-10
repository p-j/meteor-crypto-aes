Package.describe({
	summary: 'AES Package for CryptoJS, standard secure algorithms',
	version: '0.1.0',
	git: 'https://github.com/p-j/meteor-crypto-aes.git'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@0.9.1.1');

	api.use([
    'jparker:crypto-core@0.1.0',
    'jparker:crypto-cipher-core@0.1.0',
		'jparker:crypto-md5@0.1.0',
		'jparker:crypto-padding@0.1.0',
		'jparker:crypto-mode@0.1.0'
		], ['client', 'server']);

	api.imply([
    'jparker:crypto-core',
    'jparker:crypto-cipher-core',
		'jparker:crypto-md5',
		'jparker:crypto-mode',
		'jparker:crypto-padding'
  ], ['client', 'server']);

	api.addFiles('lib/aes.js', ['client', 'server']);
});

Package.onTest(function (api) {
	api.use([
		'jparker:crypto-core@0.1.0',
		'jparker:crypto-cipher-core@0.1.0',
		'jparker:crypto-md5@0.1.0',
		'jparker:crypto-mode@0.1.0',
		'jparker:crypto-padding@0.1.0',
		'jparker:crypto-aes@0.1.0',
		'tinytest'
	], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});