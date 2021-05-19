const { add } = require("./functions");
const _ = require("lodash");

// console.log("app.js");

console.log(add(100, 50));

// pradeti organizuoti savo koda su NPM
// npm init
// npm install --save lodash

// https://www.npmjs.com/

// node_modules direktorija yra visos musu projekto priklausomybes
// sitas folderis neturetu buti pridedamas i git
// .gitignore - faile nurodom failus is direktorijas kuriu nenorim prideti i git

// idiegiti nodemon kaip dev dependancy - funkciionalumas naudojamas tik
// aplikacijos kurimo metu
// instaliuojam su --save-dev velevele
// npm install nodemon --save-dev

// sustabdyti procesa vykstanti consolje naudojam ctrl + c

// instaliujam paketus globaliai - tai reiskia veiks visur
//npm install -g nodemon

// gauti is vartojo sakini su prompt it paversti ji visai case'ais ir atspausdinti
// konsoleje

// istrinti paketa is projekto
// npm uninistall gulp
// npm remove gulp
// npm rm gulp
// npm un gulp

// instaliuoti specifine versija, verisja nurodom po @ simboliu
// npm install bootrap@4.0.0

// antaujinti kazkuri paketa
// npm update bootstrap

/**
 * "scripts": {
    "start": "node app.js",
    "pr": "node js/prompt.js",
    "dev": "nodemon app.js"
  },
  skriptuose aprasyti key yra paleidiziami su 
  npm run <key> ir vygdoma <value> kodo dalis
  arba npm start - vienintelis leidziamas be 'run'
  
 */

// 1. susikurti nauja projekta su npm

//2. isidiegti date-fns paketa ir pabandyti gauti vakar dienos dabarties laika

// 2.1 gauti kelintadienis buvo pries 8nias dienas

// 2.2 gauti jei imanoma zmogisku laiku praeities laika minutemis
// pvz 5 min ago, 2 hours ago ir pan

// 3 nusiusti koda i gihub

// 4 istrinti is savo kompiuterio ir parsisiusti su git clone

// 5 prideti skripta kuris paleisiu pagrindini faila su npm start
