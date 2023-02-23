import TodoCard from '../TodoCard/TodoCard';
import classes from './list.module.css';

const List = ({  handleDone, handleDelete, filterTodo}) => {

  // const listItems = props.links.map((link) => <li key={link.id}>{link.task}</li>)
  return (
    <div>
      <div className={classes.list__list}>
        <div className={classes.list__item}>
          <ul>
            {filterTodo.map((todo) => <TodoCard
              key={todo.id}
              todo={todo}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />)}
            {/* {listItems} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default List