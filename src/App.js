import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Componenents
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgot from './pages/Forgot'
import AccountSettings from './pages/AccountSettings'

// Hooks
import { useAuthContext } from './hooks/useAuthContext';

export default function App() {

  const {authIsReady, user} = useAuthContext()

  return (
    <>
      {authIsReady && ( 
        <BrowserRouter>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  {user ? <Redirect to="/dashboard" /> : <Home/>}
                </Route>
                <Route exact path="/dashboard">
                  {user ? <Dashboard /> : <Redirect to="/login"/>}
                </Route>
                <Route exact path="/account-settings">
                  {user ? <AccountSettings /> : <Redirect to="/login"/>}
                </Route>
                <Route path="/login">
                  {!user ? <Login /> : <Redirect to="/dashboard"/>}
                </Route>
                <Route path="/signup">
                  {!user ? <Signup /> : <Redirect to="/dashboard"/>}
                </Route>
                <Route path="/forgot">
                  {!user ? <Forgot /> : <Redirect to="/dashboard"/>}
                </Route>
              </Switch>
            </div>
        </BrowserRouter>
      )}
    </>
  )
}