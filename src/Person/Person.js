import React from 'react'
import PropTypes from 'prop-types'
import  classes from './Person.css'

const Person = (props) => {
  const rnd = Math.random();


  return (

    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm a Person by the name of {props.name} and I am {props.age} years old
      </p>

      <p>{props.children }</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}/>
    </div>
  )
}
Person.propTypes = {


}

export default Person
