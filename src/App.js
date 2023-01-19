import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
        }
    }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
              {
                  this.state.list.map( (el) => {
                      return <li key={el}>{el}</li>
                  })
              }
          </ul>
           <form>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
