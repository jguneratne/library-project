let myLibrary = [
  // Store book info from createCard method
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const bookEntry = new Book(
  document.getElementById("title").value,
  document.getElementById("author").value,
  document.getElementById("pages").value,
  document.getElementById("status").value
);

Book.prototype.addBookToLibrary = function (e) {
  e.preventDefault(); // Stop form from submitting to server
  Book.prototype.createCard();
  document.forms[0].reset(); // clears form for next entry
};

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

Book.prototype.createCard = function () {
  const bookEntry = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("status").value
  );

  myLibrary.push(bookEntry);

  const libEntry = document.querySelector(".bookshelf");

  const newCard = document.createElement("div");
  newCard.className = "new-card";

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";

  const title = document.createElement("h4");
  title.className = "title";
  title.textContent = "Title:";

  const titleValue = document.createElement("p");
  titleValue.className = "title-value";
  titleValue.textContent = `${bookEntry.title}`;

  const author = document.createElement("h4");
  author.className = "author";
  author.textContent = "Author:";

  const authorValue = document.createElement("p");
  authorValue.className = "author-value";
  authorValue.textContent = `${bookEntry.author}`;

  const pages = document.createElement("h4");
  pages.className = "pages";
  pages.textContent = "Pages:";

  const pagesValue = document.createElement("p");
  pagesValue.className = "pages-value";
  pagesValue.textContent = `${bookEntry.pages}`;

  const status = document.createElement("h4");
  status.className = "status";
  status.textContent = "Finished:";

  const statusValue = document.createElement("INPUT");
  statusValue.setAttribute("type", "checkbox");
  statusValue.name = "cardInfo";
  statusValue.id = "satus-value";
  statusValue.className = "status-value";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.value = "remove";
  removeBtn.class = "remove";
  removeBtn.textContent = "Remove Book";

  libEntry.appendChild(newCard);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(title);
  cardInfo.appendChild(titleValue);
  cardInfo.appendChild(author);
  cardInfo.appendChild(authorValue);
  cardInfo.appendChild(pages);
  cardInfo.appendChild(pagesValue);
  cardInfo.appendChild(status);
  cardInfo.appendChild(statusValue);
  newCard.appendChild(removeBtn);
};

Book.prototype.showForm = function () {
  const form = document.querySelector(".form-div");

  form.style.display = "block";
};

// Global Variables
const bookFormBtn = document.querySelector(".show-form-btn");
const addBook = document.querySelector(".add-book");

// Event Listeners
bookFormBtn.addEventListener("pointerdown", Book.prototype.showForm);

addBook.addEventListener("pointerdown", Book.prototype.addBookToLibrary);

// Function Calls
getCardInfo(myLibrary);
