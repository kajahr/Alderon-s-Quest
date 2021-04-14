//Alderon's Adventure TEXT GAME PROJECT

//game variables
const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

//Defines what state the character is in, what items, health, status, etc.
let state = {}

//FUNCTIONS

//start game> defines starting state of our game
function startGame (){
    state = {}  //empty object
    showTextNode (1)
}


//diplays current option path selection
function showTextNode (textNodeIndex) {
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   textElement.innerText = textNode.text

//    while (optionButtonsElement.firstChild) {
//        optionButtnosElement.removeChild (optionButtnosElement.firstChild)
//    }
}

//a function that executes when the user selects one of the option paths
function selectOption (option) {

}

//Call the START GAME function
startGame()




//CHARACTER OPTION PATHS  
const textNodes = [
    {
      id: 1,
      text: 'You wake up in a marketplace. A beggar offers you a token.', 
    options: [
        {
        text: 'Take the token.',
        setState: {tokenGet: true},
        nextText: 2
        },
        {
        text: 'Wave the beggar away.',
        nextText: 2
        },
    ]  
    },
    {
      id: 2
    }
]
