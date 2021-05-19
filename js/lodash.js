const _ = require("lodash");

const a = [{ age: 11 }, { age: 22, num: [12, 13] }, { age: 33 }];

// const maybeCopy = a;
const maybeCopy = _.cloneDeep(a);

maybeCopy[0].age = 100;

console.log(" a[0].age", a[0].age);

if (maybeCopy[1] === a[1]) {
  console.log(" lygu");
} else {
  console.log(" nelygu");
}

// padaryti deep a kintamojo kopija su _.clone

const randomNumber = _.random(10, 30);

console.log(" randomNumber", randomNumber);
