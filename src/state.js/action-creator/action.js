export const storeData = (item) => {

    return (dispatch) => {
        dispatch({
            type: "addToCart",
            payload: item
        })
    }
}

export const updateUser = () => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_USER"
        })
    }
}