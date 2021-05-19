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
