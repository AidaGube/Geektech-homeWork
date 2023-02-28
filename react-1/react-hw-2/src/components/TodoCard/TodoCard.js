import classes from './todoCard.module.css'
import MiniBtns from '../MiniBtns/MiniBtns'
import editIcon from '../../assets/edit.svg'
import Input from '../Input/Input'
import { useState } from 'react';

const TodoCard = ({
  handleEdit,
  todo,
  handleDone,
  handleDelete,
  currentEdit,
  handleChangeCarrent,
  handleCancel,
}) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleSetTitle = (event) => {
    setNewTitle(event.target.value)
  }
  if (currentEdit) {
    return (
      <div className={classes.wrapperEdit}>
        <Input
          value={newTitle}
          name={'new title'}
          placeholder={'New task'}
          onChange={handleSetTitle}
        />
        <button
          className={classes.editSave}
          onClick={() => handleEdit({
            id: todo.id,
            title: newTitle,
            completed: todo.completed
          })} >Save</button>

        <button className={classes.cancel}
          onClick={() => handleCancel({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
          })}
        >
          Cancel
        </button>
      </div>
    )
  } return (
    <div className={classes.wrapperCard}>
      <div className={todo.completed ? classes['todoCard'] + " " + classes.done : classes.todoCard}>
        <h3>{todo.title}</h3>
        <div className={classes.actionButtons}>
          <MiniBtns type={'edit'} handleClick={handleChangeCarrent} todo={todo}>Edit
            <img src={editIcon} alt='edit' className={classes.editIcon} />
          </MiniBtns>
          <MiniBtns handleClick={handleDone} todo={todo}>Done</MiniBtns>
          <MiniBtns type={'delete'} handleClick={handleDelete} todo={todo}>Delete</MiniBtns>
        </div>
      </div>
    </div>
  )
}
export default TodoCard