let main = document.getElementById('main');


// NewPerson button 
let newPerson = document.createElement("div");
newPerson.setAttribute("style", "display: flex; justify-content: space-between; margin: 1rem 2.5rem 0 2.5rem")
main.appendChild(newPerson);

let personInput = document.createElement("input");
//personInput.setAttributes({ 'value': 'Új kollega felvitele' });

newPerson.appendChild(personInput);

Object.assign(personInput, {
    value: 'Új kollega felvitele',
    type: 'button',
    id: 'addPerson'
}
);

// onload
let windowOnload = document.createElement("p");
newPerson.appendChild(windowOnload);

Object.assign(windowOnload, {
    id: 'Button-2',
});

windowOnload.classList.add('input', 'window');
// wrapper
let wrapper = document.createElement("div");
main.appendChild(wrapper);

Object.assign(wrapper, {
    className: 'wrapper',
    id: 'wrapper'
}
);

windowOnload.addEventListener('click', function () {
    location.reload();
})

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
const addNewPerson = document.getElementById('addPerson');
addNewPerson.addEventListener('click', newCard);

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
    <input type='text'  name='btnSubmit' class='btn'></input>
    <input type='submit' value='Mentés' id='btnSubmit'  class='btn btnSubmit'></input>
    </form>`;
    const btnSave = document.getElementById('save');
    //const newUser = document.getElementById('newUser');


    btnSave.addEventListener('submit', function (event) {
        event.preventDefault();
        let newUserNameText = event.target.elements.btnSubmit[0].value;
        btnSave.style.display = 'none';
        let newUserName = document.createElement("p");
        let newUserNameText2 = document.createTextNode(newUserNameText);
        newUserName.appendChild(newUserNameText2);
        newFlipFront.appendChild(newUserName);
        people.push(new Person(newUserNameText));
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
        addNewPerson.disabled = true;
        buttonAlert()
        winner();
        setTimeout(realWinnerText, 500);
    }
}

function buttonAlert() {
    addNewPerson.addEventListener('mouseenter', function () {
        alert('Előbb fordítsd vissza a kártyákat!');
    })
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



























