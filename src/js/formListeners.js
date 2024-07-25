import { bookEntry, bookFormBtn, form, cancelEntry } from "./variables";

export function formBtn() {
  bookFormBtn.addEventListener("pointerdown", (e) => {
    bookEntry.showForm();
  });

  bookFormBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      bookEntry.showForm();
    }
  });
}

export function cancelForm() {
  cancelEntry.addEventListener("pointerdown", () => {
    bookEntry.hideForm();
  });

  cancelEntry.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      bookEntry.hideForm();
    }
  });
}

export function getEntry() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    bookEntry.getBookData();
    bookEntry.hideForm();
    bookEntry.replaceCards();
    bookEntry.createCard();
  });
}
