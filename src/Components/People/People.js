import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person/Person'

const People = (props) => props.people.map((person, index ) =>
   <Person
          click={()=>props.clicked(index) }
          name={person.name}
          age={person.age}
          key= {person.id}
          changed={(event) => props.changed(event, index)}
        />
)


export default People
