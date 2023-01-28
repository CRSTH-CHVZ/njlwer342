import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
            str: ''
        }
    }
    changeStr = (e) => {
        const newString = e.target.value;
        this.setState( () => {
            return{ str: newString}
        })
    }
    addItem= (e) => {
        e.preventDefault();
        if( this.state.str === '') return
        const oldList = this.state.list;
        this.setState( (state) => {
            return {list: [ ...oldList, this.state.str ]}
        })
        this.setState( () => {
            return{ str: ''}
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
           <form onSubmit={  this.addItem }>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter"
                    value={ this.state.str }
                    onChange={ this.changeStr }
             />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
