let savedWords = document.getElementById('savedwords');

function addWord() {
    let button = document.createElement('button');
    button.textContent= 'Delete word';
    button.style.background = "rgba(255, 0, 0, 0.8)";
    savedWords.appendChild(button);
    let wordIntroduced = document.getElementById('writeWords').value;
    savedWords.innerHTML += ' ' + wordIntroduced + '<br>';
    document.getElementById('writeWords').innerHTML = '';
}

function searchWord() {
    let wordSearched = document.getElementById('writeWords').value;
    if (savedWords.textContent.includes(wordSearched + ' ')) {
        alert('The word is included in dictionary');
    } else {
        alert('The word is not included in dictionary');
    }
    document.getElementById('writeWords').innerHTML = '';
}
