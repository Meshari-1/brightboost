import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/footer.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import { Toaster } from 'react-hot-toast'
import { PublicRoute } from './utilities/ProtectedRoute'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>

      <Toaster />
    </div>
  )
}

export default App
