// action creators related to cart state;


export const getCartData=(arr)=>{
    return {
        type: "ADD_TO_CART",
        payload:arr
    }
}
export const cartDataReq=(req)=>{
    return {
        type: "CART_DATA_REQ",
        payload:req
    }
}
