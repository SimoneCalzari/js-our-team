'use strict';

// FUNCTIONS INIZIO

// STAMPO IN CONSOLE LE PROPRIETà DEI VARI MEMBRI - MILESTONE 1
function printKeys(arrayObjects) {
  for (let i = 0; i < arrayObjects.length; i++) {
    console.log(`L'oggetto ${i+1} ha le seguenti proprietà:`);
    for (let key in arrayObjects[i]) {
      console.log(key ,arrayObjects[i][key]);
    }
    console.log(' ');
  }
}

// INSERISCO LE PROPRIETA IN DIV NEL DOM - MILESTONE 2
function printKeysOnDom(arrayObjects) {
  for (let i = 0; i < arrayObjects.length; i++) {
    for (let key in arrayObjects[i]) {
      const containerKey = genElement('div');
      containerKey.innerHTML = key + ' ' + arrayObjects[i][key];
      const main = document.querySelector('main .container');
      main.append(containerKey);
    }
  }
}

// CREO UN ELEMENTO
function genElement(typeEl) {
  const element = document.createElement(typeEl);
  return element;
}

// CREO LE VARIE CARDS DEI MEMBRI -  BONUS 1 E 2
function genCardsGid(numCards) {
  const cardContainer = document.querySelector('.cards');
  for (let i = 0; i < numCards; i++) {

    const card = genElement('div');
    card.classList.add('card');

    const cardImgCont = genElement('div');
    cardImgCont.classList.add('card-img');

    const cardTxtCont = genElement('div');
    cardTxtCont.classList.add('card-text');

    const cardImg = genElement('img');
    cardImg.src = 'img/' + team[i].imgNome;

    const cardH3 = genElement('h3');
    cardH3.innerHTML = team[i].nome;

    const cardH4 = genElement('h4');
    cardH4.innerHTML = team[i].ruolo;


    cardContainer.append(card);

    card.append(cardImgCont);
    cardImgCont.append(cardImg);

    card.append(cardTxtCont);
    cardTxtCont.append(cardH3);
    cardTxtCont.append(cardH4);
  }
}

// FUNCTIONS FINE




// LOGICA PROGRAMMA INIZIO

// CREO L'ARRAY DEI MEMBRI DEL TEAM - MILESTONE 0
const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    imgNome: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    imgNome: 'angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    imgNome: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    imgNome: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    imgNome: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    imgNome: 'barbara-ramos-graphic-designer.jpg'
  },
];

// STAMPO IN CONSOLE LE PROPRIETà DEI VARI MEMBRI - MILESTONE 1
printKeys(team);


// INSERISCO LE PROPRIETA DEI VARI MEMBRI IN SEMPLICI DIV NEL DOM - MILESTONE 2
// printKeysOnDom(team);

// GENERO LE VARIE CARDS E IL LORO CONTENUTO - BONUS 1 E 2
genCardsGid(team.length);

// LOGICA PROGRAMMA FINE