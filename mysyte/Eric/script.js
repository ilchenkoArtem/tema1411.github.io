var blockElements = document.querySelectorAll('.block');
var currentNumber = 0

for (var i = 0; i < blockElements.length; i++) {
    console.log(i)
    if(currentNumber == 4){
        currentNumber = 0;
    }
    blockElements[i].classList.add('block' + currentNumber);
    currentNumber++
}