import React, { Component } from 'react';
import Results from '../components/results';
import axios from 'axios';
import SavedBookCard from '../components/savedBookCard';
import Noty from 'noty';


class Saved extends Component {
    state = {
        savedBooks: []
    };

    onClick = (id) => {
        axios.delete('/api/books/delete/' + id, {params: {id: id}})
        .then(res => {
            const deletedBook = this.state.savedBooks.find((book) => {return book.id === id});//Finds and returns deleted book
            const index = this.state.savedBooks.indexOf(deletedBook);//selects and returns index of deleted book
            this.state.savedBooks.splice(index, 1);//removes deleted book from array
            this.setState({savedBooks: this.state.savedBooks})//Set state to our updated array
            new Noty({
                text: res.data,
                timeout: 3000,
                theme: 'sunset',
                type: 'info'
            }).show();
        })
        .catch(err => console.log('Book was not deleted', err));
    }

    componentDidMount() {
        axios.get('/api/books')
        .then(bookData => {
            this.setState({savedBooks: bookData.data.response.reverse()})
        })
        .catch(err => console.log(err));
    }



render() {
 return   (
        <div className="bg-gradient-brown pt-5 saved" >
            {/* <h3 className='text-light'>Saved Books</h3> */}
            <Results header='Saved Books'>
                {this.state.savedBooks.map(book => {
                    return (
                        <SavedBookCard
                        thumbnail={book.thumbnail}
                        title={book.title}
                        subtitle={book.subtitle}
                        description={book.summary}
                        author={book.author}
                        purchaseLink={book.purchaseLink}
                        id={book.id}
                        onClick={this.onClick}
                        key={book.id}
                        />
                    )
                })}
            </Results>
        </div>
    )
} 

};

export default Saved;
