let randomNumber = Math.floor(Math.random() * 10);
let i = 0;
// Define From UI
let guessBtn = document.querySelector('#guessBtn')
let guessNumber = document.querySelector('#guessNumber')
let newGame = document.querySelector('#newGame')

// Add Event Listener
guessBtn.addEventListener('click', compare)

// function
function compare(e) {
    // clicking on button without input can
    // increse i value. Thats why you will get
    // negative value in line 22
    //i = i + 1;
    if (guessNumber.value === '') {
        alert('Input Field is Empty')
    }else {
        i = i + 1;
        let chance = document.querySelector('#chance');
        chance.innerText = 3-i;


        display.innerHTML = ''
        hints.innerText = ''
        let number = parseInt(guessNumber.value)
        let previousGuess = document.querySelector('#previousGuess')
        let span = document.createElement('span')
        span.appendChild(document.createTextNode(guessNumber.value + " "))
        previousGuess.appendChild(span)

        if (i === 3) {
            if (number === randomNumber) {
                let display = document.querySelector('#display')
                let p = document.createElement('p')
                p.style.backgroundColor = "green";
                p.style.color = 'white'
                p.appendChild(document.createTextNode("Congratulations! You got it right!"))
                display.appendChild(p)
                guessNumber.style.display = 'none'
                guessBtn.style.display = 'none'
                newGame.style.display = "block"
                newGame.addEventListener('click', startNewGame)

            } else {
                let hints = document.querySelector('#hints')
                let display = document.querySelector('#display')
                let p = document.createElement('p')
                p.style.backgroundColor = "red";
                p.style.color = 'white'
                p.appendChild(document.createTextNode("Game Over!!! You are lose."))
                display.appendChild(p)
                guessNumber.style.display = 'none'
                guessBtn.style.display = 'none'
                newGame.style.display = "block"
                newGame.addEventListener('click', startNewGame)

            }

        } else {
            if (number === randomNumber) {
                let display = document.querySelector('#display')
                let p = document.createElement('p')
                p.style.backgroundColor = "green";
                p.style.color = 'white'
                p.appendChild(document.createTextNode("Congratulations! You got it right!"))
                display.appendChild(p)
                guessNumber.style.display = 'none'
                guessBtn.style.display = 'none'
                newGame.style.display = "block"
                newGame.addEventListener('click', startNewGame)



            } else {

                let hints = document.querySelector('#hints')
                let display = document.querySelector('#display')
                let p = document.createElement('p')
                p.style.backgroundColor = "red";
                p.style.color = 'white'
                p.appendChild(document.createTextNode("Wrong!"))
                display.appendChild(p)

                if (number > randomNumber) {

                    hints.innerText = "Last guess was too high"
                } else {
                    hints.innerText = "Last guess was too low"
                }



            }
        }



        guessNumber.value = ''


    }



    e.preventDefault();
}

function startNewGame() {
    location.reload()
}