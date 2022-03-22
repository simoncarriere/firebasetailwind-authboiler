import {useEffect, createContext, useReducer} from 'react'

export const AuthContext = createContext()



// Mirror Firebase Auth State and our global auth state context
export const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}



// Context that wraps our entire application, tracks user status and gives access to our reducer actions
export const AuthContextProvider = ({children}) => {


    const [state,dispatch] = useReducer(authReducer, {
        user:null
    })

    return ( 
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
     );
}
