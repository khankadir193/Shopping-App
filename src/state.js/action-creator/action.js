export const storeData = (item) => {

    // console.log('actionCreators...items',item)

    return (dispatch) => {
        dispatch({
            type: "addToCart",
            payload: item
        })
    }
}

export const updateUser = () => {
    // return {
    //     type: 'UPDATE_USER',
    //     payload:val
    // }
    return (dispatch) => {
        dispatch({
            type: "UPDATE_USER"
        })
    }
}