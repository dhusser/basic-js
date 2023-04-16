const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedMessage = '',
        j = 0;

    for (let symbol of message) {
      const keySymbol = key[j % key.length];

      if (alphabet.includes(symbol)) {

        let encryptedSymbolIndex = ((alphabet.indexOf(symbol) + alphabet.indexOf(keySymbol)) % 26),
            encryptedSymbol = alphabet[encryptedSymbolIndex];

        encryptedMessage += encryptedSymbol;
        j++;

      } else {
        encryptedMessage += symbol;
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let message = '',
        j = 0;

    for (let symbol of encryptedMessage) {
      const keySymbol = key[j % key.length];

      if (alphabet.includes(symbol)) {

        let messageSymbolIndex = (((alphabet.indexOf(symbol) - alphabet.indexOf(keySymbol)) % 26) + 26) % 26,
            messageSymbol = alphabet[messageSymbolIndex];

        message += messageSymbol;
        j++;

      } else {
        message += symbol;
      }
    }

    return this.direct ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
