import Header from '@/components/common/NavBar'
import Sidebar from '@/components/common/Sidebar';
import  { useState } from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
        const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
        <div className="flex">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`relative flex-1 transition-all duration-300 ml-0 lg:ml-48  overflow-x-hidden h-screen bg-[f4f4f4] `}>
              <Header toggleSidebar={toggleSidebar}/>
              <div className="py-6 overflow-y-auto overflow-x-hidden mt-11 relative pb-12 px-8">
                <Outlet />
              </div>
              {/* <TabBar/> */}
            </div>           
          </div>
  )
}

export default DashboardLayout