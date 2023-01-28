import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
        }
    }

    addItem= (e) => {
        const newItem = e.target.value;
        const oldList = this.state.list
        this.setState( (state) => {
            return {list: [...oldList, newItem]}
        })
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
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter"
             onChange={ this.addItem }
             />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
