import {useState} from 'react'
import {Link} from 'react-router-dom'

// Hooks
import {useSignup} from '../hooks/useSignup'
import {useSocialAuth} from '../hooks/useSocialAuth'

// Componenents
import SocialLogins from '../components/SocialLogins'

export default function Signup() {

    // Email Signup
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const {signup, isPending, error} = useSignup()

    const handleEmailAuth = (e) => {
        e.preventDefault()
        signup(email, password, displayName, passwordConfirmation)   
    }

    // Social Signup
    const {socialSignup, googleProvider, githubProvider, twitterProvider} = useSocialAuth()

    const handleSocialAuth = (provider) => {
        socialSignup(provider)
    }

    return ( 
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-base text-gray-900">Create your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleEmailAuth} >
            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded-md shadow-sm -space-y-px">
                {/* Full Name */}
                <div>
                    <label htmlFor="full-name" className="sr-only">
                    Full Name 
                    </label>
                    <input
                        id="full-name"
                        name="name"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                        type="text"    
                        autoComplete="name"
                        required
                        className="input-field"
                        placeholder="Full Name"
                    />
                </div>
                {/* Email */}
                <div>
                    <label htmlFor="email" className="sr-only">
                    Email 
                    </label>
                    <input
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"    
                        autoComplete="email"
                        required
                        className="input-field"
                        placeholder="Email"
                    />
                </div>
                {/* Password */}
                <div>
                    <label htmlFor="password" className="sr-only">
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
                        className="input-field appearance-none focus:outline-none focus:z-10"
                        placeholder="Password"
                    />
                </div>
                {/* Password Confirmation*/}
                <div>
                    <label htmlFor="password-confirmation" className="sr-only">
                    Password Confirmation
                    </label>
                    <input
                        id="password-confirmation"
                        name="password-confirmation"
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="input-field appearance-none focus:outline-none focus:z-10"
                        placeholder="Password Confirmation"
                    />
                </div>
            </div>


            <SocialLogins providers={{googleProvider, githubProvider, twitterProvider}} handleSocialAuth={handleSocialAuth} />


            <div>
                {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
                {!isPending ? (
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Create your account
                    </button>
                ) : (
                    <button
                    type="text"
                    disabled
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-grey-700 bg-gray-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    loading...
                    </button>
                )}
            </div>
            <div className="text-sm">
            <div className="w-full flex justify-center">
                <Link to="/Login" className="font-sm text-gray-500 hover:text-gray-600">
                    Already have an account?
                </Link>
            </div>
          </div>
          </form>
        </div>
      </div>
     );
}
 
