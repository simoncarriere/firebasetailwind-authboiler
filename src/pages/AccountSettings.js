import {useState} from 'react'
import {Link} from 'react-router-dom'

import { ExclamationCircleIcon, UploadIcon } from '@heroicons/react/solid'

// Hooks
import {useAuthContext} from '../hooks/useAuthContext'



export default function AccountSettings() {

    const {user} = useAuthContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    
    // const deleteUser = () => {
    //     user.delete().then(() => {
    //         console.log('user delete success')
    //         // Create Popup and redirect to home page
    //     }).catch(error => {
    //         console.log(error.message)
    //     })
    // }

    return ( 
        <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header>
                <h1 className="text-3xl font-bold leading-tight text-gray-900">Account Settings</h1>
            </header>
            <main className="px-4 py-8 sm:px-0">

                        {/* Email */}
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-8">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Email
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
                                />
                                {/* Add verification check */}
                                <button className="btn-light">Update</button>
                                <button className="btn-outline ml-4">Confirm Email</button>
                            </div>
                        </div>
                    
                        {/* Password Reset */}
                        <div className="sm:border-t sm:border-gray-200 py-8">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 ">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="input-field appearance-none "
                                    placeholder="Password"
                                />
                            </div>
                            {/* Password Confirmation*/}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                                <label htmlFor="password-confirmation" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Password Confirmation
                                </label>
                                <div>
                                    <input
                                        id="password-confirmation"
                                        name="password-confirmation"
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        value={passwordConfirmation}
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="input-field appearance-none"
                                        placeholder="Password Confirmation"
                                    />
                                    <button className="btn-light">Update</button>
                                    </div>
                                </div>
                        </div>

                        {/* Profile Photo */}
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 py-8">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <div className="sm:col-span-2">
                                <div className="flex items-center">
                                    {user.photoURL ? (
                                        <img
                                            className="inline-block h-14 w-14 rounded-full"
                                            src={user.photoURL}
                                            alt="profile"
                                        />
                                    ) : (
                                        <span className="inline-block h-14 w-14 rounded-md overflow-hidden bg-gray-100">
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                    )}
                                    <form>
                                        <label>
                                            <input type="file" className="hidden"/>
                                            <span className="btn-light flex text-gray-600 ml-4 cursor-pointer">
                                                <UploadIcon className="mr-2 h-4 w-4 mt-1" aria-hidden="true" />
                                                {user.photoURL ? 'Change' : 'Upload'}
                                            </span>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Delete Account */}
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 py-8">
                            <p className="block text-sm font-medium text-gray-700">
                                Desactivate your account
                            </p>
                            <div className="sm:col-span-2">
                                <span className="text-red-700 cursor-pointer">Desactivate</span>
                            </div>
                        </div>

                      
            {/* Buttons */}                   
            <div className="flex justify-end">
                <Link to="/" className="btn-outline">Cancel</Link>
                <button type="submit" className="btn-dark ml-2">Save</button>
            </div>
  
          </main>
    </div>

    )
  }
  