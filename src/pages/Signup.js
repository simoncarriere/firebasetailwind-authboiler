import {useState} from 'react'


export default function Signup() {

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return ( 
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-base text-gray-900">Create your account</h2>
            
          </div>
          <form className="mt-8 space-y-6" >
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
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
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
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-3"
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
                        className="appearance-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>



            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create your account
              </button>
            </div>
            <div className="text-sm">
            <div className="w-full flex justify-center">
                <p  className="font-sm text-gray-500 hover:text-gray-600">
                Forgot your password?
                </p>
            </div>
          </div>
          </form>
        </div>
      </div>
     );
}
 
