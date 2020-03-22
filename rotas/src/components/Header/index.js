import React, {Component}  from 'react';
import {link, Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        <h2>Header meu projeto</h2>        
        <Link to="/">Ir para Home</Link>
        <br/>
        <Link to="/Sobre">Ir para Sobre</Link>
        <hr/>
      </div>
    )
  }
}
export default Header;
