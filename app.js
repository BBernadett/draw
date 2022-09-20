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




