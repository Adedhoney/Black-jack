let player = {
    name: "Adedoyin",
    chips: 200
}
let cards = []
let sum = 0
let message_el = document.getElementById("message_el")
let message = ""

let cards_el = document.getElementById("card_el")

//let sum_el = document.getElementById("sum_el")
let sum_el = document.querySelector("#sum_el")
let player_el =  document.getElementById("player_el")
player_el.textContent = `${player.name}: $${player.chips}`

let hasBlackJack = false
let isAlive = false

function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    
}

function renderGame() {
    cards_el.textContent = `Cards: ${cards.join(", ")}`
    sum_el.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Want a new card?"
    }
    else if (sum === 21) {
        message = "You have Blackjack!!"
        hasBlackJack = true
    }
    else {
        message = "You LOST"
        isAlive = false
    }

    message_el.textContent = message
}

function drawNewCard() {
    if (isAlive && !hasBlackJack) {
        message_el.textContent = "Added new card!"
        newCard = getRandomCard()
        cards.push(newCard)
        sum = sum+newCard
        renderGame()
    }
    
}
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else{
        return randomCard
    }
}
