// import and destructure to get React and Component from react library
import React, { Component } from "react";

// import Jumbotron component 
import Jumbotron from "../components/Jumbotron";

// import Card component 
import Card from "../components/Card";

// import Book component
import Book from "../components/Book";


// import Footer component
import Footer from "../components/Footer";

// import API to give Home access the API CRUD methods
import API from "../utils/API";

// destructure Grid component into individual components of Col, Row and Container
import { Col, Row, Container } from "../components/Grid";

// import and destructure List component from components/List
import { List } from "../components/List";

// define react class component Saved
class Saved extends Component {
  // define state variable array books
  state = {
    books: []
  };

  // life cycle method - when component mounts
  // call helper function getSavedBooks to set the books array state
  componentDidMount() {
    this.getSavedBooks();
  }

  // help function makes API function call to get saved books from
  // route /api/books - the returned result is used to set the state
  // of books array.  Error is caught if occuring and logged
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // helper function that takes book id and calls API function deleteBook
  // which calls delete route /api/books delete method
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  // render method called to return page details
  render() {
    return (
      // renders jumotron header section
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* card rednedred with saved book list */}
            <Card title="Saved Books" icon="download">
              {/* map through the state books array if there are any */}
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    // render book component for each saved book
                    // found in state books array
                    // pass state values through props
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      // use string join method to convert author array
                      // into comma delimited string
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      // button prop will receive button html with 
                      // onclick listener that runs the handleBookDelete
                      // API function for the given book - i.e. pass it the
                      // book.id argument
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export named as Saved
export default Saved;
