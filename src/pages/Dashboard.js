import {useEffect} from 'react'
import {Link} from 'react-router-dom'

// Hooks
import {useAuthContext} from '../hooks/useAuthContext'

// Icons
import { ExclamationIcon } from '@heroicons/react/solid'

const Dashboard = () => {

    const {user} = useAuthContext()


    useEffect(() => {
      console.log(user)
    })

    return ( 
        <div className="py-10">
          <header>
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </header>
          <main>
          <div className="px-4 py-8 sm:px-0">
              {!user.emailVerified && (
                <div className="rounded-md bg-blue-50 p-4 dark:bg-slate-800">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationIcon className="h-5 w-5 text-blue-400 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700 dark:text-blue-200">Please verify your email to unlock your account.</p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                      <Link to="/account-settings" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 dark:text-blue-200">
                        Account Settings <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              )}
            </div>
            <div className="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-96" />
          </main>
        </div>
     );
}
 
export default Dashboard;