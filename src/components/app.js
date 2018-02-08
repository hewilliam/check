import React, { Component } from 'react';
import Check from './check';
import Form from './form';

export default class App extends Component {
    submit = values => {
        console.log(values)
    }

  render() {
    return (
      <div>
          <div>checkbook.io</div>
        <Check/>
        <Form onSubmit={this.submit}/>
      </div>
    );
  }
}
