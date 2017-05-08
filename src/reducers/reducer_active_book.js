// ActiveBook
export default function(state = {}, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return {...state, activeBook: action.payload, activeImage: null}

    case 'SHOW_IMAGE':
      return { ...state, activeImage: action.payload }

    default:
      return state
  }
}
