[AES](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm from [CryptoJS](https://code.google.com/p/crypto-js/#AES).

Dependency
----------
These are automatically installed
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).
- [`jparker:crypto-cipher-core`](https://github.com/p-j/meteor-crypto-cipher-core).
- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5).
- [`jparker:crypto-padding`](https://github.com/p-j/meteor-crypto-padding).
- [`jparker:crypto-mode`](https://github.com/p-j/meteor-crypto-mode).

Install
-------

Inside your project folder run
```
$ meteor add jparker:crypto-aes
```
CryptoJS is now available on **both the client and server**.

Usage
-------

```javascript
encrypted = CryptoJS.AES.encrypt("Message", "Passphrase");
console.log(encrypted.toString());
// 53616c7465645f5fe5b50dc580ac44b9be85d240abc5ff8b66ca327950f4ade5

decrypted = CryptoJS.AES.decrypt(encrypted, "Passphrase");
console.log(decrypted.toString(CryptoJS.enc.Utf8));
// Message
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/> and the documentation for ciphers, including AES, is at <https://code.google.com/p/crypto-js/#Ciphers>.


Related packages
----------------

- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)
- [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)

Credits
-------

Based on [Scott Mackenzie's work](https://github.com/onepixelsolid/meteor-crypto-aes)