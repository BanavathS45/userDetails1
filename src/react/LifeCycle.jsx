import React,{Component} from 'react'

class LifeCycle extends Component{
constructor(props){
    super(props)
    this.state={
        count:0
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleClicked=this.handleClicked.bind(this)
}
handleClick (){
    this.setState(preState=>({
        count: preState.count+1 
    }))
}
handleClicked (){
    this.setState(preState=>({
        count: preState.count-1 
    }))
}


render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleClicked}>Decrement</button>
      </div>
    );
  }
}

export default LifeCycle