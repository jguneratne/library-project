import { formBtn, cancelForm } from "./formListeners";

import {
  validateTitle,
  validateAuthorFirst,
  validateAuthorLast,
  validatePages,
  validateOnSubmit,
} from "./formValidation";

document.addEventListener("DOMContentLoaded", () => {
  formBtn();
  cancelForm();
  validateTitle();
  validateAuthorFirst();
  validateAuthorLast();
  validatePages();
  validateOnSubmit();
});
