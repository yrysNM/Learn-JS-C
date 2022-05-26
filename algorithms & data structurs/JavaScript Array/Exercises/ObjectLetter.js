class Sentence {
    constructor(word) {
        this.word = word;
    }

    printLetters() {
        const arrWord = this.word.split(""); 

        const arrLetter = arrWord.filter((sentence) => {
            return sentence != " ";
        });

        return arrLetter;

    }

    printWord() {
        return this.printLetters().join("");
    }
}

const word1 = new Sentence("Hello World!");
console.log(word1.printLetters());
console.log(word1.printWord());