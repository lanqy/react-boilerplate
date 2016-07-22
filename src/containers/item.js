import React, { PropTypes } from 'react';
export default class Item extends React.Component {

  constructor(props, context) {
      super(props, context);
    //  console.log("context", this.context);
    //  console.log("props", props);
  }

  render(){
    const store = this.context.store;
    return (
      <li key={this.props.item.id}>{this.props.item.text}<s onClick={this.props.onClick.bind(null, this)}>x</s></li>
    )
  }
}

Item.contextTypes = { // context
  store: React.PropTypes.object.isRequired
};
