import {useEffect} from 'react'

import {useAuthContext} from '../hooks/useAuthContext'


const Dashboard = () => {

    const {user} = useAuthContext()


    useEffect(() => {
      console.log(user)
    })

   

    return ( 
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="px-4 py-8 sm:px-0">
                    <p>{user.displayName}</p>
                    {user.email ? <p>{user.email}</p> : <p>Please provide email</p>}
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="user profile"/>
                    ) : (
                      <button className="underline text-blue-500">Upload Photo</button>
                    )}
                  </div>
              </div>
          </main>
        </div>
     );
}
 
export default Dashboard;