import * as actions from '../constans/cartConstants'

export const addTocart =()=>{

    return function(dispatch){
        dispatch({
            action:actions.ADD_TO_CART,
            payload:1
        })
    }

}