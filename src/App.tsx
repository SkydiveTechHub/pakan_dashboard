import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { LoginForm } from './components/ui/auth/LoginForm'
import DashboardLayout from './core/layouts/DashboardLayout'
import MaterialView from './pages/dashboard/materials'
import UserPage from './pages/dashboard/Users'
import SchedulePage from './pages/dashboard/schedules'
import PayoutPage from './pages/dashboard/transactions'
import Zones from './pages/dashboard/materials/Zone'


function App() {
  return (
    <>
      <Routes>
        {/* Protected Routes */}
        <Route element={<DashboardLayout/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/user' element={<UserPage/>}/>
          <Route path='/schedules' element={<SchedulePage/>}/>
          <Route path='/materials' element={<MaterialView/>}/>
          <Route path='/zones' element={<Zones/>}/>
          <Route path='/transactions' element={<PayoutPage/>}/>
        </Route>
        
        {/* Public Routes */}
        <Route path='/sign-in' element={<LoginForm/>}/>
      </Routes>

    </>
  )
}

export default App
