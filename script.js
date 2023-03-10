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

Book.prototype.createCard = function () {
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
  titleValue.textContent = `${Book.title}`;

  const author = document.createElement("h4");
  author.className = "author";
  author.textContent = "Author:";

  const authorValue = document.createElement("p");
  authorValue.className = "author-value";
  authorValue.textContent = `${Book.author}`;

  const pages = document.createElement("h4");
  pages.className = "pages";
  pages.textContent = "Pages:";

  const pagesValue = document.createElement("p");
  pagesValue.className = "pages-value";
  pagesValue.textContent = `${Book.pages}`;

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
const addBookBtn = document.querySelector(".add-book");

// Event Listeners
addBookBtn.addEventListener("pointerdown", Book.prototype.showForm);

// Function Calls
getCardInfo(myLibrary);
