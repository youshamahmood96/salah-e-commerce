const basket = []
const basketTotalFunc = (basket) =>{
    let total = 0;
    basket.forEach(item =>{
        let itemTotal = item.price * item.quantity
        total = total +itemTotal
    })
    return total.toFixed(2)
}
const shopReducer = ( state = basket,action ) =>{
    let total;
    switch(action.type){
        case 'ADD_TO_BASKET':
            let found = basket.find(element => element.key === action.payload.key);
            if(found){
                action.payload.quantity++
            }
            else{
                action.payload.quantity = 1
                basket.push(action.payload)
            }
            total = basketTotalFunc(basket)
          return {basket,total}
        case 'CHANGE_QUANTITY':
            basket.forEach(item=>{
                if(item.key === action.payload.key){
                    if(item.quantity>=0){
                        item.quantity = action.payload.quantity
                    }
                    else{
                        basket.splice(basket.indexOf(item),1)
                    }
                }
            })
            total = basketTotalFunc(basket)
            return {basket,total}
        default:
            return null
    }
}
export default shopReducer