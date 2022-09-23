const isVowel = (character) => {
    let result;
    result = character == "a" || character == "e" || character == 'i' ||
        character == 'o' || character == 'u';

    return result;

}

const ch = "a";
console.log(isVowel(ch));   