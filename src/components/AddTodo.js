import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/todos/actions'

const AddTodo = (props) => {
    const onsubmitHandler = (event) => {
        event.preventDefault()
        let input = event.target.username.value
        console.log(input);
        props.dispatch(addTodo(input))
        event.target.username.value = ''
    }
    return (
        <div>
            <form onSubmit={onsubmitHandler}>
                <input type="text" name="username"/>
                <button type="submit">send name</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
