// reducer related to cart state;


export default function cartReducer(state,actions){

    switch(actions.type){
        case "GET_CART_DATA":
            return {...state,cart_data:actions.payload};

        case "CART_DATA_REQ":
            return {...state, isDataLoading:actions.payload}
        
            default :
            return state
    }
}