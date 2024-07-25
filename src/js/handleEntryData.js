import { myLibrary, formDiv } from "./variables";

export class Book {
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
    for (let i = 0; i < myLibrary.libraryData.length; i++) {
      const libEntry = document.querySelector(".card-div");

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
      titleValue.textContent = `${myLibrary.libraryData[i].title}`;

      const author = document.createElement("h4");
      author.className = "author";
      author.textContent = "Author:";

      const authorValue = document.createElement("p");
      authorValue.className = "author-value";
      authorValue.textContent = `${myLibrary.libraryData[i].author}`;

      const pages = document.createElement("h4");
      pages.className = "pages";
      pages.textContent = "Pages:";

      const pagesValue = document.createElement("p");
      pagesValue.className = "pages-value";
      pagesValue.textContent = `${myLibrary.libraryData[i].pages}`;

      const statusLabel = document.createElement("LABEL");
      statusLabel.setAttribute("for", "status");
      statusLabel.textContent = "Finished:";

      const checkboxInput = document.createElement("INPUT");
      checkboxInput.setAttribute("type", "checkbox");
      checkboxInput.className = "card-status";
      checkboxInput.name = "cardInfo";
      checkboxInput.id = "show-status";
      checkboxInput.value = "read";
      checkboxInput.checked = myLibrary.libraryData[i].read;

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
      cardInfo.appendChild(statusLabel);
      cardInfo.appendChild(checkboxInput);
      newCard.appendChild(removeBtn);

      checkboxInput.addEventListener(
        "change",
        (Book.prototype.toggleReadStatus = function () {
          if (myLibrary.libraryData[i].read === true) {
            myLibrary.libraryData[i].read = false;
          } else {
            myLibrary.libraryData[i].read === false;
            myLibrary.libraryData[i].read = true;
          }
        }),
      );

      //Mouse events to remove books

      removeBtn.addEventListener(
        "pointerdown",
        (Book.prototype.removeArrayElement = function () {
          let arrayPosition = newCard.dataset.cardNum;

          console.log(arrayPosition);

          let removedElement = myLibrary.libraryData.splice(arrayPosition, 1);
          console.log(removedElement);
        }),
      );

      removeBtn.addEventListener(
        "pointerdown",
        (Book.prototype.removeCard = function () {
          const parent = document.querySelector(".card-div");
          let deleteCard = document.querySelector("[data-card-num]");

          let removedCard = parent.removeChild(deleteCard);
          console.log(removedCard);

          Book.prototype.replaceCards();
          Book.prototype.createCard();
        }),
      );

      //Keybarod events to remove books

      removeBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          arrayPosition = newCard.dataset.cardNum;

          console.log(arrayPosition);

          removedElement = myLibrary.libraryData.splice(arrayPosition, 1);
          console.log(removedElement);
          console.log(myLibrary.libraryData);
        }
      });

      removeBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          parent = document.querySelector(".card-div");
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
    let parent = document.querySelector(".card-div");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  getBookData(e) {
    e.preventDefault();

    const libraryEntry = new Book(
      document.querySelector("#title").value,
      document.querySelector("#author").value,
      document.querySelector("#pages").value,
      document.querySelector("#status").checked,
    );

    myLibrary.entryData.push(libraryEntry);
    console.log(myLibrary.libraryData);
  }
}
