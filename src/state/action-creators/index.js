export const depositMoney = ()=>{
    return(dispatch)=>{
        dispatch({
            type:'deposit',
            payload : amount
        })
    }
}

export const withdrawMoney = () =>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload : amount
        })
    }
}