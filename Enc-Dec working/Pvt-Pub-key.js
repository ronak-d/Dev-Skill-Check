const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

// console.log(encryptRsa);

const { privateKey, publicKey:publicKey1 } = encryptRsa.createPrivateAndPublicKeys();

let message = 'E2E Encryption';
const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({ 
  text: message,   
  publicKey:publicKey1
});
// console.log(encryptedText);

const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({ 
  text: encryptedText, 
  privateKey
});
console.log(decryptedText);