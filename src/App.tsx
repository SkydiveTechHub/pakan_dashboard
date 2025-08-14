import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardLayout from './core/layouts/DashboardLayout'
import MaterialView from './pages/dashboard/materials'
import UserPage from './pages/dashboard/Users'
import SchedulePage from './pages/dashboard/schedules'
import PayoutPage from './pages/dashboard/transactions'
import Zones from './pages/dashboard/zones'
import Login from './pages/auth/login'
import ProtectedRoute from './core/ProtectedRoute'
import LoanCollectors from './pages/dashboard/loan/collectors'
import LoanProviders from './pages/dashboard/loan/providers'
import ProviderDetails from './pages/dashboard/loan/providers/ProviderDetails'
import CollectorLoanDetails from './pages/dashboard/loan/collectors/CollectorLoanDetails'


function App() {
  return (
    <>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/user' element={<UserPage/>}/>
            <Route path='/schedules' element={<SchedulePage/>}/>
            <Route path='/materials' element={<MaterialView/>}/>
            <Route path='/zones' element={<Zones/>}/>
            <Route path='/transactions' element={<PayoutPage/>}/>
            <Route path='/loan/collectors' element={<LoanCollectors/>}/>
            <Route path='/loan/collector/:id' element={<CollectorLoanDetails/>}/>
            <Route path='/loan/providers' element={<LoanProviders/>}/>
            <Route path='/loan/provider/:id' element={<ProviderDetails/>}/>
          </Route>        
        </Route>

        
        {/* Public Routes */}
        <Route path='/sign-in' element={<Login/>}/>
      </Routes>

    </>
  )
}

export default App
