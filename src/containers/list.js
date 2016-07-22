import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './item';
import * as Actions from '../actions';

class List extends React.Component {

  render(){
   console.log("props log",this.props);
    const items = this.props.state.map((item,i) => {
      return <Item item={item} key={i} onClick={() => this.remove(i)} />
    });

    return (
         <ul className="list">{items}</ul>
    )
  }

  remove(i){
    console.log(i,this.props);
    this.props.delProject(i);
  }
}

function mapStateToProps(state) {
   console.log("state:",state.project);
    return {
      state:state.project
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
