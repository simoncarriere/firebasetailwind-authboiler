import {useState} from 'react'
import {Link} from 'react-router-dom'

// Icons
import {CheckIcon, MailIcon} from '@heroicons/react/solid'

// Hooks
import {useAuthContext} from '../hooks/useAuthContext'
import {useUpdate} from '../hooks/useUpdate'

// Components
import FormInput from '../components/FormInput'

export default function AccountSettings() {

    const {user} = useAuthContext()
    const {updateEmail, passwordReset, error, isPending, success} = useUpdate()
    const [email, setEmail] = useState('')
    const [values, setValues] = useState({password:"", confirmPassword:"",})

    // Passwords
    const PasswordInputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "New Password",
          errormessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Reset Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          autoComplete: 'off',
        },
        {
          id: 2,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm New Password",
          errormessage: "Passwords don't match!",
          label: null,
          pattern: values.password,
          autoComplete: 'off',
        },
    ]; 

    // DONE
    const verifyEmail = (e) => {
        // TODO : Check if email has already been verified, set timer one request per 60seconds, receive confirmation, display success message
        e.preventDefault()
        user.sendEmailVerification().then(() => 
            console.log('Sent Email Verification')
        )
    }
    // DONE
    const updateUserEmail = (e) => {
        e.preventDefault();
        updateEmail(email)
    }
   
    // TODO : Error and scuess messages 
    const resetPassword = (e) => {
        e.preventDefault()
        if (values.password === values.confirmPassword){
            passwordReset(values.password)
        }
    }

    const updatePhoto = () => {
        console.log('Photo Successfully Updated')
        // TODO : Check if file is jpeg or gif and is bellow size restriction, update photo, manage error, display success message
    }

    // TODO : Initiate Popup, Confirmation,Delete User from firebase, redirect to home page, mamnage error, display success message
    const deleteUser = () => {
        user.delete().then(() => {
            console.log('User successfully deleted')
          }).catch((error) => {
            console.log(error.message)
          });
    }   

    return ( 
        <div className="py-10">
            <header>
                <h1>Account Settings</h1>
            </header>
            <main className="px-4 py-8 sm:px-0">

                {/* Email */}
                <div> 
                    <form autoComplete="off" className="sm:grid sm:grid-cols-3 sm:gap-4 py-12">
                        <label htmlFor="email" className="label">
                            {user.email ? 'Update Email' : 'Add Email to account'}
                        </label>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="input-field dark:input-field-dark"
                                placeholder={user.email ? user.email : 'Your email...'}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                errormessage="It should be a valid email address!"
                                required
                                autoComplete="off"
                            />
                            <p className="block mb-6 mt-3 text-sm text-red-600 dark:text-red-500">
                                {error}
                            </p>
                            {success && <p className="block mb-6 mt-3 text-sm text-green-600 dark:text-green-500">
                                Successfully Updated
                            </p>}
                            <div className="flex">

                                {/* Email Update */}
                                {isPending ? (
                                    <button disabled type="button" className="btn-light dark:btn-dark">
                                        <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                        </svg>
                                        Loading...
                                    </button>
                                ) : (
                                    <button className="btn-light dark:btn-dark" onClick={updateUserEmail}>
                                        {user.email ? 'Update' : 'Save Email'}
                                    </button>
                                )}
                                {/* Email Verification */}
                                {user.email && (
                                    user.emailVerified ? (
                                        <span className="btn-green dark:btn-green-dark flex ml-4" disabled>
                                            <CheckIcon className="mr-2 h-4 w-4 mt-1" aria-hidden="true" />
                                            Verified
                                        </span>
                                    ) : (
                                        <button className="btn-outline dark:btn-outline-dark ml-4 flex text-gray-600 " onClick={verifyEmail}>
                                            <MailIcon className="mr-2 h-4 w-4 mt-1 " aria-hidden="true" />
                                            Verify Email
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </form>
                </div>  
                
                {/* Password Reset */}
                <div className="sm:border-t sm:border-gray-200 py-12 dark:sm:border-gray-700">
                    {PasswordInputs.map((input) => (
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4" key={input.id}>
                            <label className="label">{input.label}</label>
                            <FormInput
                                {...input}
                                value={values[input.name]}
                                onChange={(e) => setValues({...values, [e.target.name]: e.target.value })}
                            />
                        </div>
                    ))} 
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                        <button className="btn-light sm:col-start-2 w-48 dark:btn-dark" onClick={resetPassword}>Reset Password</button> 
                    </div>
                </div>

                {/* Profile Photo */}
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 py-12 dark:sm:border-gray-700">
                    <label htmlFor="photo" className="label">
                    {user.photoURL ? 'Change' : 'Upload'} Profile Photo
                    </label>
                    <div className="sm:col-span-2">
                        <div className="flex items-center">
                            {user.photoURL ? (
                                <img
                                    className="inline-block h-16 w-16 rounded-full"
                                    src={user.photoURL}
                                    alt="profile"
                                />
                            ) : (
                                <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                            )}
                            <form>
                                <label className="block">
                                    {/* Add Submit button, if file change button to submit */}
                                    <span className="sr-only">
                                        Choose profile photo
                                    </span>
                                    <input type="file" className="ml-4 block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                                    file:bg-slate-100 file:text-slate-600 hover:file:bg-slate-200 file:cursor-pointer" onClick={updatePhoto}/>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Delete Account */}
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 py-12 dark:sm:border-gray-700">
                    <label>
                        Desactivate your account
                    </label>
                    <div className="sm:col-span-2">
                        <span className="text-red-700 cursor-pointer hover:text-red-800 dark:text-red-500" onClick={deleteUser}>Desactivate</span>
                    </div>
                </div>

                {/* Buttons */}                   
                <div className="flex mt-8">
                    <Link to="/" className="btn-dark dark:btn-light ">Cancel</Link>
                </div>

            </main>
        </div>
    )
}