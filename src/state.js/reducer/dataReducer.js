
let initialState = {
    cardData : []
}

const reducer = (state = [], action)=>{
    console.log('action....???',action)
    if(action.type === 'addToCart'){
      //  console.log('addToCartAbdul',action.payload,'state..',state)
        
    //    return [
    //     ...state,
    //     {cardData:action.payload}
    //    ]
    return [
        ...state,
        {cardData:{...action.payload,itemCount:1}}
    ]
    }
    else if(action.type === 'UPDATE_USER'){
        console.log('state...updateUser..',state);
        return [...state];
    }else{
        return state;
    }
}

export default reducer;

// adding the objects logic stacoverflow code..
//https://stackoverflow.com/questions/14234646/adding-elements-to-object

//or
//https://www.geeksforgeeks.org/how-to-add-an-object-to-an-array-in-javascript/


//dummy code

// if(state === 0){
        //     var arr = [];
        //     arr.push(action.payload);
        // }else{
        //     console.log('elsePart...',arr)
        //     arr.push(action.payload);
        // }

        // if(state.id !== action.payload){
        //     var arr = [];
        //     arr.push(action.payload);
        // }
// arr.push(arr?.length === 0 ? action.payload : action.payload);