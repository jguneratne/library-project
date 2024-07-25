import { Book } from "./handleEntryData";

export const bookFormBtn = document.querySelector(".show-form-btn");
export const formDiv = document.querySelector(".form-div");
export const form = document.querySelector(".form");
export const cancelEntry = document.querySelector(".cancel-entry");

export const bookEntry = new Book();

export let myLibrary = {
  libraryData: [], // Store book info from getBookData method

  get entryData() {
    return this.libraryData;
  },

  set entryData(newEntryData) {
    this.libraryData = newEntryData;
  },
};
