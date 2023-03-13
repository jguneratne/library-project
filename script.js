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

  const newCard = document.querySelector(".add");
}

function displayBooks() {
  // Loop through array to display each book (in a Table or in their own cards)
  for (let i = 0; i < myLibrary.length; i++) {
    // get the size of the inner array
    var innerArrayLength = myLibrary[i].length;

    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
      console.log("[" + i + "," + j + "] = " + myLibrary[i][j]);
    }
  }
}

function showForm() {
  const form = document.querySelector(".form-div");

  form.style.display = "block";
}

// function clicked() {
//   console.log("Click");
// }

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("pointerdown", showForm);

displayBooks();
