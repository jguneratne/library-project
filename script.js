let myLibrary = []; // Store book info from addBookToLibrary user input

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

function displayBooks() {
  // Loop through array to display each book (in a Table or in their own cards)
}

//Button - how to make form pop up on button click?

function showForm() {
  const form = document.querySelector(".form-div");

  form.style.display = "block";
}

function clicked() {
  console.log("Click");
}

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("pointerdown", showForm);
