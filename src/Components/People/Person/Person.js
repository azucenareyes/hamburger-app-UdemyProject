import React from 'react'
import PropTypes from 'prop-types'
import  classes from './Person.css'

const Person = (props) => {
return (
  <div className={classes.Person}>
      <p onClick={props.click}>
        Im a Person by the name of {props.name} and I am {props.age} years old
      </p>

      <p>{props.children }</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}/>
    </div>
  )
}

export default Person
