// import and destructure to get React and Component from react library
import React, { Component } from "react";

// import Jumbotron component so it can be rendered on the Home component
import Jumbotron from "../components/Jumbotron";

// import Card component so it can be rendered on the Home component
import Card from "../components/Card";

// import Form component so it can be rendered on the Home component
import Form from "../components/Form";

// import Book component so it can be rendered on the Home component
import Book from "../components/Book";

// import Footer component so it can be rendered on the Home component
import Footer from "../components/Footer";

// import API to give Home access the API CRUD methods
import API from "../utils/API";

// destructure Grid component into individual components of Col, Row and Container
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// declare class component named Home - extending React Component class
// i.e. Home has state object, lifecycle, render and all Component class methods
class Home extends Component {
  // declare the state variables to be used by Home:  books array, q string (probably the query string)
  // and message (to used in the UI)
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // declare event listner for input changes - to be used on forms
  // event is input parameter 
  handleInputChange = event => {
    // destructure the event.target object into its namd and value properties
    const { name, value } = event.target;
    // set the state to value for whatever name object this event fired for 
    // [name] is an example of using a dynamically set key 
    this.setState({
      [name]: value
    });
  };

  //declare function getBooks 
  // call API getbooks method using the state's q (query string)
  getBooks = () => {
    API.getBooks(this.state.q)
    // promise - take the API response and set state for books to the data object of the res (response)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // error catch - set state of books to empty array and set state for message to an appropriate message
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  //  event listener for the form submit 
  // parameter is event
  handleFormSubmit = event => {
    // prevent the default behavior from being processed (i.e. ignore submit of empty form)
    event.preventDefault();
    // call the getBooks method
    this.getBooks();
  };

  // function for book save action - parameter is id
  handleBookSave = id => {
    // capture book object from state books by using find method 
    // to search for the book in books that has the matching id
    const book = this.state.books.find(book => book.id === id);

    // call save book API method and pass it the book's properties
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    // after promise is returned call the getBooks method 
    // to refresh the book list  
    }).then(() => this.getBooks());
  };

  // render the home page 
  render() {
    return (
      // it will render with muliple nested components:  Container, Row, Col, Jumbotron, Card, Form 
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
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              {/* pass the Form component the props:  functions for Input Change, Form Submit and also the q (query string) */}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* pass the Card component its props
                if stae has no books in the book array then render the state message
                probably containing verbage about no books       */}
              {this.state.books.length ? (
                // render the list component
                <List>
                  {/* iterate over the state books array and render a book for each */}
                  {this.state.books.map(book => (
                    <Book
                    // pass in props to the Book component
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      // use join string method to cover the array of authors
                      // into a comma seperated string for rendering
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      // button prop will receive button html with 
                      // onclick listener that runs the handleBookSave 
                      // API function for the given book - i.e. pass it the
                      // book.id argument
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export named as Home
export default Home;
