import React, { Component } from 'react'
import { Consumer } from '../../context'
import Todo from '../todos/Todo'
import Spinner from '../layout/Spinner'

class Todos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
            const { todo_list, heading } = value;

            if(todo_list === undefined || todo_list.length === 0) {
                return <Spinner/>
            } else {
                return (
                    <React.Fragment>
                        <h3 className="text-center mb-4">{heading}</h3>
                        <div className="row">
                            {todo_list.map(todo => (
                                <Todo key={todo.id} todo={todo}/>
                            ))}
                        </div>
                    </React.Fragment>
                );
            }
        }}
      </Consumer>
    )
  }
}

export default Todos;
