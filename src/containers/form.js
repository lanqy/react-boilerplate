import React, { PropTypes } from 'react';
import {reduxForm} from 'redux-form';
export const fields = [ 'item'];

class Form extends React.Component {

  render() {

    const { handleSubmit, fields: {item} } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter item" onBlur={this.blur} className="form-control" {...item} />
        <button type="submit" className="btn btn-success btn-add">Add Project</button>
      </form>
    )
  }

  handleSubmit(e){
    console.log(e);
    return false;
  }

}

export default reduxForm({
  form: 'form1',
  fields: ['item']
})(Form);
