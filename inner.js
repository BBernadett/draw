let cards = document.querySelectorAll('flip-cards');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (100 - 0) + 0);
}


function addEvent(event) {
    let cardFront = event.target.parentNode;
    let cardParent = event.target.parentNode.parentElement;
    let cardBack = event.target.parentNode.nextElementSibling;
    let backName = event.target.previousSibling.previousSibling.textContent;
    console.log(backName);
    let func = getRandomNumber();
    cardParent.style.transform = ('rotateY(180deg');
    cardFront.style.display = ('none');
    cardBack.setAttribute(
        "style", "transform: rotateY(180deg); font-size: 2rem; font-weight: bold; margin: 5rem; font-family: verdana; color: #f5f5f5; text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4); letter-spacing: 0.15rem;");
    cardBack.innerHTML = `${backName}: <br> <br> ${func} <br> <br>  <img src="ct-log.png">`;

    const areAllDivsDisplayNone = (frontCards) => {
        let allDisplayNone = true;
        for (let i in frontCards) {
            if (frontCards[i].style.display !== 'none') {
                allDisplayNone = false;
                break;
            }
        }
        return allDisplayNone;
    };

    const els = Array.from(document.querySelectorAll('.flip-card-front'));
    const results = areAllDivsDisplayNone(els);

    if (results === true) {
        realWinner();
    }
}

buttons = document.querySelectorAll("button");
buttons = [...buttons];

for (let btn of buttons) {
    btn.addEventListener('click', addEvent);
}

function realWinner() {
    const card_1 = document.getElementById("card-1").childNodes[4].nodeValue;
    const card_2 = document.getElementById("card-2").childNodes[4].nodeValue;
    const card_3 = document.getElementById("card-3").childNodes[4].nodeValue;
    const card_4 = document.getElementById("card-4").childNodes[4].nodeValue;


    const crd_1 = document.getElementById("card-1");
    const crd_2 = document.getElementById("card-2");
    const crd_3 = document.getElementById("card-3");
    const crd_4 = document.getElementById("card-4");


    let current;

    if (card_1 > card_2 && card_1 > card_3 && card_1 > card_4) {
        setTimeout(realWinnerText, 1500);
        current = crd_1;
    } else if (card_2 > card_1 && card_2 > card_3 && card_2 > card_4) {
        setTimeout(realWinnerText, 1500);
        current = crd_2;
    } else if (card_3 > card_1 && card_3 > card_2 && card_3 > card_4) {
        setTimeout(realWinnerText, 1500);
        current = crd_3;
    } else {
        setTimeout(realWinnerText, 1500);
        current = crd_4;

    }

    function curr() {
        const cardCollection = ([crd_1, crd_2, crd_3, crd_4]);
        let collectionWithoutCurrent = cardCollection.filter(function (x) {
            return x !== current
        });
        for (let collection of collectionWithoutCurrent) {
            collection.style.opacity = ('.1');
        }
    }
    setTimeout(curr, 2000);
}

let wrapper = document.getElementById('wrapper');

function realWinnerText() {
    const real = document.createElement("p");
    const realWinner = document.createTextNode("Ne legyen kétséged, a feladat a Tiéd!");
    real.appendChild(realWinner);
    const textInDiv = document.createElement("div");
    textInDiv.appendChild(real);
    real.classList.add('realWinTxt');
    const mainDiv = document.getElementById('main');
    mainDiv.appendChild(textInDiv);
}




const addNewCard = document.getElementById('newCard');

addNewCard.addEventListener('click', newCard);

function newCard() {
    let newFlipCard = document.createElement("div");
    let newFlipFront = document.createElement("div");
    let newFlipBack = document.createElement("div");
    newFlipFront.classList.add('flip-card-front');
    newFlipBack.classList.add('flip-card-back');
    newFlipCard.classList.add('flip-cards');
    newFlipCard.appendChild(newFlipFront);
    newFlipCard.appendChild(newFlipBack);
    wrapper.appendChild(newFlipCard);
    newFlipFront.innerHTML = `
    <img src="image.png" alt="Person" class="card__image">
    <form id='save'>
    <input type='text' id='newUser' name='btnSubmit' class='btn'></input>
    <input type='submit' value='Mentés' id='btnSubmit'  class='btn'></input>
    </form>`;
    const btnSave = document.getElementById('save');
    //const newUser = document.getElementById('newUser');
    btnSubmit.setAttribute("style", "width: 8rem; margin-left: 11rem; margin-top: 0rem");


    btnSave.addEventListener('submit', function (event) {
        event.preventDefault();
        let newUserNameText = event.target.elements.btnSubmit[0].value;
        console.log(newUserNameText);
        btnSave.style.display = 'none';
        let newUserName = document.createElement("p");
        let newUserNameText2 = document.createTextNode(newUserNameText);
        newUserName.appendChild(newUserNameText2);
        newFlipFront.appendChild(newUserName);

        let newButton = document.createElement("button");
        newButton.classList.add('btn');
        newButton.innerHTML += `Sorsolj egy számot
         `;
        newFlipFront.appendChild(newButton);
        buttons.push(newButton);
        console.log(buttons);
        newButton.addEventListener('click', addEvent);
    });
}
//**********************************************************************************
let main = document.getElementById('main');


// NewPerson button 
let newPerson = document.createElement("div");

main.appendChild(newPerson);

let personInput = document.createElement("input");
//personInput.setAttributes({ 'value': 'Új kollega felvitele' });

newPerson.appendChild(personInput);

Object.assign(personInput, {
    value: 'Új kollega felvitele',
    id: 'newPerson',
    type: 'button'
}
);

// wrapper
let wrapper = document.createElement("div");
main.appendChild(wrapper);

Object.assign(wrapper, {
    className: 'wrapper',
    id: 'wrapper'
}
);

class Person {
    constructor(name) {
        this.name = name
    }
    get Username() {
        return this.name
    }

    flipCards() {
        var legyenJo = `
        <div class="flip-cards">
            <div class="flip-card-front">
                <img class="card__image" src="image.png" alt="Person">
                <p class="user">${this.name}</p>
                <button class="btn">Sorsolj egy számot</button>
            </div>
            <div class=card-back>
            <p class="user"></p>
            <p></p>
            </div>
        </div>
        `;
        return legyenJo;
    }
}

newPerson.addEventListener('click', newCard);

function newCard() {
    let newFlipCard = document.createElement("div");
    let newFlipFront = document.createElement("div");
    let newFlipBack = document.createElement("div");
    newFlipFront.classList.add('flip-card-front');
    newFlipBack.classList.add('flip-card-back');
    newFlipCard.classList.add('flip-cards');
    newFlipCard.appendChild(newFlipFront);
    newFlipCard.appendChild(newFlipBack);
    wrapper.appendChild(newFlipCard);
    newFlipFront.innerHTML = `
    <img src="image.png" alt="Person" class="card__image">
    <form id='save'>
    <input type='text' id='newUser' name='btnSubmit' class='btn'></input>
    <input type='submit' value='Mentés' id='btnSubmit'  class='btn'></input>
    </form>`;
    const btnSave = document.getElementById('save');
    //const newUser = document.getElementById('newUser');
    btnSubmit.setAttribute("style", "width: 8rem; margin-left: 9rem; margin-top: 0rem");


    btnSave.addEventListener('submit', function (event) {
        event.preventDefault();
        let newUserNameText = event.target.elements.btnSubmit[0].value;

        btnSave.style.display = 'none';
        let newUserName = document.createElement("p");
        let newUserNameText2 = document.createTextNode(newUserNameText);
        newUserName.appendChild(newUserNameText2);
        newFlipFront.appendChild(newUserName);
        people.push(new Person(newUserNameText));
        console.log(people);
        var legyenJo = '';
        showCards();

        allButtons();
    });
}


let people = [];

people.push(new Person("Feri"));
people.push(new Person("Krisztián"));
people.push(new Person("Bence"));
people.push(new Person("Dettus"));

showCards()

function getRandomNumber(min, max) {
    return Number(Math.floor(Math.random() * (max - min) + 0));
}

function addEvent(event) {
    let cardFront = event.target.parentNode; //flip-card-front
    let cardParent = event.target.parentNode.parentElement; // flip-cards
    let cardBack = event.target.parentNode.nextElementSibling;
    let backName = event.target.previousSibling.previousSibling.textContent;
    let func = getRandomNumber(0, 100)
    cardParent.style.transform = ('rotateY(180deg');
    cardFront.style.display = ('none');
    cardBack.setAttribute(
        "style", "transform: rotateY(180deg); font-size: 2rem; font-weight: bold; margin: 5rem; font-family: verdana; color: #f5f5f5; text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4); letter-spacing: 0.15rem;");
    cardBack.innerHTML = `
    <div class=card-back>
            <p class="user">${backName}:</p>
            <p class="number"> ${func}</p>
            <img src="ct-log.png">
            </div>
     `;

    const areAllDivsDisplayNone = (frontCards) => {
        let allDisplayNone = true;
        for (let i in frontCards) {
            if (frontCards[i].style.display !== 'none') {
                allDisplayNone = false;
                break;
            }
        }
        return allDisplayNone;
    };
    const els = Array.from(document.querySelectorAll('.flip-card-front'));
    const results = areAllDivsDisplayNone(els);

    if (results === true) {
        winner();
        setTimeout(realWinnerText, 500);
    }
}

allButtons();

function allButtons() {
    buttons = document.querySelectorAll("button");
    buttons = [...buttons];
    for (let btn of buttons) {
        btn.addEventListener('click', addEvent);
    }
}

function realWinnerText() {
    const real = document.createElement("p");
    const realWinner = document.createTextNode("Ne legyen kétséged, a feladat a Tiéd!");
    real.appendChild(realWinner);
    const textInDiv = document.createElement("div");
    textInDiv.appendChild(real);
    real.classList.add('realWinTxt');
    const mainDiv = document.getElementById('main');
    mainDiv.appendChild(textInDiv);
}


function winner() {
    let max = 0;
    let winnerCard = document.querySelectorAll(".number");
    let winner;
    for (let player of winnerCard) {
        if (max < player.textContent) {
            max = player.textContent;
            winner = player;
        }
    }
    function curr() {
        winnerCard = [...winnerCard];
        let collectionWithoutCurrent = winnerCard.filter(function (x) {
            return x !== winner
        });
        for (let collection of collectionWithoutCurrent) {
            console.log(collection)
            collection.parentNode.style.opacity = ('.15');
        }
    }
    setTimeout(curr, 2000);
    return winner;
}

function showCards() {
    var legyenJo = '';
    for (var personName of people) legyenJo += personName.flipCards();
    wrapper.innerHTML = legyenJo;
}








