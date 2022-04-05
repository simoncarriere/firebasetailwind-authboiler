import {useEffect} from 'react'

import {useAuthContext} from '../hooks/useAuthContext'


const Dashboard = () => {

    const {user} = useAuthContext()


    useEffect(() => {
      console.log(user)
    })

    // <p>{user.displayName}</p>
    // {user.email ? <p>{user.email}</p> : <p>Please provide email</p>}
    // {user.photoURL ? (
    //    <img src={user.photoURL} alt="user profile"/>
    //  ) : (
    //    <button className="underline text-blue-500">Upload Photo</button>
    //  )}

    return ( 
        <div className="py-10">
          <header>
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </header>
          <main>
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
          </main>
        </div>
     );
}
 
export default Dashboard;