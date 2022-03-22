import {useEffect, createContext, useReducer} from 'react'
import { projectAuth } from '../firebase/config'

export const AuthContext = createContext()



// Mirror Firebase Auth State and our global auth state context
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            // Action for both Signing up and Loging in Users
            // Payload coming from our useSignup and useLogin Hook 
            return {...state, user: action.payload}
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
