import React, { PropTypes } from 'react';
import List from './list';
import Form from './form';

export default class Projects extends React.Component {
  render(){
    return (
      <div className="container">
        <Form />
        <h3 className="title">Projects</h3>
        <List />
      </div>
    )
  }
}
