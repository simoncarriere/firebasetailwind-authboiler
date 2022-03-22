import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Componenents
import Navbar from './components/Navbar.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'



export default function App() {

  const user = null

  return (
    <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login"/>}
            </Route>
            <Route path="/login">
              {!user ? <Login /> : <Redirect to="/"/>}
            </Route>
            <Route path="/signup">
              {!user ? <Signup /> : <Redirect to="/"/>}
            </Route>
          </Switch>
    </BrowserRouter>
  )
}