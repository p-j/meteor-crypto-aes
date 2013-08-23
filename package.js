Package.describe({
  summary: "AES Package for Crypto.js, standard secure algorithms"
});

Package.on_use(function (api) {
  api.use('crypto-base',    ['client', 'server']);
  api.imply('crypto-base',  ['client', 'server']);
  api.add_files(['evpkdf.js', 'cipher-core.js','aes.js'], ['client', 'server']);
});