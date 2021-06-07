import React, {Component } from 'react'; 
import logo from './logo.svg';
//import './App.css';
import styles from './App.module.css'

import { Switch, Route } from 'react-router-dom';
import { setTitle } from './store/actions/ui';
import TitleComponent from './Components/TitleComponent/TitleComponent';
import Navbar from './Components/Navbar/Navbar';

import About from './pages/About';
import Home from './pages/Home';

import data from './data/books'
import books from './data/books';
import Books from './pages/Books';
import Perfil from './pages/Perfil';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  render() {
    //console.log('render');
    return (
      <div id='xdc' className={styles.App}>
        <Navbar />
        <TitleComponent />
        <button 
          className='btn btn-primary'
          onClick={this.onChangeTitle}>
            Modificar Título
        </button>

        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/about' component={About} />
            <Route exact path='/Books' component={Books} />
            <Route exact path='/Perfil' component={Perfil} />

          </Switch>
        </div>
        {/*
          this.state.list.map((element, index) => {
            return <TitleComponent data={{title: 'Books App!!'}} 
            key={index}/>
          })
        }
        
        {
          this.state.flag == true ?
          <TitleComponent 
          data={{title: 'Mi App de Libros', text: 'Buenos días'}}
          sendInfo={this.infoArrived}/>
          : null
        }
        <button 
          type = 'button'
          className='btn btn-primary'
          onClick={this.changeFlag}>Cambiar Bandera</button>
        {/*<p className={styles.color_rojo}> 
          Ejemplo
        </p>
 
       <div> { this.state.name}</div> 
       <button 
          name ='1'
          onClick={this.onCambiarNombreClicked} >
          Cambiar Nombre  
        </button>
        <button
          name='2'
          onClick={this.onCambiarNombreClicked}>
          cambiar Mombre 2
        </button>*/}
      </div>
    );
  }

  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      books: data
      /*list: [1,2,3],
      name: 'Books App',
      flag: false*/
    };

    console.log(this.state);

    this.onCambiarNombreClicked = this.onCambiarNombreClicked.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.infoArrived = this.infoArrived.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
  }

  componentDidMount() {
    //console.log('constcomponentDidMountructor');
    //axios.get('http://localhost:5050/').then(response => {
    /*  const user ={
        name: 'Juliana',
        age: 40,
        email: 'juliana@gmail.com'
      };
      axios.post('http://localhost:5050/users', { user }).then(response => {
      console.log(response);
    });*/
  }

  componentDidUpdate() {
    //Para verificaciones
    console.log('componentDidUpdate');
  }

  componenWillUnmount() {
    //Para finalizar procesos(Listener,timmer)
    console.log('componenWillUnmount');
  }

  onCambiarNombreClicked(event){
    //Metodo que no pertenece al ciclo de vida del componente. Médtodo propio
    //console.log('Boton Clickeado');
    //this.setState({ name: 'Books App Cambiado'});
    //console.log(event);
    const { name } = event.target.name;
    if (name == '1')
      this.setState({ name:"Books App Changed!"});
    else if (name == '2')
      this.setState({ name: 'Books App Update'});
  }

  onChangeTitle(){
    this.props.setTitle('Este es mi nuevo titulo!');
  }

  changeFlag(){
    this.setState({ flag: !this.state.flag})
  }

  infoArrived(info) {
    console.log(info);
    console.log('información recibida en el padre');
  }
}

const mapActionsToProps = {
  setTitle
};

export default connect(null,mapActionsToProps)(App);
