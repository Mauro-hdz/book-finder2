import React, { Component } from 'react';
import Form from '../components/form';
import Results from '../components/results';
import BookCard from '../components/bookCard';
import axios from 'axios';
require('dotenv').config();





class Home extends Component {
    state = {
        query: '',
        books: [],
        totalBooks: ''
        
    }

    handleChange = () => {
        const searchQuery = document.getElementById('search-query').value;
        this.setState({
            query: searchQuery,
        })
    };

    onClick = (id) => {
        const selectedBook = document.getElementById(`${id}`);
        const newBook = {
            thumbnail: selectedBook.getAttribute('thumbnail'),
            title: selectedBook.getAttribute('title'),
            subtitle: selectedBook.getAttribute('subtitle'),
            description: selectedBook.getAttribute('description'),
            author: selectedBook.getAttribute('author'),
            purchaseLink: selectedBook.getAttribute('link')
        };
        console.log(newBook)
        axios.post('/api/books/add', newBook)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    componentDidMount() {
        const submitBtn = document.getElementById('submit-btn');

        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.query)
                .then(response => {
                    if (response.data.totalItems > 0) {
                        this.setState({
                            query: '',
                            books: response.data.items,
                            totalBooks: response.data.items.length + ' Books Were Found'
                        });
                    } else {
                        this.setState({
                            totalBooks: '0 Books Were Found',
                            books: []
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        });

    }

   render() {
       return (
           <div className="bg-gradient-brown pt-5">
               <Form
               value={this.state.query}
               handleChange={this.handleChange}/>
               <Results>
            <div>{this.state.totalBooks}</div>
                   {this.state.books.map(book => { 
                       return (
                       <BookCard
    thumbnail={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : 'https://media.giphy.com/media/2Faz9FbRzmwxY0pZS/giphy.gif'}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        description={book.volumeInfo.description}
                        author={book.volumeInfo.authors.join(', ')}
                        key={book.id}
                        id={book.id}
        purchaseLink={'https://www.amazon.com/s?k='+ book.volumeInfo.title +'+by+'+ book.volumeInfo.authors + '&i=stripbooks&ref=nb_sb_noss_2'}
                        onClick={this.onClick}
                        />)
                   })}                   
               </Results>
           </div>
       )
   }
}

export default Home;