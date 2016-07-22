import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import * as Actions from '../actions';

class List extends React.Component {

  constructor(props, context) { // 获取上下文
      super(props, context);
      this.state = {projects: this.context.store.getState().project};
      console.log("context", this.context);
      console.log("props1:", this.props);
      this.props.addProject("4444444");
  }

  render(){
    this.props.addProject("6666");
    const store = this.context.store;
    const items = this.state.projects.map((item,i) => {
      return <Item item={item} key={i} onClick={() => this.remove(i)} />
    });

    return (
         <ul className="list">{items}</ul>
    )
  }

  remove(i,e){
    console.log(i);
    console.log(this.props);
    this.props.delProject(i);
    
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

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addProject: function (text) {
      return dispatch(Actions.addProject(text));
    },
    delProject: function(index){
      return dispatch(Actions.delProject(index))
    }
  };
}

List.contextTypes = { // context
  store: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
