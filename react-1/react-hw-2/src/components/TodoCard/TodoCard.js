import MiniBtns from '../MiniBtns/MiniBtns'
import classes from './todoCard.module.css'

const TodoCard = ({ todo, handleDone, handleDelete}) => {
  return (
    <div className={classes.wrapperCard}>
      <div className={todo.completed ? classes.done : classes.todoCard}>
        <h3>{todo.title}</h3>
      </div>
     <MiniBtns  onClick={handleDone} id={todo.id}>Done</MiniBtns>
     <MiniBtns onClick={handleDelete} id={todo.id}>Delete</MiniBtns>
    </div>
  )
}

export default TodoCard