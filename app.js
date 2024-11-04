var count = 0;

let myDocument = document.querySelector("#counter");

function inc() {
  count++;
  myDocument.innerText = count;

  if (count > 0) {
    myDocument.style.color = "#145a32";
  }
}

function dec() {
  if (count > 0) {
    count--;
    myDocument.innerText = count;
    myDocument.style.color = "#e74c3c";
  }
}

function reset() {
  count = 0;
  myDocument.innerText = count;

  if (count == 0) {
    myDocument.style.color = "#333";
  }
}
