# REACTJS

#### Instalar o ReactJS

`npm install -g create create-react-app`

#### Cria um novo projeto

`create-react-app nome do app`

#### Inicia o App

`npm start`

----

#### Reforçando componentes

Vamos lá relembrar quais são os Tipos de Componentes?
Como você viu nas aulas no ReactJS nós temos 2 principais tipos de componentes: Componentes com Estados e Componentes sem Estados
Também são conhecidos por (StateLess e StateFull);
Os dois componentes tem as mesmas características, já citadas anteriomente, com a diferença que: um componente com estados possui atributos que poderão ter o seu valor alterado, e a cada alteração, impactarão diretamente na renderização do componente.
Já, os componentes sem estados, são componentes mais simples, que quase sempre só servem para renderizar uma responsabilidade pequena de nossa página.
Outra diferença muito importante é a forma como estes componentes são escritos.
Um componente com estados quase sempre vai ser representado, de fato, por uma classe, por exemplo:


```javascript
import React, { Component } from "react";
 
class App extends Component {
  render() {
    return(
    <h1>Olá ReactJS</h1>
    );
  }
}
 
export default App;
```

Note que para este componente nós temos obrigatoriamente que utilizar o método render() pois ele será o responsável por colocar e recolocar as informações na tela.
Mas, EXATAMENTE o mesmo componente, poderia ser escrito da seguinte forma:

```javascript

import React from "react";
 
const App = () => {
  return( 
    <h1>Olá ReactJS</h1>
  );
};
 
export default App;
```

#### Ciclos de vida dos Componentes

Então como vimos na aula nos ciclos de vida do componente temos:
                
1. Item A
2. Item B
3. Item C
                
----

