import React, { Component} from 'react';
import styles from './book.css';

class Book extends Component {
    render() {
        return(
            <div className='col' style={styles.alignCenter}>
                <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.book.name}</h5>
                        <p className="card-text">

                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Book;