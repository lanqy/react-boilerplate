import React, { PropTypes } from 'react';
import * as Actions from '../actions';

export default class Projects extends React.Component {

  constructor(props, context) { // 获取上下文
      super(props, context);
      this.state = {projects: this.context.store.getState().project};
      console.log("context", this.context);
      console.log("props", this.props);
  }

  render(){

    const store = this.context.store;
    const items = this.state.projects.map((item,i) => {
      return <li key={item.id}>{item.text}<s onClick={(e)=>{this.removeProject(store,i)}}>x</s></li>
    });

    return (
      <div className="container">
        <button className="btn btn-success" onClick={(e)=>{this.addProject(store,e)}}>Add Project</button>
        <h3 className="title">Projects</h3>
        <ul className="list">{items}</ul>
      </div>
    )
  }

  addProject(store,e){
    store.dispatch(Actions.addProject("Project title"));
    this.updateState(store);
  }

  removeProject(store,index){
    store.dispatch(Actions.delProject(index));
    this.updateState(store)
  }

  updateState(store){ // update
    this.setState({
      projects:store.getState().project
    });
  }

}

Projects.contextTypes = { // context
  store: React.PropTypes.object.isRequired
};
