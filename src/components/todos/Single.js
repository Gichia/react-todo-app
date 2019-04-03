import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Spinner from '../layout/Spinner'
import axios from 'axios'

class Single extends Component {
    state = {
        todo: []
    }

    componentDidMount() {
        axios.get(`http://192.168.0.35:3000/notes/${this.props.match.params.id}`)
        .then(res => {
            this.setState({todo: res.data[0]});
        })
        .catch(err => console.log(err))
    }

  render() {
    const { todo } = this.state; 
    if (todo === undefined || todo.length === 0) {
        return <Spinner />
    } else {
        return (
            <React.Fragment>
            <div className="col-md-8">
                <Link to="/" className="btn btn-dark mb-2">
                    <i className="fas fa-chevron-left"></i> Back
                </Link>
                <div className="card">
                    <div className="card-header">
                        Note by {todo.user_name}
                    </div>
                    <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>
                            {todo.note}
                        </p>
                        <footer className="blockquote-footer">
                            Created On: 
                            <cite title="Source Title">
                                <Moment format="MM/DD/YYYY">{todo.entry_date}</Moment>
                            </cite>
                        </footer>
                    </blockquote>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
  }
}

export default Single;
