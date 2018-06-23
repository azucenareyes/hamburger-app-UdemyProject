import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, { StyleRoot} from 'radium'

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
    const swag = {
      backgroundColor: 'green',
      font: 'bubble',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let people = null;

    if(this.state.showPersons){
      people = (
      <div>
        {this.state.people.map((person, index )=>

            <Person
                  name={person.name}
                  age={person.age}
                  id= {this.myId}
                click={()=>this.deleteMethod(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
            />
        )}
    </div>
    );

    swag.backgroundColor='red'
    swag[':hover'] = {
      backgroundColor: 'lightpink',
      color: 'black'
    }
  }

    let classes = [];
    if(this.state.people.length <=2){
      classes.push("red");
    }
    if(this.state.people.length <=1){
      classes.push("bold");
    }

    return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p className={classes.join(' ')}>Switch Name here!</p>

        <button
          style = {swag}
          onClick={this.togglePeopleHandler}>
          Toggle People
        </button>
        {people}
        </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
