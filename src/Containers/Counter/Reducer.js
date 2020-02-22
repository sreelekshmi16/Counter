
const initialState = {
    counterArray: []
}
export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";
export const ADD = "Add";
export const SUBTRACT = "subtract";
export const ADD_COMPONENT = "addcomponent";



export function handleAddComponent() {
    return {
        type: ADD_COMPONENT
    }
}

export function onIncrementCounter(params) {
    console.log("DDDDDDDDDDDDD", params.id)
    return {
        type: INCREMENT,
        params
    }
}
export function onDecrementCounter(params) {
    return {
        type: DECREMENT,
        params
    }
}
export function onAddCounter(params) {
    return {
        type: ADD,
        params
    }
}
export function onSubtractCounter(params) {
    return {
        type: SUBTRACT,
        params
    }
}


export const Reducer = (state = initialState, action) => {
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", action)


    if (action.type === ADD_COMPONENT) {
        console.log('ADD_COMPONENT')
        const newState = { ...state }

        const tempObj = {
            id: newState.counterArray.length, value: 0
        }
        const tempArray = newState.counterArray.concat(tempObj)
        console.log("state.counterArray", newState.counterArray)
        return {
            ...newState,
            counterArray: tempArray
        }

    }
    if (action.type === INCREMENT) {
        console.log("actionssssssssssssss", action)
        const { id } = action.params
        const newState = { ...state }
        const tempArray = newState.counterArray.map(item => {
            console.log("******temparray", item)
            console.log("aaaaaaaaa", action.params.id)
            if (item.id === id) {

                return {
                    id: id,
                    value: item.value + 1

                }
            }
            else return item;
        });

        return {
            ...newState,
            counterArray: tempArray
        }
    }




    if (action.type === DECREMENT) {
        console.log("actionssssssssssssss", action)
        const { id } = action.params
        const newState = { ...state }
        const tempArray = newState.counterArray.map(item => {
            console.log("******temparray", item)
            console.log("aaaaaaaaa", action.params.id)
            if (item.id === id) {

                return {
                    id: id,
                    value: item.value - 1

                }
            }
            else return item;
        });

        return {
            ...newState,
            counterArray: tempArray
        }
    }
    if (action.type === ADD) {
        console.log("actionssssssssssssss", action)
        const { id } = action.params
        const newState = { ...state }
        const tempArray = newState.counterArray.map(item => {
            console.log("******temparray", item)
            console.log("aaaaaaaaa", action.params.id)
            if (item.id === id) {

                return {
                    id: id,
                    value: item.value + 5

                }
            }
            else return item;
        });

        return {
            ...newState,
            counterArray: tempArray
        }
    }

    if (action.type === SUBTRACT) {
        console.log("actionssssssssssssss", action)
        const { id } = action.params
        const newState = { ...state }
        const tempArray = newState.counterArray.map(item => {
            console.log("******temparray", item)
            console.log("subsub", action.params.id)
            if (item.id === id) {

                return {
                    id: id,
                    value: item.value - 5

                }
            }
            else return item;
        });

        return {
            ...newState,
            counterArray: tempArray
        }
    }


    return state;
}




// selectors


export const getCounterArray = (state) => {
    return state.Reducer.counterArray
}
// const initialState = {
//     counter: 0
// }
// export const INCREMENT = "Increment";
// export const DECREMENT = "Decrement";
// export const ADD = "Add";
// export const SUBTRACT = "subtract";


// export function  onIncrementCounter (){
//     return {
//         type: INCREMENT
//     }
// }
// export function  onDecrementCounter (){
//     return {
//         type: DECREMENT
//     }
// }
// export function  onAddCounter (){
//     return {
//         type: ADD
//     }
// }
// export function  onSubtractCounter (){
//     return {
//         type: SUBTRACT
//     }
// }


// const Reducer =(state=initialState,action)=>{
//     console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", action)

//     if(action.type === INCREMENT){
//         return {
//             counter:state.counter + 1
//         }
//     }
//     if(action.type === DECREMENT){
//         return {
//             counter:state.counter -1
//         }
//     }
//     if(action.type ===ADD){
//         return {
//             counter:state.counter + 5
//         }
//     }
//     if(action.type === SUBTRACT){
//         return {
//             counter:state.counter - 5
//         }
//     }


//     return state;
// }