import React, { Component} from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-light ${styles.bgCoral}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Books App</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/books' className="nav-link">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Perfil' className="nav-link">Perfil</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>    
        );
    }
}

export default Navbar;