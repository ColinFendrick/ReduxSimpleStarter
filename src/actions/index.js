export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export function showImage(book) {
  return {
    type: 'SHOW_IMAGE',
    payload: book.imSrc
  }
}
