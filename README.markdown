AES algorithm from crypto.js (https://code.google.com/p/crypto-js/#AES)

Install
-------

Inside your project folder run
```
$ mrt add crypto-aes
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