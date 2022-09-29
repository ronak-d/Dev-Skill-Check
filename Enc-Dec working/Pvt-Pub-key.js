// website = https://www.npmjs.com/package/encrypt-rsa
const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

// console.log(encryptRsa);

const { privateKey:privateKey1, publicKey:publicKey1 } = encryptRsa.createPrivateAndPublicKeys();

let message = 'E2E Encryption with both keys';
const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey({ 
  text: message,   
  publicKey:publicKey1
});
// console.log(encryptedText);

const decryptedText1 = encryptRsa.decryptStringWithRsaPrivateKey({ 
  text: encryptedText1, 
  privateKey:privateKey1
});
console.log(decryptedText1);

// ----------------------
const { privateKey:privateKey2, publicKey:publicKey2 } = encryptRsa.createPrivateAndPublicKeys();

let message2 = 'How to implement yrr';
const encryptedText2 = encryptRsa.encryptStringWithRsaPublicKey({ 
  text: message2,   
  publicKey:publicKey2
});
// console.log(encryptedText);

const decryptedText2 = encryptRsa.decryptStringWithRsaPrivateKey({ 
  text: encryptedText2, 
  privateKey:privateKey2
});
console.log(decryptedText2);