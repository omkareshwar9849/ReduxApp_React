const reducer = (state=0,action) =>{
    if(action.type === 'deposit'){
        return state+aciton.payload;
    }
    else if(action.type === 'withdraw'){
        return state-aciton.payload;
    }
    else{
        return state;
    }

}

export default reducer;