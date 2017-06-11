'use strict';
var isniejacyWezel = document.getElementById('parFirst').children[3];
console.log(document.getElementById('parFirst').children);
console.log(isniejacyWezel);

var newElement = document.createElement('p');
var newElementContent = document.createTextNode('To jest nowy paragraf');
newElement.appendChild(newElementContent);
console.log(newElement);
isniejacyWezel.appendChild(newElement);