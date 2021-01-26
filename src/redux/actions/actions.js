export const addToBasket = (content) =>{
    return{
        type:'ADD_TO_BASKET',
        payload:content
    }
}
export const changeQuantity = (content) =>{
    return{
        type:'CHANGE_QUANTITY',
        payload:content
    }
}