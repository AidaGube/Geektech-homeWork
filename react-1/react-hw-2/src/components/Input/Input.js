import classes from './input.module.css'

const Input = ({ placeholder, onChange, value, name }) => {

  return (
    <div>
      <input
        className={classes.input}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value} />
      <span></span>
    </div>
  )
}

export default Input