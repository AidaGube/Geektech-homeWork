import TodoCard from '../TodoCard/TodoCard';
import classes from './list.module.css';

const List = ({ 
  list,
  handleDone,
  handleDelete,
  currentEdit,
  handleChangeCarrent,
  handleEdit,
  handleCancel
}) => {
  return (
    <>
      <div className={classes.list__list}>
        <div className={classes.list__item}>
          <ul>
            {list.map(todo => <TodoCard
              key={todo.id}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
              currentEdit={todo.id === currentEdit}
              handleChangeCarrent={handleChangeCarrent}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
            />)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default List