//import useState hook to create menu collapse state
import React, { useState } from "react";
import Rectangle from "../../assets/images/Rectangle.svg"

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  // SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {  FaRegHeart, FaStream,  } from "react-icons/fa";
import {  FiArrowLeftCircle, FiArrowRightCircle, } from "react-icons/fi";
import {  RiNotification2Line, RiBook2Fill , RiDashboard2Fill} from "react-icons/ri";
import { BiCog, BiChalkboard } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
            <img src={Rectangle} alt="" />
              {/* small and big change using menucollapse state */}
               <p className="school">{menuCollapse ? "Logo" : "School space"}</p> 
              {/* <p className="school">school space</p> */}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<RiDashboard2Fill />}>
                Dashboard
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>Courses</MenuItem>
              <MenuItem icon={<RiBook2Fill />}>Students</MenuItem>
              <MenuItem icon={<BiCog />}>Exams</MenuItem>
              <MenuItem icon={<BiCog />}>Results</MenuItem>
              <MenuItem icon={<BiChalkboard />}>Notice Board</MenuItem>
              <MenuItem icon={<FaStream />}>Live clases</MenuItem>
              <MenuItem icon={<RiNotification2Line />}>Notification</MenuItem>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
};
export default Sidebar