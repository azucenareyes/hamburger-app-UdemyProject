import React, { Component } from 'react';
import  classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Azucena', age: 40, id: 'eiei'},
      { name: 'Jocelynn', age: 23, id: 'sdkfj'},
      { name: 'Sofia', age: 11, id: 'eije'}
    ],
    otherState: 'some other value',
    showPersons: false,

  }


  nameChangeHandler = (event, id) => {
      const index = this.state.people.findIndex(p =>{
        return p.id === id;
      })

     const  updatedName = {
        ...this.state.people[index]
      }

      updatedName.name = event.target.value

      const freshListofPeople = [...this.state.people]
      freshListofPeople[index] = updatedName

    this.setState({people: freshListofPeople})
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    });
  }


  deleteMethod = (indexToDelete) => {
    const filteredArray = this.state.people.filter((person, index) =>
    index !== indexToDelete);
    this.setState({people: filteredArray})
  }

  render() {
    let people = null;
    let btnClass = '';

    if(this.state.showPersons){
      people = (
        <div>
          {this.state.people.map((person, index )=>
            <Person
              name={person.name}
              age={person.age}
              id= {index}
              click={()=>this.deleteMethod(index)}
              changed={(event) => this.nameChangeHandler(event, index)}
            />
          )}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.people.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.people.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>Switch Name here!</p>

        <button
          className={btnClass}
          onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {people}
        </div>
    );
  }
}

export default App;
