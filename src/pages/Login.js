import {useState} from 'react'
import {Link} from 'react-router-dom'

// Hooks
import {useLogin} from '../hooks/useLogin'
import {useSocialAuth} from '../hooks/useSocialAuth'

// Componenents
import SocialLogins from '../components/SocialLogins'

export default function Login() {

    // Email Signup
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error,isPending} = useLogin()

    const [values, setValues] = useState({email:"", password:"",})

    // Inputs 
    const inputs = [
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          autoComplete: 'email',
          required: true
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
    ]; 

    const handleSubmit = (e) => {
      e.preventDefault()
      login(email, password)
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
            <h2 className="mt-6 text-center">Welcome back</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded-md shadow-sm -space-y-px">
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
            </div>

            <SocialLogins providers={{googleProvider, githubProvider, twitterProvider}} handleSocialAuth={handleSocialAuth} />
            
            <div>
              {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
              {!isPending ? (
                <button
                  type="submit"
                  // inline-block bg-slate-800 py-2 px-4 border border-transparent rounded-md text-base font-medium text-slate-100 hover:bg-slate-900
                  className="btn-dark w-full py-4"
                >
                  Log in
                </button>
              ) : (
                <button
                  type="text"
                  disabled
                  className="btn-light w-full"
                >
                  loading...
                </button>
              )}
            </div>
            <div className="text-sm">
              <div className="w-full flex justify-center">
                  <Link to="forgot" className="font-sm text-gray-500 hover:text-gray-600">
                    Forgot your password?
                  </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
     );
}
 