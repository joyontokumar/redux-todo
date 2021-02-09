import { combineReducers } from 'redux'
import todos from '../store/todos/todoReducer'
const rootReducer = combineReducers({
    todos
})
export default rootReducer
