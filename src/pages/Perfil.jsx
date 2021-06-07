import React, { Component} from 'react';
import userImg from '../img/user.png'; //Import User Icon
import styles from '../App.module.css';
//import styles from './App.module.css'
import { Glyphicon } from 'react-bootstrap';

class Perfil extends Component {
    render() {
        return(
            <>
            <div className="text-center">

                <p style ={{ fontWeight:'bold',fontFamily:'serif',fontSize:20}}>Mi Cuenta</p>

                <img src={userImg} className="rounded" alt="Usuario" width="100" height="100"/>
                <p>Pepito Pérez</p>
            </div>


            <div className="btn-group-vertical">


                    <div class="col-sm-8">
                    <button type="button" variant="primary" className="btn btn-secondary btn-lg">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Editar mi cuenta
                    </button>
                    <div className="pull-left">
                    <h4 class="d-inline-block">Edit Post</h4>
                    </div>
                    </div>

                
                <button type="button" variant="primary" className="btn btn-secondary btn-lg">
                <span className="glyphicon glyphicon-book" aria-hidden="true"></span> Mi biblioteca
                </button>

                <button type="button" variant="primary" className="btn btn-secondary btn-lg">
                <span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span> Ajustes de pago
                </button>
                <button type="button" variant="primary" className="btn btn-secondary btn-lg">
                <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Ayuda
                </button>

 </div>

 <div class="container py-2">
    <div class="row">
        <div class="col-sm-8">
        <button type="button" variant="primary" className="btn btn-secondary btn-lg">
                <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Ayuda
                </button>
            <h4 class="d-inline-block align-middle">Edit Post</h4>
            
        </div>
    </div>
</div>

            </>
        );
    }
}

export default Perfil;