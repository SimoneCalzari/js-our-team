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
    nome: 'Wayne Barnett',
    ruolo: 'Developer',
    imgNome: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Graphic Designer',
    imgNome: 'barbara-ramos-graphic-designer.jpg'
  },
];

console.log(team);

// MILESTONE 1
for (let i = 0; i < team.length; i++) {
  for (let key in team[i]) {
    console.log(`${key}:`,team[i][key]);
  }
}
