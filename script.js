let myLibrary = [
  // Store book info from addBookToLibrary user input
  ["The Hobbit", "JRR Tolkein", "295", "Read"],
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  // Take user input and feed it into new Book instantiation
  // Feed input into myLibrary array
}

function getCardInfo(arr) {
  let newCardInfo = "";

  // Loop through array to display each book (in a Table or in their own cards)
  for (let i = 0; i < arr.length; i++) {
    // get the size of the inner array
    var innerArrayLength = arr[i].length;

    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
      // console.log("[" + i + "," + j + "] = " + arr[i][j]);
      newCardInfo += `<p>${arr[i][j]}</p>`;

      createCard(newCardInfo);
    }
  }
  return newCardInfo;
}

function createCard(info) {
  const newCard = document.createElement("div");
  newCard.className = "new-card";

  const title = document.createTextNode(`<h6>Title:</h6> <p>${Book.title}</p>`);
  const author = document.createTextNode(
    `<h6>Author:</h6> <p>${Book.author}</p>`
  );
  const pages = document.createTextNode(`<h6>Pages:</h6> <p>${Book.pages}</p>`);
  const status = document.createTextNode(
    `<h6>Status:</h6> <p>${Book.status}</p>`
  ); // find how to create a checkbox

  newCard.appendChild(title);
  newCard.appendChild(author);
  newCard.appendChild(pages);
  newCard.appendChild(status);

  const libEntry = document.querySelector(".bookshelf");
  libEntry.appendChild(newCard);

  return newCard;
}

function appendCard(parent, child) {
  parent.appendChild(child);
}

function showForm() {
  const form = document.querySelector(".form-div");

  form.style.display = "block";
}

// Global Variables
const addBookBtn = document.querySelector(".add-book");

// Event Listeners
addBookBtn.addEventListener("pointerdown", showForm);

// Function Calls
getCardInfo(myLibrary);
