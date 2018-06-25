import React, { Component } from 'react';
import  classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'
import People from '../Components/People/People'


class App extends Component {
  state = {
    people: [
      { name: 'Azucena', age: 40, id: 'eiei'},
      { name: 'Jocelynn', age: 23, id: 'sdkfj'},
      { name: 'Sofia', age: 11, id: 'eije'}
    ],
    otherState: 'some other value',
    showPeople: false,

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
    const doesShow = this.state.showPeople
    this.setState({
      showPeople: !doesShow
    });
  }


  deleteMethod = (indexToDelete) => {
    const filteredArray = this.state.people.filter((person, index) =>
    index !== indexToDelete);
    this.setState({people: filteredArray})
  }

  render() {
    let people = null;


    if(this.state.showPeople){
      people =
        <People
          people={this.state.people}
          clicked={this.deleteMethod}
          changed={this.nameChangeHandler}
        />
    }

    return (
        <div className={classes.App}>
          <Cockpit
            showPeople={this.state.showPeople}
            people={this.state.people}
            clicked={this.togglePeopleHandler}
            />
          {people}
        </div>
    );
  }
}

export default App;
