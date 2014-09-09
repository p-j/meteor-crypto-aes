Package.describe({
	summary: 'AES Package for CryptoJS, standard secure algorithms',
	version: '3.1.2',
	git: 'https://github.com/p-j/meteor-crypto-aes.git'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:crypto-core@3.1.2', ['client', 'server']);
	api.imply('jparker:crypto-core', ['client', 'server']);
	api.add_files(['evpkdf.js', 'cipher-core.js', 'aes.js'], ['client', 'server']);
});