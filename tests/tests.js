var C = CryptoJS;

Tinytest.add('MeteorCryptoAES - Encrypt Key Size 128', function (t) {
	t.equal(
		C.AES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), {
			mode: C.mode.ECB,
			padding: C.pad.NoPadding
		}).ciphertext.toString(),
		'69c4e0d86a7b0430d8cdb78070b4c55a'
	);
});

Tinytest.add('MeteorCryptoAES - Encrypt Key Size 192', function (t) {
	t.equal(
		C.AES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617'), {
			mode: C.mode.ECB,
			padding: C.pad.NoPadding
		}).ciphertext.toString(),
		'dda97ca4864cdfe06eaf70a0ec0d7191'
	);
});

Tinytest.add('MeteorCryptoAES - Encrypt Key Size 256', function (t) {
	t.equal(
		C.AES.encrypt(C.enc.Hex.parse('00112233445566778899aabbccddeeff'), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'), {
			mode: C.mode.ECB,
			padding: C.pad.NoPadding
		}).ciphertext.toString(),
		'8ea2b7ca516745bfeafc49904b496089'
	);
});

Tinytest.add('MeteorCryptoAES - Decrypt Key Size 128', function (t) {
	t.equal(
		C.AES.decrypt(C.lib.CipherParams.create({
			ciphertext: C.enc.Hex.parse('69c4e0d86a7b0430d8cdb78070b4c55a')
		}), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), {
			mode: C.mode.ECB,
			padding: C.pad.NoPadding
		}).toString(),
		'00112233445566778899aabbccddeeff'
	);
});

Tinytest.add('MeteorCryptoAES - Decrypt Key Size 192', function (t) {
	t.equal(
		C.AES.decrypt(C.lib.CipherParams.create({
			ciphertext: C.enc.Hex.parse('dda97ca4864cdfe06eaf70a0ec0d7191')
		}), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f1011121314151617'), {
			mode: C.mode.ECB,
			padding: C.pad.NoPadding
		}).toString(),
		'00112233445566778899aabbccddeeff'
	);
});

Tinytest.add('MeteorCryptoAES - Decrypt Key Size 256', function (t) {
	t.equal(
		C.AES.decrypt(C.lib.CipherParams.create({
			ciphertext: C.enc.Hex.parse('8ea2b7ca516745bfeafc49904b496089')
		}), C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f'), {
			mode: C.mode.ECB,
			padding: C.pad.NoPadding
		}).toString(),
		'00112233445566778899aabbccddeeff'
	);
});

Tinytest.add('MeteorCryptoAES - MultiPart', function (t) {
	var aes = C.algo.AES.createEncryptor(C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f'), {
		mode: C.mode.ECB,
		padding: C.pad.NoPadding
	});
	var ciphertext1 = aes.process(C.enc.Hex.parse('001122334455'));
	var ciphertext2 = aes.process(C.enc.Hex.parse('66778899aa'));
	var ciphertext3 = aes.process(C.enc.Hex.parse('bbccddeeff'));
	var ciphertext4 = aes.finalize();

	t.equal(
		ciphertext1.concat(ciphertext2).concat(ciphertext3).concat(ciphertext4).toString(),
		'69c4e0d86a7b0430d8cdb78070b4c55a'
	);
});

Tinytest.add('MeteorCryptoAES - Input Integrity', function (t) {
	var message = C.enc.Hex.parse('00112233445566778899aabbccddeeff');
	var key = C.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
	var iv = C.enc.Hex.parse('101112131415161718191a1b1c1d1e1f');

	var expectedMessage = message.toString();
	var expectedKey = key.toString();
	var expectedIv = iv.toString();

	C.AES.encrypt(message, key, {
		iv: iv
	});

	t.equal(message.toString(), expectedMessage);
	t.equal(key.toString(), expectedKey);
	t.equal(iv.toString(), expectedIv);
});