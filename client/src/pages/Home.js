import React, { Component } from 'react';
import Form from '../components/form';
import Results from '../components/results';
import axios from 'axios';
require('dotenv').config();





class Home extends Component {
    state = {
        query: ''
    }

    handleChange = () => {
        const searchQuery = document.getElementById('search-query').value;
        this.setState({
            query: searchQuery
        })
    }

    componentDidMount() {  
        const submitBtn = document.getElementById('submit-btn');
        
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            axios.get('https://www.googleapis.com/books/v1/volumesq=' + this.state.query + '&key=process.env.API_KEY')
            .then(response => {
                console.log(this.state)
                console.log(response.data.items)
            })
            .catch(err => {console.log(err)});
        })
    }

   render() {
       return (
           <div>
               <Form
               value={this.state.query}
               handleChange={this.handleChange}/>
               <Results />
           </div>
       )
   }
}

export default Home;