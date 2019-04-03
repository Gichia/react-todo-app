import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        todo_list: [],
        heading: "Latest 10 Notes"
    }

    componentDidMount() {
        axios.get(`http://192.168.0.35:3000/notes`)
        .then(res => {
            this.setState({todo_list: res.data});
        })
        .catch(err => console.log(err))
    }


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;