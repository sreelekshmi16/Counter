import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
 import {onDecrementCounter,onAddCounter,onSubtractCounter,onIncrementCounter,handleAddComponent, getCounterArray} from './Containers/Counter/Reducer'

import Counter from './Containers/Counter/Counter';
import './App.css';
import counterControl from './Components/CounterControl/CounterControl';

class App extends Component {
  state = {
    counterArray: []

  }

  componentDidUpdate = () => {
    console.log("jjjjjjjjjjjjjjjjjjjjj")
  }

  // handleAddComponent = () => {
  //   console.log("------------------check function")
  //   const { counterArray } = this.state
  //   // let counter = 0;
  //   const tempObj = {
  //     id: counterArray.length, value: 0
  //   }
  //   counterArray.push(tempObj)
  //   this.setState({
  //     counterArray: counterArray
  //   })
  // }

  
  // onIncrementCounter = (id) => {
  //   console.log("...........increment checker")
  //   const { counterArray } = this.state
   

  //   const tempArray = counterArray.map(item =>
  //     {
  //       if (item.id === id) return {
  //         id: id,
  //         value: item.value + 1
  //       } 
  //       else return item;
  //     });
  //     this.setState({
  //       counterArray: tempArray
  //     })
  // }

  // onDecrementCounter = (id) => {
  //   const { counterArray } = this.state
  //   const tempArray = counterArray.map(item =>
  //     {
  //       if (item.id === id) return {
  //         id: id,
  //         value: item.value - 1
  //       } 
  //       else return item;
  //     });
  //     this.setState({
  //       counterArray: tempArray
  //     })
  //   }

  
  
  // onAddCounter = (id) => {
  //   const { counterArray } = this.state
  //   const tempArray = counterArray.map(item =>
  //     {
  //       if (item.id === id) return {
  //         id: id,
  //         value: item.value + 5
  //       } 
  //       else return item;
  //     });
  //     this.setState({
  //       counterArray: tempArray
  //     })
  // }
  // onSubtractCounter = (id) => {
  //   const { counterArray } = this.state
  //   const tempArray = counterArray.map(item =>
  //     {
  //       if (item.id === id) return {
  //         id: id,
  //         value: item.value - 5
  //       } 
  //       else return item;
  //     });
  //     this.setState({
  //       counterArray: tempArray
  //     })
  // }


  renderCounter = () => {
    const { counterArray } = this.props;

    return (
      <Fragment>
        {counterArray.map((item,index) =>
          <Counter label="counter" counterValue={item.value} onIncrementCounter={() => this.props.onIncrementCounter({
            id: item.id
          })} onDecrementCounter={() => this.props.onDecrementCounter({id:item.id})} onAddCounter={() => this.props.onAddCounter({id:item.id})} onSubtractCounter={() => this.props.onSubstractCounter({id:item.id})} />
        )}
      </Fragment>
    );
  }

  render() {
    console.log("...........props",this.props)
    console.log("..............state", this.state)
    return (
      <Fragment>
        <div style={{ justifyContent: "center", alignItems: "center"}}>
          {this.renderCounter()}
          <button label="addcomponent" onClick={() => this.props.handleAddComponent()}>Add Component</button>

        </div>
      </Fragment>
    );
  }
}

const mapStateToProps=state=>{
 return{
   counterArray: getCounterArray(state)
 }
}

const mapDispatchToProps=dispatch=>{
      return{
          handleAddComponent:()=>dispatch(handleAddComponent()),
          onIncrementCounter:(params)=>dispatch(onIncrementCounter(params)),
          onDecrementCounter:(params)=>dispatch(onDecrementCounter(params)),
          onAddCounter:(params)=>dispatch(onAddCounter(params)),
          onSubstractCounter:(params)=>dispatch(onSubtractCounter(params))
      }
  }
  
  
  
  
  
 export default connect(mapStateToProps,mapDispatchToProps)(App);

// export default App;
