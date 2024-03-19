let savedWords = document.getElementById('savedwords');
let savedWordsString = [];

function addWord() {
    let wordIntroduced = document.getElementById('writeWords').value;
    savedWords.innerHTML += ' ' + wordIntroduced + '<br>';
    savedWordsString.push(' ' + wordIntroduced);

}

function searchWord() {
    let wordSearched = document.getElementById('writeWords').value;
    let includedWord = false;
    for (let i = 0; i < savedWordsString.length; i++) {
        if (savedWordsString[i].includes(' ' + wordSearched + ' ')) {
            alert('The word is included in dictionary');
            i = savedWordsString.length;
            includedWord = true;
        }
    }
    if (includedWord === false) {
        alert('The word is not included in dictionary');
    }
}
