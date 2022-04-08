import {useState, useEffect} from 'react';
import {useAuthContext} from './useAuthContext'

// Hook to update user account
export const useUpdate = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false) //Cleanup
    const {user} = useAuthContext()

    const updateEmail = async (email) => {
        setError(null)
        setIsPending(true)

        // Update Email
        try {
            if(email === user.email){
                setError('Password same as on file')
                setIsPending(false)
            } else {
                await user.updateEmail(email)
                // console.log('Email Successfully Updated')
                setIsPending(false)
            }
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        } catch(err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    const resetPassword = async (password) => {
    //     setError(null)
    //     setIsPending(true)

    //     // Update Email
    //     try {
    //         if(email === user.email){
    //             setError('Password same as on file')
    //         } else {
    //             await projectAuth.updateEmail(email)
    //             console.log('Email Successfully Updated')
    //         }
    //         if(!isCancelled){
    //             setIsPending(false)
    //             setError(null)
    //         }
    //     } catch(err) {
    //         if(!isCancelled){
    //             console.log(err.message)
    //             setError(err.message)
    //             setIsPending(false)
    //         }
    //     }
    }

    // Cleanup Function will only return on component unmount (Cancel pending async request)
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {updateEmail, resetPassword, error, isPending}
}