import React, { Component } from 'react'
import { showImage } from '../actions/index'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Select a book to get started</div>
    }
      return <div className='BookDetail' onClick={() => this.props.showImage(this.props.book)}>
      <h3>Details for:</h3>
      <div>Title: {this.props.book.title}</div>
      <div>Pages: {this.props.book.pages}</div>
      <div>Description: {this.props.book.description}</div>
      { this.props.image && <img src={this.props.image} alt='book photo' /> }
    </div>
  }
}


function mapStateToProps(state) {
  return {
    book: state.activeBook.activeBook,
    image: state.activeBook.activeImage
  }
}

export default connect(mapStateToProps, { showImage }) (BookDetail)
