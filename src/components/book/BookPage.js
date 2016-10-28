import React from 'react'
import { connect } from 'react-redux'
import * as bookActions from '../../actions/bookActions'

class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  submitBook(input) {
    this.props.createBook(input)
  }

  render() {
    let titleInput

    return (
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={(e) => {
            e.preventDefault()
            const input = { title: titleInput.value }
            this.submitBook(input)
            e.target.reset()
          }}>
            <input type='text' name='title' ref={node => titleInput = node} />
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // makes it possible to access the books state with this.props.books
  return {
    books: state.books,
  }
}

const mapDispatchToProps = (dispatch) => {
  // returns an object for the respective dispatched actions
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
