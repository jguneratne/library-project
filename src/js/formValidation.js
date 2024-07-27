import { getEntry } from "./formListeners";
import {
  bookFormBtn,
  form,
  bookTitle,
  titleMsg,
  bookAuthor,
  authorMsg,
  bookPages,
  pagesMsg,
  submitError,
} from "./variables";

export function validateTitle() {
  bookTitle.addEventListener("blur", () => {
    if (bookTitle.validity.valueMissing) {
      showError(bookTitle, titleMsg);
    } else {
      removeError(bookTitle, titleMsg);
    }
  });
}

export function validateAuthor() {
  bookAuthor.addEventListener("blur", () => {
    if (bookAuthor.validity.valueMissing) {
      showError(bookAuthor, authorMsg);
    } else {
      removeError(bookAuthor, authorMsg);
    }
  });
}

export function validatePages() {
  bookPages.addEventListener("blur", () => {
    if (bookPages.validity.valueMissing) {
      showError(bookPages, pagesMsg);
    } else {
      removeError(bookPages, pagesMsg);
    }
  });
}

export function validateOnSubmit() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      !bookTitle.validity.valid ||
      !bookAuthor.validity.valid ||
      !bookPages.validity.valid
    ) {
      showError(bookTitle, titleMsg);
      showError(bookAuthor, authorMsg);
      showError(bookPages, pagesMsg);
      submitError.style.visibility = "visible";
      submitError.setAttribute("aria-live", "polite");
    } else if (
      bookTitle.validity.valid ||
      bookAuthor.validity.valid ||
      bookPages.validity.valid
    ) {
      submitError.style.visibility = "hidden";
      submitError.removeAttribute("aria-live", "polite");
      getEntry();
      bookFormBtn.focus();
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
