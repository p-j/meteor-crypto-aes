Package.describe({
	summary: 'AES Package for CryptoJS, standard secure algorithms',
	version: '3.1.2',
	git: 'https://github.com/p-j/meteor-crypto-aes.git'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:crypto-core@3.1.2', ['client', 'server']);
	api.use('jparker:crypto-cipher-core@3.1.2', ['client', 'server']);
	api.use('jparker:crypto-md5@3.1.2', ['client', 'server']);
	api.use('jparker:crypto-padding@3.1.2', ['client', 'server']);
	api.use('jparker:crypto-mode@3.1.2', ['client', 'server']);
	api.imply('jparker:crypto-core', ['client', 'server']);
	api.imply('jparker:crypto-cipher-core', ['client', 'server']);
	api.imply('jparker:crypto-md5', ['client', 'server']);
	api.imply('jparker:crypto-mode', ['client', 'server']);
	api.imply('jparker:crypto-padding', ['client', 'server']);
	api.add_files(['lib/aes.js'], ['client', 'server']);
});

Package.on_test(function (api) {
	api.use([
		'jparker:crypto-core@3.1.2',
		'jparker:crypto-cipher-core@3.1.2',
		'jparker:crypto-md5@3.1.2',
		'jparker:crypto-mode@3.1.2',
		'jparker:crypto-padding@3.1.2',
		'jparker:crypto-aes@3.1.2',
		'tinytest'
	], ['client', 'server']);

	api.add_files('tests/tests.js', ['client', 'server']);
});