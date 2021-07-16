const letterCounts = {};
const wordsCounts = {};

const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    countletters(typedText);
    writeletters();
    words = typedText.split(/\s/);
    countwords();
    writewords();
});


// Isto muda todas as letras para minúsculas

// Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
// Iremos aprender mais sobre como usar a função replace numa lição mais à frente.

function countletters(typedText){

for (let i = 0; i < typedText.length; i++) {
    
    currentLetter = typedText[i];
    console.log(currentLetter)
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
    
 }
 console.log(letterCounts)
}
 
function writeletters() {
 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }

}


function countwords() {
 
 
 for (let i = 0; i < words.length; i++) {
     
     currentword = words[i];
     if (wordsCounts[currentword] === undefined) {
        wordsCounts[currentword] = 1; 
      } else { 
        wordsCounts[currentword]++; 
      }
     
  }
}


function writewords() {
 for (let word in wordsCounts) { 
    const span = document.createElement("span"); 
    const textContent1 = `"${word}": ${wordsCounts[word]}, `;
    span.innerText = textContent1; 
    const wordss = document.getElementById("wordsDiv");
    wordss.appendChild(span); 
 }
}