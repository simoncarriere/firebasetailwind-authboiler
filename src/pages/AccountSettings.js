import {useState} from 'react'
import {Link} from 'react-router-dom'

// Icons
import {UploadIcon, MailIcon} from '@heroicons/react/solid'

// Hooks
import {useAuthContext} from '../hooks/useAuthContext'

// Components
import FormInput from '../components/FormInput'


export default function AccountSettings() {

    const {user} = useAuthContext()
    const [email, setEmail] = useState('')
    const [values, setValues] = useState({password:"", confirmPassword:"",})
    const [error, setError] = useState('')
    
    // Passwords
    const inputs = [
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
          name: "confirmpassword",
          type: "password",
          placeholder: "Confirm New Password",
          errormessage: "Passwords don't match!",
          label: null,
          pattern: values.password,
          autoComplete: 'off',
        },
    ]; 

    const verifyEmail = () => {
        console.log('Sent Email Verification')
        // TODO : Check if email has already been verified, set timer one request per 60seconds, receive confirmation, display success message
    }

    const updateEmail = () => {
        setError('')
        console.log('Email Successfully Updated')
        // TODO : Check if email input empty or is same as on file, Update email, manage error, display sucess message
    }

    const resetPassword = () => {
        console.log('Password Successfully Updated')
        // TODO : Check if password inputs match, update password, manage error, display success message
    }

    const updatePhoto = () => {
        console.log('Photo Successfully Updated')
        // TODO : Check if file is jpeg or gif and is bellow size restriction, update photo, manage error, display success message
    }

    const deleteUser = () => {
        console.log('User Successfully Deleted')
        // TODO : Initiate Popup, Confirmation,Delete User from firebase, redirect to home page, mamnage error, display success message
    }   

    return ( 
        <div className="py-10">
            <header>
                <h1>Account Settings</h1>
            </header>
            <main className="px-4 py-8 sm:px-0">

                {/* Email */}
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-12">
                    <label htmlFor="email" className="label">
                        Update Email
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
                            
                        <div className="flex">
                            <button className="btn-light dark:btn-dark" onClick={updateEmail}>Update</button>
                            {/* Check for verification status */}
                            <button className="btn-outline dark:btn-outline-dark ml-4 flex text-gray-600 " onClick={verifyEmail}>
                                <MailIcon className="mr-2 h-4 w-4 mt-1 " aria-hidden="true" />
                                Verify Email
                            </button>
                        </div>
                    </div>
                </div>  
                
                {/* Password Reset */}
                <div className="sm:border-t sm:border-gray-200 py-12 dark:sm:border-gray-700">
                    {inputs.map((input) => (
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
                    <p className="label">
                        Desactivate your account
                    </p>
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