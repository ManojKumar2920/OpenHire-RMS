import Nav from "../../Components/Dashboard/Nav/Nav";
import SideNav from "../../Components/Dashboard/SideNav/SideNav";
import {Outlet} from "react-router-dom"
const DashboardLayout =()=>{
  return(
    <div className=" flex flex-row mt-[63px]">

      <div className="flex-1 relative">
        <SideNav/>
      </div>

      <div className=" flex-[4]">
        <Outlet/>
      </div>

    </div>
  );
}

const Dashboard = () => {
  return (
    <div>
        <div>
            <Nav/>

            <DashboardLayout/>
        </div>
    </div>
  )
}

export default Dashboard;