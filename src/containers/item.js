import React from 'react';
export default class Item extends React.Component {

  render(){
    console.log("item props:",this.props)
    return (
      <li key={this.props.item.id}>{this.props.item.text}<s onClick={this.props.onClick.bind(null, this)}>x</s></li>
    )
  }
}
