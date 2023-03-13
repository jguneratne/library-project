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
    }
  }
  return newCardInfo;
}

function createCard() {
  const newCard = document.createElement("div");
  newCard.style.backgroundColor = "#FFFFF0";
  newCard.style.borderRadius = "1ch";
  newCard.style.width = "1fr";
  newCard.style.height = "15rem";
  newCard.style.display = "flex";
  newCard.style.flexDirection = "column";
  newCard.style.flexWrap = "wrap";

  return newCard;
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
