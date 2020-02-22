import React, { Component } from 'react'; 
// import {connect} from 'react-redux'

import CounterControl from '../../Components/CounterControl/CounterControl';
import CounterOutput from '../../Components/CounterOutput/CounterOutput';
// import {onDecrementCounter,onAddCounter,onSubtractCounter,onIncrementCounter} from '../../store/Reducer'

export default class Counter extends Component {

    

    render () {
        console.log("this.propsssssss", this.props)
        return (
            <div>
                <CounterOutput value={this.props.counterValue} />
                <CounterControl label="Increment" clicked={()=>this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add " clicked={() => this.props.onAddCounter()} />
                <CounterControl label="Subtract " clicked={() => this.props.onSubtractCounter()}  />
            </div>
        );
    }
}

// const mapStateToProps=state=>{
// return {
//     ctr:state.counter
// }
// }


// const mapDispatchToProps=dispatch=>{
//     return{
//         onIncrementCounter:()=>dispatch(onIncrementCounter()),
//         onDecrementCounter:()=>dispatch(onDecrementCounter()),
//         onAddCounter:()=>dispatch(onAddCounter()),
//         onSubstractCounter:()=>dispatch(onSubtractCounter())
//     }
// }





// export default connect(mapStateToProps,mapDispatchToProps)(Counter);