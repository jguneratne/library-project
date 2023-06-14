let myLibrary = [
  // Store book info from getBookData method
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  showForm() {
    formDiv.style.display = "block";
  }

  hideForm() {
    formDiv.style.display = "none";
    document.forms[0].reset(); // Clears form for next entry
  }

  createCard() {
    for (let i = 0; i < myLibrary.length; i++) {
      const libEntry = document.querySelector(".bookshelf");

      const newCard = document.createElement("div");
      newCard.className = "new-card";
      newCard.id = "new-card" + "-" + i;
      newCard.setAttribute("data-card-num", i);

      const cardInfo = document.createElement("div");
      cardInfo.className = "card-info";

      const title = document.createElement("h4");
      title.className = "title";
      title.textContent = "Title:";

      const titleValue = document.createElement("p");
      titleValue.className = "title-value";
      titleValue.textContent = `${myLibrary[i].title}`;

      const author = document.createElement("h4");
      author.className = "author";
      author.textContent = "Author:";

      const authorValue = document.createElement("p");
      authorValue.className = "author-value";
      authorValue.textContent = `${myLibrary[i].author}`;

      const pages = document.createElement("h4");
      pages.className = "pages";
      pages.textContent = "Pages:";

      const pagesValue = document.createElement("p");
      pagesValue.className = "pages-value";
      pagesValue.textContent = `${myLibrary[i].pages}`;

      const status = document.createElement("h4");
      status.className = "status";
      status.textContent = "Finished:";

      const statusValue = document.createElement("INPUT");
      statusValue.setAttribute("type", "checkbox");
      statusValue.className = "statusValue";
      statusValue.name = "cardInfo";
      statusValue.id = "show-status";
      statusValue.value = "read";
      statusValue.checked = myLibrary[i].status;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.value = "remove";
      removeBtn.className = "remove";
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

      statusValue.addEventListener(
        "change",
        (Book.prototype.toggleReadStatus = function () {
          if (myLibrary[i].status === true) {
            myLibrary[i].status = false;
          } else {
            myLibrary[i].status === false;
            myLibrary[i].status = true;
          }
        })
      );

      //Mouse events to remove books

      removeBtn.addEventListener(
        "pointerdown",
        (Book.prototype.removeArrayElement = function () {
          let arrayPosition = newCard.dataset.cardNum;

          console.log(arrayPosition);

          let removedElement = myLibrary.splice(arrayPosition, 1);
          console.log(removedElement);
        })
      );

      removeBtn.addEventListener(
        "pointerdown",
        (Book.prototype.removeCard = function () {
          const parent = document.querySelector(".bookshelf");
          let deleteCard = document.querySelector("[data-card-num]");

          let removedCard = parent.removeChild(deleteCard);
          console.log(removedCard);

          Book.prototype.replaceCards();
          Book.prototype.createCard();
        })
      );

      //Keybarod events to remove books

      removeBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          arrayPosition = newCard.dataset.cardNum;

          console.log(arrayPosition);

          removedElement = myLibrary.splice(arrayPosition, 1);
          console.log(removedElement);
        }
      });

      removeBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          parent = document.querySelector(".bookshelf");
          deleteCard = document.querySelector("[data-card-num]");

          removedCard = parent.removeChild(deleteCard);
          console.log(removedCard);

          Book.prototype.replaceCards();
          Book.prototype.createCard();
        }
      });
    }
  }

  replaceCards() {
    // Replaces all cards on each new card creation to prevent duplicates
    let parent = document.querySelector(".bookshelf");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  getBookData(e) {
    e.preventDefault();

    const bookEntry = new Book(
      document.querySelector("#title").value,
      document.querySelector("#author").value,
      document.querySelector("#pages").value,
      document.querySelector("#status").checked
    );

    myLibrary.push(bookEntry);
  }
}

const bookEntry = new Book(this.title, this.author, this.pages, this.read);

// Global Variables
const bookFormBtn = document.querySelector(".show-form-btn");
const formDiv = document.querySelector(".form-div");
const form = document.querySelector(".form");
const addBook = document.querySelector(".add-book");
const newCard = document.querySelector(".new-card");

// Event Listeners
bookFormBtn.addEventListener("pointerdown", bookEntry.showForm);

form.addEventListener("submit", bookEntry.getBookData);
form.addEventListener("submit", bookEntry.hideForm);
form.addEventListener("submit", bookEntry.replaceCards);
form.addEventListener("submit", bookEntry.createCard);

bookFormBtn.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    bookEntry.showForm();
  }
});
