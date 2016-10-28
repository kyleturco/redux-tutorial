export const createBook = (book) => {
  return {
    // identifier
    type: 'CREATE_BOOK',
    // payload
    book: book,
  }
}
