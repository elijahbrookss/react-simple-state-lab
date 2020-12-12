import React, {Component} from 'react';

export default class Cell extends Component {
  constructor(props){
    super();
    this.props = props;
    this.state = {
      color: props.value
    }
  }


  render(){


    return <div onClick={()=>this.setState({color: '#333'})} style={{backgroundColor: this.state.color}}   className="cell"> </div>
  }


}
