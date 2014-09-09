[AES](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm from [CryptoJS](https://code.google.com/p/crypto-js/#AES).

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

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
The CryptoJS project lives at <https://code.google.com/p/crypto-js/> and
the documentation for ciphers, including AES, is at
<https://code.google.com/p/crypto-js/#Ciphers>.


Related packages
----------------

- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)
- [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)