import React, {Component}  from 'react';
import {link, Link} from 'react-router-dom';

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Página Sobre...</h2>
        <Link to="/">Ir para Home</Link>
      </div>
    )
  }
}
export default Sobre;
