const reducer = (state = [], action)=>{

    if(action.type === 'addToCart'){
    return [
        ...state,
        {cardData:{...action.payload,itemCount:1}}
    ]
    }
    else if(action.type === 'UPDATE_USER'){
        return [...state];
    }else{
        return state;
    }
}

export default reducer;
