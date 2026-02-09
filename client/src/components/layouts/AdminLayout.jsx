import { Outlet } from "react-router-dom"
import Sidebar from "../common/Sidebar"

const AdminLayout = () => {
  return (
    <div className="flex h-[100vh] ">
      <Sidebar />
      {/* <main className="flex-1 bg-gray-100 p-6"> */}
        <main className="flex-1 h-[100vh] overflow-y-auto  bg-[#0B0F1A]">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
