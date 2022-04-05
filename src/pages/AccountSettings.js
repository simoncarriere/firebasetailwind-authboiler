import {useState} from 'react'
import {Link} from 'react-router-dom'

// Icons
import { UploadIcon, MailIcon } from '@heroicons/react/solid'

// Hooks
import {useAuthContext} from '../hooks/useAuthContext'

// Components
import FormInput from '../components/FormInput'


export default function AccountSettings() {

    const {user} = useAuthContext()
    const [email, setEmail] = useState('')
    const [values, setValues] = useState({password:"", confirmPassword:"",})
    

    const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Password",
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
          placeholder: "Confirm Password",
          errormessage: "Passwords don't match!",
          label: "Reset Confirm Password",
          pattern: values.password,
          autoComplete: 'off',
        },
    ]; 

    return ( 
        <div className="py-10">
            <header>
                <h1 className="text-3xl font-bold leading-tight text-gray-900">Account Settings</h1>
            </header>
            <main className="px-4 py-8 sm:px-0">

                {/* Email */}
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-12">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Update Email
                    </label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input-field"
                            placeholder={user.email ? user.email : 'Your email...'}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            errormessage="It should be a valid email address!"
                            required
                            autoComplete="off"
                        />
                            
                        <div className="flex">
                            <button className="btn-light">Update</button>
                            {/* Add verification check */}
                            <button className="btn-outline ml-4 flex text-gray-600">
                                <MailIcon className="mr-2 h-4 w-4 mt-1 " aria-hidden="true" />
                                Verify Email
                            </button>
                        </div>
                    </div>
                </div>
                
                
                {/* Password Reset */}
                <div className="sm:border-t sm:border-gray-200 py-12">
                    {inputs.map((input) => (
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4" key={input.id}>
                            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{input.label}</label>
                            <FormInput
                                {...input}
                                value={values[input.name]}
                                onChange={(e) => setValues({...values, [e.target.name]: e.target.value })}
                            />
                        </div>
                    ))} 
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                        <button className="btn-light sm:col-start-2 w-48">Reset Password</button> 
                    </div>
                </div>

                {/* Profile Photo */}
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 py-12">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
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
                                    file:bg-slate-100 file:text-slate-600 hover:file:bg-slate-200 file:cursor-pointer"/>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Delete Account */}
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 py-12">
                    <p className="block text-sm font-medium text-gray-700">
                        Desactivate your account
                    </p>
                    <div className="sm:col-span-2">
                        <span className="text-red-700 cursor-pointer">Desactivate</span>
                    </div>
                </div>

                {/* Buttons */}                   
                <div className="flex mt-8">
                    <Link to="/" className="btn-outline">Cancel</Link>
                </div>

            </main>
        </div>
    )
}




  // const deleteUser = () => {
    //     user.delete().then(() => {
    //         console.log('user delete success')
    //         // Create Popup and redirect to home pageå
    //     }).catch(error => {
    //         console.log(error.message)
    //     })
    // }   