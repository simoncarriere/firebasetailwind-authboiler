import {Link} from 'react-router-dom'

  
export default function Navbar() {

    const user = null

    return (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between ">
            <div className="flex items-center">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=black"
                  alt=""
                />
              </Link>
            </div>
            {!user && (
                <div className="ml-10 space-x-4">
                    <Link to="login"
                        className="inline-block bg-gray-100 py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-600 hover:bg-gray-200"
                    >
                        Log in
                    </Link>
                    <Link to="signup"
                        className="inline-block bg-gray-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-100 hover:bg-gray-800"
                    >
                        Sign up
                    </Link>
                </div>
            )}
            {user && (
                <div className="ml-10 space-x-4">
                    <button 
                        // onClick={logout}
                        className="inline-block bg-gray-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-100 hover:bg-gray-800"
                    >
                        Logout
                    </button>
                </div>
            )}
          </div>
        </nav>
    )
  }
  