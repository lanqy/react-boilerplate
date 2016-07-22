import React, { PropTypes } from 'react';
import Item from './item';
import * as Actions from '../actions';

export default class List extends React.Component {

  constructor(props, context) { // 获取上下文
      super(props, context);
      this.state = {projects: this.context.store.getState().project};
      console.log("context", this.context);
      console.log("props:", this.props);
  }

  render(){
    const store = this.context.store;
    const items = this.state.projects.map((item,i) => {
      return <Item item={item} key={i} onClick={this.remove} />
    });

    return (
         <ul className="list">{items}</ul>
    )
  }

  remove(component,e){
    console.log(component);
    //console.log(store);
  //  store.dispatch(Actions.delProject(index));
  //  this.updateState(store)
  }

  updateState(store){ // update
    this.setState({
      projects:store.getState().project
    });
  }
}

List.contextTypes = { // context
  store: React.PropTypes.object.isRequired
};
