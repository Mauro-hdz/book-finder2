import React, { Component } from 'react';
import Form from '../components/form';
import Results from '../components/results';
import BookCard from '../components/bookCard';
import axios from 'axios';
require('dotenv').config();





class Home extends Component {
    state = {
        query: '',
        books: []
    }

    handleChange = () => {
        const searchQuery = document.getElementById('search-query').value;
        this.setState({
            query: searchQuery,
        })
    }

    componentDidMount() {  
        const submitBtn = document.getElementById('submit-btn');
        
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.query)
            .then(response => {
                this.setState({                   
                    books: response.data.items
                })
                // const bookArray = response.data.items;
                // bookArray.forEach((book, i) => {
                //     const previewLink = book.volumeInfo.previewLink;
                // })
            })
            .catch(err => {console.log(err)});
        })
    }

   render() {
       return (
           <div className="bg-gradient-brown pt-5">
               <Form
               value={this.state.query}
               handleChange={this.handleChange}/>
               <Results>
                   {this.state.books.map(book => {
                       console.log(book)
                       return (
                       <BookCard
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        description={book.volumeInfo.description}
                        author={book.volumeInfo.authors}
                        />)
                   })}                   
               </Results>
           </div>
       )
   }
}

export default Home;