import { Book } from "./handleEntryData";

export const bookFormBtn = document.querySelector(".show-form-btn");
export const formDiv = document.querySelector(".form-div");
export const form = document.querySelector(".form");
export const bookTitle = document.querySelector("#title");
export const titleMsg = document.querySelector(".title-msg");

export const bookAuthorFirst = document.querySelector("#authorFirst");
export const authorFirstMsg = document.querySelector(".author-first-msg");

export const bookAuthorLast = document.querySelector("#authorLast");
export const authorLastMsg = document.querySelector(".author-last-msg");

export const bookPages = document.querySelector("#pages");
export const pagesMsg = document.querySelector(".pages-msg");
export const readValue = document.querySelector("#status");
export const submitError = document.querySelector(".submit-msg");
export const cancelEntry = document.querySelector(".cancel-entry");

export const bookEntry = new Book();
