import * as actions from '../constans/cartConstants'


export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return 5

        case actions.REMOVE_TO_CART:
            return 1

        default:
        return state
    }


}
           