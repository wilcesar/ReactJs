import React, {Component} from 'react';
import Membro from './components/feed';
import Feed from './components/feed';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        feed:[
            {id:1, username:'mateus', curtidas:10, comentarios:12},
            {id:2, username:'lucas', curtidas:8, comentarios:15},
            {id:3, username:'amanda', curtidas:30, comentarios:7},
            {id:3, username:'ricardo', curtidas:1, comentarios:0}
        ]
    };
  }
  render(){
    return(
      <div>
        {this.state.feed.map((item)=>{
          return(
            <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          );
        })}
      </div>
    )
  }
}

export default App;
