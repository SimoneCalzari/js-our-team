'use strict';

// MILESTONE O

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

console.log(team);
const body = document.querySelector('body');
// MILESTONE 1 e 2
for (let i = 0; i < team.length; i++) {
  const div = document.createElement('div');
  for (let key in team[i]) {
    console.log(`${key}:`,team[i][key]);
    div.textContent += `${team[i][key]}  `;
  }
  body.append(div);
}
