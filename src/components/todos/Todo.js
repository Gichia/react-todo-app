import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const Todo = (props) => {
    const { todo } = props;
  return (
    <div className="col-md-6">

        <div className="card mb-3 shadow-sm">
            <div className="card-header bg-transparent border-success">
                <h6 className="card-title">
                    <strong><i className="fas fa-user-tag"></i> Posted By: </strong>
                    {todo.user_name}
                    <p className="card-text float-right">
                        <strong><i className="far fa-calendar-plus"></i> Posted On: </strong> 
                        <Moment format="MM/DD/YYYY">{todo.entry_date}</Moment>
                    </p>
                </h6>
                <div className="clearfix"></div>
            </div>
            <div className="card-body">
                <p className="font-weight-bolder card-text text-justify text-truncate py-2">{ todo.note }</p>
            </div>
            <div className="card-footer bg-transparent border-success">
                <Link to={`todo/${todo.id}`} className="btn btn-outline-info btn-block">
                    <i className="fas fa-chevron-right"></i> Read More
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Todo;
