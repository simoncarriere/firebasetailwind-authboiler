import {useState, useEffect} from 'react';
import {useAuthContext} from './useAuthContext'

// Hook to update user account
export const useUpdate = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false) //Cleanup
    const [success, setSuccess] = useState(null)
    const {user} = useAuthContext()

    const updateEmail = async (email) => {
        if(email.length > 0){
            setError(null)
            setSuccess(null)
            setIsPending(true)
    
            // Update Email
            try {
                if(user.email === email){
                    setError("Please enter a different email")
                    setIsPending(false)
                } else {
                    await user.updateEmail(email)
                    setIsPending(false)
                    setSuccess(true)
                }
                if(!isCancelled){
                    setIsPending(false)
                    setError(null)
                }
            } catch(err) {
                if(!isCancelled){
                    // console.log(err.message)
                    setError(err.message)
                    setIsPending(false)
                }
            }
        }
    }
   

    const passwordReset = async (newPassword) => {
        try {
            user.updatePassword(newPassword).then(() => {
                console.log('success password reset')
            })
        } catch(error) {
            console.log(error.message)
        }
    }
    

    // Cleanup Function will only return on component unmount (Cancel pending async request)
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {updateEmail, passwordReset, error, isPending, success}
}