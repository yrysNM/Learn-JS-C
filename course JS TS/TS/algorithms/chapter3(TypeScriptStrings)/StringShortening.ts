const DICTIONARY =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function encodeId(num: number) {
  const base: number = DICTIONARY.length;
  let encoded: string = "";

  if (num === 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }

  return reverseWord(encoded);
}

function reverseWord(str: string) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
}

function decodeId(id: string) {
  let base = DICTIONARY.length;
  let decoded: number = 0;

  for (let index = 0; index < id.split("").length; index++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
  }

  return decoded;
}

console.log(decodeId("login"));
console.log(encodeId(165899861));
