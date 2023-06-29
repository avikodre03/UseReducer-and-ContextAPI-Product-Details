export let productReducer=(state,action)=>{

switch(action.type){
    case"electronicProducts":
        state={
            ...state,
            electronicProducts:action.payload
        };
        break;
        case"jeweleryProducts":
        state={
            ...state,
            jeweleryProducts:action.payload
        };
        break;
        case"mensProducts":
        state={
            ...state,
            mensProducts:action.payload
        };
        break;
        case"womensProducts":
        state={
            ...state,
            womensProducts:action.payload
        };
        break;
    }
    
    console.log(state)
return state;
}

export default productReducer;