/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/formListeners.js":
/*!*********************************!*\
  !*** ./src/js/formListeners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelForm: () => (/* binding */ cancelForm),
/* harmony export */   formBtn: () => (/* binding */ formBtn),
/* harmony export */   getEntry: () => (/* binding */ getEntry)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/variables.js");


function formBtn() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.bookFormBtn.addEventListener("pointerdown", (e) => {
    _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.showForm();
  });

  _variables__WEBPACK_IMPORTED_MODULE_0__.bookFormBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.showForm();
    }
  });
}

function cancelForm() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.cancelEntry.addEventListener("pointerdown", () => {
    _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.hideForm();
  });

  _variables__WEBPACK_IMPORTED_MODULE_0__.cancelEntry.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.hideForm();
    }
  });
}

function getEntry() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.getBookData();
  _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.hideForm();
  _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.replaceCards();
  _variables__WEBPACK_IMPORTED_MODULE_0__.bookEntry.createCard();
}


/***/ }),

/***/ "./src/js/formValidation.js":
/*!**********************************!*\
  !*** ./src/js/formValidation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateAuthor: () => (/* binding */ validateAuthor),
/* harmony export */   validateOnSubmit: () => (/* binding */ validateOnSubmit),
/* harmony export */   validatePages: () => (/* binding */ validatePages),
/* harmony export */   validateTitle: () => (/* binding */ validateTitle)
/* harmony export */ });
/* harmony import */ var _formListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formListeners */ "./src/js/formListeners.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/js/variables.js");



function validateTitle() {
  _variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle.addEventListener("blur", () => {
    if (_variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle.validity.valueMissing) {
      showError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle, _variables__WEBPACK_IMPORTED_MODULE_1__.titleMsg);
    } else {
      removeError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle, _variables__WEBPACK_IMPORTED_MODULE_1__.titleMsg);
    }
  });
}

function validateAuthor() {
  _variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor.addEventListener("blur", () => {
    if (_variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor.validity.valueMissing) {
      showError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor, _variables__WEBPACK_IMPORTED_MODULE_1__.authorMsg);
    } else {
      removeError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor, _variables__WEBPACK_IMPORTED_MODULE_1__.authorMsg);
    }
  });
}

function validatePages() {
  _variables__WEBPACK_IMPORTED_MODULE_1__.bookPages.addEventListener("blur", () => {
    if (_variables__WEBPACK_IMPORTED_MODULE_1__.bookPages.validity.valueMissing) {
      showError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookPages, _variables__WEBPACK_IMPORTED_MODULE_1__.pagesMsg);
    } else {
      removeError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookPages, _variables__WEBPACK_IMPORTED_MODULE_1__.pagesMsg);
    }
  });
}

function validateOnSubmit() {
  _variables__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      !_variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_1__.bookPages.validity.valid
    ) {
      showError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle, _variables__WEBPACK_IMPORTED_MODULE_1__.titleMsg);
      showError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor, _variables__WEBPACK_IMPORTED_MODULE_1__.authorMsg);
      showError(_variables__WEBPACK_IMPORTED_MODULE_1__.bookPages, _variables__WEBPACK_IMPORTED_MODULE_1__.pagesMsg);
      _variables__WEBPACK_IMPORTED_MODULE_1__.submitError.style.visibility = "visible";
      _variables__WEBPACK_IMPORTED_MODULE_1__.submitError.setAttribute("aria-live", "polite");
    } else if (
      _variables__WEBPACK_IMPORTED_MODULE_1__.bookTitle.validity.valid ||
      _variables__WEBPACK_IMPORTED_MODULE_1__.bookAuthor.validity.valid ||
      _variables__WEBPACK_IMPORTED_MODULE_1__.bookPages.validity.valid
    ) {
      _variables__WEBPACK_IMPORTED_MODULE_1__.submitError.style.visibility = "hidden";
      _variables__WEBPACK_IMPORTED_MODULE_1__.submitError.removeAttribute("aria-live", "polite");
      (0,_formListeners__WEBPACK_IMPORTED_MODULE_0__.getEntry)();
      _variables__WEBPACK_IMPORTED_MODULE_1__.bookFormBtn.focus();
    }
  });
}

function showError(inputEl, errorEl) {
  inputEl.classList.add("invalid");
  errorEl.classList.add("msg-error");
  errorEl.setAttribute("aria-live", "polite");
}

function removeError(inputEl, errorEl) {
  inputEl.classList.remove("invalid");
  errorEl.classList.remove("msg-error");
  errorEl.removeAttribute("aria-live", "polite");
}


/***/ }),

/***/ "./src/js/handleEntryData.js":
/*!***********************************!*\
  !*** ./src/js/handleEntryData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Book: () => (/* binding */ Book)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/variables.js");


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  showForm() {
    _variables__WEBPACK_IMPORTED_MODULE_0__.formDiv.style.display = "block";
  }

  hideForm() {
    _variables__WEBPACK_IMPORTED_MODULE_0__.formDiv.style.display = "none";
    document.forms[0].reset(); // Clears form for next entry
  }

  createCard() {
    for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData.length; i++) {
      const libEntry = document.querySelector(".card-div");

      const newCard = document.createElement("div");
      newCard.className = "new-card";
      newCard.id = "new-card" + "-" + i;
      newCard.setAttribute("data-card-num", i);

      const cardInfo = document.createElement("div");
      cardInfo.className = "card-info";

      const title = document.createElement("p");
      title.className = "card-heading";
      title.textContent = "Title:";

      const titleValue = document.createElement("p");
      titleValue.className = "title-value";
      titleValue.textContent = `${_variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].title}`;

      const author = document.createElement("p");
      author.className = "card-heading";
      author.textContent = "Author:";

      const authorValue = document.createElement("p");
      authorValue.className = "author-value";
      authorValue.textContent = `${_variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].author}`;

      const pages = document.createElement("p");
      pages.className = "card-heading";
      pages.textContent = "Pages:";

      const pagesValue = document.createElement("p");
      pagesValue.className = "pages-value";
      pagesValue.textContent = `${_variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].pages}`;

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
      checkboxInput.checked = _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].read;

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
          if (_variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].read === true) {
            _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].read = false;
          } else {
            _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].read === false;
            _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData[i].read = true;
          }
        }),
      );

      //Mouse events to remove books

      removeBtn.addEventListener(
        "pointerdown",
        (Book.prototype.removeArrayElement = function () {
          let arrayPosition = newCard.dataset.cardNum;

          console.log(arrayPosition);

          let removedElement = _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData.splice(arrayPosition, 1);
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

          let removedElement = _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData.splice(arrayPosition, 1);
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
      _variables__WEBPACK_IMPORTED_MODULE_0__.bookTitle.value,
      _variables__WEBPACK_IMPORTED_MODULE_0__.bookAuthor.value,
      _variables__WEBPACK_IMPORTED_MODULE_0__.bookPages.value,
      _variables__WEBPACK_IMPORTED_MODULE_0__.readValue.checked,
    );

    _variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.entryData.push(libraryEntry);
    console.log(_variables__WEBPACK_IMPORTED_MODULE_0__.myLibrary.libraryData);
  }
}


/***/ }),

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authorMsg: () => (/* binding */ authorMsg),
/* harmony export */   bookAuthor: () => (/* binding */ bookAuthor),
/* harmony export */   bookEntry: () => (/* binding */ bookEntry),
/* harmony export */   bookFormBtn: () => (/* binding */ bookFormBtn),
/* harmony export */   bookPages: () => (/* binding */ bookPages),
/* harmony export */   bookTitle: () => (/* binding */ bookTitle),
/* harmony export */   cancelEntry: () => (/* binding */ cancelEntry),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   formDiv: () => (/* binding */ formDiv),
/* harmony export */   myLibrary: () => (/* binding */ myLibrary),
/* harmony export */   pagesMsg: () => (/* binding */ pagesMsg),
/* harmony export */   readValue: () => (/* binding */ readValue),
/* harmony export */   submitError: () => (/* binding */ submitError),
/* harmony export */   titleMsg: () => (/* binding */ titleMsg)
/* harmony export */ });
/* harmony import */ var _handleEntryData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleEntryData */ "./src/js/handleEntryData.js");


const bookFormBtn = document.querySelector(".show-form-btn");
const formDiv = document.querySelector(".form-div");
const form = document.querySelector(".form");
const bookTitle = document.querySelector("#title");
const titleMsg = document.querySelector(".title-msg");
const bookAuthor = document.querySelector("#author");
const authorMsg = document.querySelector(".author-msg");
const bookPages = document.querySelector("#pages");
const pagesMsg = document.querySelector(".pages-msg");
const readValue = document.querySelector("#status");
const submitError = document.querySelector(".submit-msg");
const cancelEntry = document.querySelector(".cancel-entry");

const bookEntry = new _handleEntryData__WEBPACK_IMPORTED_MODULE_0__.Book();

let myLibrary = {
  libraryData: [], // Store book info from getBookData method

  get entryData() {
    return this.libraryData;
  },

  set entryData(newEntryData) {
    this.libraryData = newEntryData;
  },
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formListeners */ "./src/js/formListeners.js");
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formValidation */ "./src/js/formValidation.js");




document.addEventListener("DOMContentLoaded", () => {
  (0,_formListeners__WEBPACK_IMPORTED_MODULE_0__.formBtn)();
  (0,_formListeners__WEBPACK_IMPORTED_MODULE_0__.cancelForm)();
  (0,_formValidation__WEBPACK_IMPORTED_MODULE_1__.validateTitle)();
  (0,_formValidation__WEBPACK_IMPORTED_MODULE_1__.validateAuthor)();
  (0,_formValidation__WEBPACK_IMPORTED_MODULE_1__.validatePages)();
  (0,_formValidation__WEBPACK_IMPORTED_MODULE_1__.validateOnSubmit)();
});

/******/ })()
;
//# sourceMappingURL=script.2b91f0e7.js.map