let counter = 0;
let p = false;
let timerId = setInterval(callback, 1000)
let number = null;
let likedNumbers = [];
let count;

document.addEventListener("DOMContentLoaded", () => {
  //add event listeners to listen on click of an email <td>
  document.getElementById(`+`).addEventListener('click', plusOne)
  document.getElementById(`-`).addEventListener('click', minusOne)
  document.getElementById(`<3`).addEventListener('click', like)
  document.getElementById(`pause`).addEventListener('click', pauseGame)
  document.querySelector('form').addEventListener('submit', comment)
})

function callback() {
  document.querySelector(`#counter`).innerHTML = ++counter;
}

function plusOne() {
  document.querySelector(`#counter`).innerHTML = ++counter;
}

function minusOne() {
  document.querySelector(`#counter`).innerHTML = --counter;
}

function pauseGame() {
  if (p == true) {
    timerId = setInterval(callback, 1000)
    document.getElementById(`pause`).innerHTML = "pause"
    document.getElementById(`+`).disabled = false;
    document.getElementById(`-`).disabled = false;
    document.getElementById(`<3`).disabled = false;
    document.getElementById(`submit`).disabled = false;
    p = false;
  } else if (p == false) {
    timerId = clearInterval(timerId)
    document.getElementById(`pause`).innerHTML = "resume"
    document.getElementById(`+`).disabled = true;
    document.getElementById(`-`).disabled = true;
    document.getElementById(`<3`).disabled = true;
    document.getElementById(`submit`).disabled = true;
    p = true;
  }
}

function comment(event) {
  event.preventDefault()
  let text = event.target.children[0].value
  addComment(text)
}

function addComment(text) {
  let paragraph = document.createElement("P");
  let t = document.createTextNode(text);
  paragraph.appendChild(t);
  document.getElementById("list").appendChild(paragraph);
}

function like() {
  number = document.querySelector(`#counter`).innerHTML;
  if (likedNumbers == []) {
    likedNumbers.push(number)
    addLike(number)
  }
  if (!likedNumbers.includes(number)) {
    addLike(number)
    likedNumbers.push(number)
  } else if (likedNumbers.includes(number)) {
    document.getElementById(`${number}`).innerHTML = `${number} has been liked ${++count} times`
  }
}

function addLike(number) {
  let node = document.createElement("LI");
  node.id = number;           // Create a <li> node
  count = 1;
  let textnode = document.createTextNode(`${number} has been liked ${count} time`)  // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.querySelector(`#list`).appendChild(node);     // Append <li> to <ul> with id="myList"
}
