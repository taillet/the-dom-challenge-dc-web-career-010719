let counter = 0;
let p = false;
let timerId = setInterval(plusOne, 1000)
let number = null;
let count;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(`+`).addEventListener('click', plusOne)
  document.getElementById(`-`).addEventListener('click', minusOne)
  document.getElementById(`<3`).addEventListener('click', like)
  document.getElementById(`pause`).addEventListener('click', pauseGame)
  document.querySelector('form').addEventListener('submit', comment)
})

function plusOne() {
  document.querySelector(`#counter`).innerHTML = ++counter;
}

function minusOne() {
  document.querySelector(`#counter`).innerHTML = --counter;
}

function pauseGame() {
  if (p == true) {
    timerId = setInterval(plusOne, 1000)
    p = false;
    document.getElementById(`pause`).innerHTML = "pause"
  } else if (p == false) {
    timerId = clearInterval(timerId)
    document.getElementById(`pause`).innerHTML = "resume"
    p = true;
  }
  document.querySelectorAll(`button:not(#pause)`).forEach((button)=>{button.disabled = p })
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
  let likedNumbers = Array.from(document.querySelectorAll("li")).map((li)=>{return li.id});
  number = document.querySelector(`#counter`).innerHTML;
  if (!likedNumbers.includes(number)) {
    addLike(number)
  } else if (likedNumbers.includes(number)) {
    document.getElementById(`${number}`).innerHTML = `${number} has been liked ${++count} times`
  }
}

function addLike(number) {
  let node = document.createElement("LI");
  node.id = number;
  count = 1;
  let textnode = document.createTextNode(`${number} has been liked ${count} time`)
  node.appendChild(textnode);
  document.querySelector(`#list`).appendChild(node);
}
