const { add } = require("./functions");
const _ = require("lodash");

// console.log("app.js");

// console.log(add(10, 10));

const a = [{ age: 11 }, { age: 22 }, { age: 33 }];

// padaryti deep a kintamojo kopija su _.clone

const randomNumber = _.random(10, 30);

console.log(" randomNumber", randomNumber);

// pradeti organizuoti savo koda su NPM
// npm init
// npm install --save lodash

// node_modules direktorija yra visos musu projekto priklausomybes
// sitas folderis neturetu buti pridedamas i git
// .gitignore - faile nurodom failus is direktorijas kuriu nenorim prideti i git
