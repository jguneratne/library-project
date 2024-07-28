export let myLibrary = {
  libraryData: [], // Store book info from getBookData method

  get entryData() {
    return this.libraryData;
  },

  set entryData(newEntryData) {
    this.libraryData = newEntryData;
  },
};
