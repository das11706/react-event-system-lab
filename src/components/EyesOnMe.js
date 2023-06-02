// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends React.Component {

  updateFocus = () => {
    console.log('Good!')
  }

  updateBlur = () => {
    console.group('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.updateFocus} onBlur={this.updateBlur}></button>
    )
  }
}

export default EyesOnMe;