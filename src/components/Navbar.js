import {Link} from 'react-router-dom'

// Hooks
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'

// Componenents
import Settings from './Settings'
  
export default function Navbar() {

    const {user} = useAuthContext()
    const {logout} = useLogout()


    return (
        <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
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
                    <Link to="login" className="btn-light">Log in</Link>
                    <Link to="signup" className="btn-dark">Sign up</Link>
                </div>
            )}
            {user && (
                <div className="ml-10 space-x-4 flex items-center">
                    <p>Hello, {user.displayName}</p>
                    <Settings logout={logout} user={user}/>
                    {/*<button onClick={logout} className="btn-dark">Logout</button> */}
                </div>
            )}
          </div>
        </nav>
    )
  }
  