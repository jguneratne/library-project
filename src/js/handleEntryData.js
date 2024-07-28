import {
  formDiv,
  bookTitle,
  bookAuthorFirst,
  bookAuthorLast,
  bookPages,
  readValue,
} from "./variables";

import { myLibrary } from "./arrays";

export class Book {
  constructor(title, authorFirst, authorLast, pages, read) {
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
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

      const cardRowTitle = document.createElement("div");
      cardRowTitle.className = "card-row";

      const title = document.createElement("p");
      title.className = "card-heading";
      title.textContent = "Title:";

      const titleValue = document.createElement("p");
      titleValue.className = "title-value";
      titleValue.textContent = `${myLibrary.libraryData[i].title}`;

      const cardRowAuthorFirst = document.createElement("div");
      cardRowAuthorFirst.className = "card-row";

      const authorFirst = document.createElement("p");
      authorFirst.className = "card-heading";
      authorFirst.textContent = "Author First Name:";

      const authorFirstValue = document.createElement("p");
      authorFirstValue.className = "author-first-value";
      authorFirstValue.textContent = `${myLibrary.libraryData[i].authorFirst}`;

      const cardRowAuthorLast = document.createElement("div");
      cardRowAuthorLast.className = "card-row";

      const authorLast = document.createElement("p");
      authorLast.className = "card-heading";
      authorLast.textContent = "Author Last Name:";

      const authorLastValue = document.createElement("p");
      authorLastValue.className = "author-last-value";
      authorLastValue.textContent = `${myLibrary.libraryData[i].authorLast}`;

      const cardRowPages = document.createElement("div");
      cardRowPages.className = "card-row";

      const pages = document.createElement("p");
      pages.className = "card-heading";
      pages.textContent = "Pages:";

      const pagesValue = document.createElement("p");
      pagesValue.className = "pages-value";
      pagesValue.textContent = `${myLibrary.libraryData[i].pages}`;

      const cardRowStatus = document.createElement("div");
      cardRowStatus.className = "card-row finished-row";

      const statusLabel = document.createElement("LABEL");
      statusLabel.setAttribute("for", "status");
      statusLabel.className = "card-heading";
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

      cardInfo.appendChild(cardRowTitle);
      cardRowTitle.appendChild(title);
      cardRowTitle.appendChild(titleValue);

      cardInfo.appendChild(cardRowAuthorFirst);
      cardRowAuthorFirst.appendChild(authorFirst);
      cardRowAuthorFirst.appendChild(authorFirstValue);

      cardInfo.appendChild(cardRowAuthorLast);
      cardRowAuthorLast.appendChild(authorLast);
      cardRowAuthorLast.appendChild(authorLastValue);

      cardInfo.appendChild(cardRowPages);
      cardRowPages.appendChild(pages);
      cardRowPages.appendChild(pagesValue);

      cardInfo.appendChild(cardRowStatus);
      cardRowStatus.appendChild(statusLabel);
      cardRowStatus.appendChild(checkboxInput);

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
        if (e.key === "Enter" || e.key === " ") {
          let arrayPosition = newCard.dataset.cardNum;

          console.log(arrayPosition);

          let removedElement = myLibrary.libraryData.splice(arrayPosition, 1);
          console.log(removedElement);
        }
      });

      removeBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          const parent = document.querySelector(".card-div");
          let deleteCard = document.querySelector("[data-card-num]");

          let removedCard = parent.removeChild(deleteCard);
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

  getBookData() {
    const libraryEntry = new Book(
      bookTitle.value,
      bookAuthorFirst.value,
      bookAuthorLast.value,
      bookPages.value,
      readValue.checked,
    );

    myLibrary.entryData.push(libraryEntry);
    console.log(myLibrary.libraryData);
  }
}
