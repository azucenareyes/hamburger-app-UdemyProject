import React from 'react'
import PropTypes from 'prop-types'
import  './Person.css'
import Radium from 'radium'

const Person = (props) => {
      const style = {
        '@media (min-width: 75px)' : {
              width: '300px'
        }
      }

  return (

    <div className="Person" style={style}>
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

export default Radium(Person)
