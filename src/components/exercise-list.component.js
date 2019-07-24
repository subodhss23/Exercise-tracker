import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component{
  constructor(props){
    super(props);

    this.state = {exercise: []};

    this.deleteExercise = this.deleteExercise.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhose:5000/exercises')
      .then(response => {
        this.setState ({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteExercise(id){
    axios.delete('http://localhost:5000/exercises'+id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  
  render() {
    return (
      <div>
        <p>We are on the Exercise list component!</p>
      </div>
    )
  }
}
