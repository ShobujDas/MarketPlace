import { Toaster } from "react-hot-toast";
import "../../assets/dashboard.css";
import Sidebar from "../Dashboard/LayoutComponent/Sidebar";
import MasterLayout from "./MasterLayout";
import Main from "../Dashboard/LayoutComponent/Main";



const DashboardLayout = (props) => {



  return (
    <>
      <MasterLayout>
        <div className="display-flex">
        <Sidebar/>
        {/* <Toaster/> */}
        <Main/>
        </div>
       
      </MasterLayout>
    </>
  );
};

export default DashboardLayout;
