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

// Event Listeners

form.addEventListener("submit", bookEntry.getBookData);
form.addEventListener("submit", bookEntry.hideForm);
form.addEventListener("submit", bookEntry.replaceCards);
form.addEventListener("submit", bookEntry.createCard);
