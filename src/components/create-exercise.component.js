import React, { Component } from 'react';


export default class CreateExercises extends Component{
  constructor(props){
    super(props);
    this.state={
      username:  ' ',
      description: ' ',
      duration: 0,
      date: new Date(),
      users: []
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e){
    this.setState({
      usernmae: e.target.value
    })
  }

  onChangeDescription(e){
    this.setState({
      description: e.targe.value
    })
  }

  onChangeDuration(e){
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date){
    this.setState({
      date: date
    })
  }

  onSubmit(e){
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    window.location = '/';
  }

  render() {
    return (
      <div>
        <p>We are on the Create Exercise component!</p>
      </div>
    )
  }
}
