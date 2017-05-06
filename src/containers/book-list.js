import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li onClick={() => this.props.selectBook(book)}
          lassName='list-group-item' key={book.title}>
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-sm-4'>
      {this.renderList()}
    </ul>
  )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// Anything returned from this function ends up as
// props on BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selection is called, the result should be passed to reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promoe BookList from component to container. Needs to know about
// this new dispatch, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
