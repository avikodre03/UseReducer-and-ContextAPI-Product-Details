import { createContext, useReducer } from "react";
import { productReducer } from "./ProductReducer";
export let productContext=createContext();

function CustomProductProvider({children}){
    const [state, dispatch] = useReducer(productReducer,{
        electronicProducts:[],
        jeweleryProducts:[],
        mensProducts:[],
        womensProducts:[]
    } )
const updateState=(type,data)=>{
dispatch({
    type:type,
    payload:data
})
}
    return <productContext.Provider value={{state,updateState}}>
        {children}
    </productContext.Provider>
}

export default CustomProductProvider;