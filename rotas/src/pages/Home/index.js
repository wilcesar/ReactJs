import React, {Component}  from 'react';
import {link, Link} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div>
        <h2>Bem vindo a pagina home...</h2>
        <Link to="/Sobre">Ir para Sobre</Link>
      </div>
    )
  }
}
export default Home;
