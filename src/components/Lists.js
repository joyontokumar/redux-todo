import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../store/todos/actions'
const Lists = (props) =>{
    return (
        <div>
            {props.todos.map((todo, i)=>(
                <div className="item" key={i} style={{backgroundColor:"orange", marginBottom:"10px", padding:"20px 30px"}}>
                    <p>{todo.message}</p>
                    <button onClick={() => props.dispatch(deleteTodo(todo.id))}>Remove Todo</button>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos.data
    }
}

export default connect(mapStateToProps, null)(Lists)
