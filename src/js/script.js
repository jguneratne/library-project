import { formBtn, cancelForm } from "./formListeners";

import {
  validateTitle,
  validateAuthor,
  validatePages,
  validateOnSubmit,
} from "./formValidation";

document.addEventListener("DOMContentLoaded", () => {
  formBtn();
  cancelForm();
  validateTitle();
  validateAuthor();
  validatePages();
  validateOnSubmit();
});
