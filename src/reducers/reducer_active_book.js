export default function(state = {}, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return {...state, activeBook: action.payload }

    case 'SHOW_IMAGE':
      return { ...state, activeImage: action.payload }

    default:
      return state
  }
}
