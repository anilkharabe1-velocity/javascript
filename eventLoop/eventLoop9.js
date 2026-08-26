const GOOGLE = 'https://www.google.com';
const NEWS = 'https://www.news.google.com';

/* b, c, after */
Promise.all([
  fetch(GOOGLE).then(function b() {console.log("1")}),
  fetch(GOOGLE).then(function c() {console.log("2")}),
  fetch(GOOGLE).then(function c() {console.log("3")}),
  fetch(GOOGLE).then(function c() {console.log("4")}),
  fetch(GOOGLE).then(function c() {console.log("5")}),
  fetch(GOOGLE).then(function c() {console.log("6")}),
  fetch(GOOGLE).then(function c() {console.log("7")}),
]).then(function after() {console.log("after")});