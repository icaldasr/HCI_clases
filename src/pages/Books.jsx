import React, { Component} from 'react';

import data from '../data/books';
import styles from '../App.module.css';
import Book from '../Components/Book/Book';

class Books extends Component {
    render() {
        return(
            <div className='row'>
                
                {
                    this.state.books.map((book, i) => {
                        return <Book key={i} book={book}/>
                    })
                }
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {books:data};
    }
}

export default Books;