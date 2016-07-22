import React, { PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import * as Actions from '../actions';
export const fields = [ 'item'];

class Form extends React.Component {

  constructor(props, context) {
      super(props, context);
      console.log('context:',this.context);
  }

  handleFormSubmit = (values) => {
    console.log(values.item); // you can validate in here
    if(values.item){
        this.props.dispatch(Actions.addProject(values.item));
    }
  };

  render() {
    const { handleSubmit, fields: {item} } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <input type="text" placeholder="enter item" onBlur={this.blur} className="form-control" {...item} />
        <button type="submit" className="btn btn-success btn-add">Add Project</button>
      </form>
    )
  }
}

Form.contextTypes = {
  form: React.PropTypes.object.isRequired
}

export default reduxForm({
  form: 'projectForm',
  fields: ['item']
})(Form);
