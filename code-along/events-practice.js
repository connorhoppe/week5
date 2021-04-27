// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory
let rollButton = document.querySelector(`#roll-button`)

// Listen for the clicking of the roll button, when clicked:
rollButton.addEventListener(`click`, async function(event) {
  // - Ignore the roll button's default behavior
  event.preventDefault()

  // - Store a random integer in memory, representing the roll of the first die
  let firstRoll = getRandomInt(6)
  console.log(firstRoll)

  // - Store a random integer in memory, representing the roll of the second die
  let secondRoll = getRandomInt(6)
  console.log(secondRoll)

  // - Store the total of the two random numbers, representing the total roll
  let totalRoll = firstRoll + secondRoll
  console.log(totalRoll)

  // - Replace the first die image using the first random value (hint: setAttribute)
  let firstDieImage = document.querySelector(`.die1`)
  firstDieImage.setAttribute(`src`,`../images/dice/${firstRoll}.png`)

  // - Replace the second die image using the second random value (hint: setAttribute)
  let secondDieImage = document.querySelector(`.die2`)
  secondDieImage.setAttribute(`src`,`../images/dice/${secondRoll}.png`)

  // - Store a reference to the player name input element
  let nameInput = document.querySelector(`#player`)

  // - Grab the value of the player name element and store the player's name in memory
  let playerName = nameInput.value

  // - Make sure the player's name is filled out; if it is:
  if (playerName.length > 0) {
    // - Form a sentence in memory, containing the player's name and the total that was rolled
    let sentence = `${playerName} rolled a total of ${totalRoll}`

    // - Store a reference to the "result" un-ordered list element
    let resultsList = document.querySelector(`.result`)

    // - Insert the sentence to the "result" un-ordered list as a list item (li)
    resultsList.insertAdjacentHTML(`beforeend`, `<li>${sentence}<li>`)

  } else alert(`Please enter name.`)
})