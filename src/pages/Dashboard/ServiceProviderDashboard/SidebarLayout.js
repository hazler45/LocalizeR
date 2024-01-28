import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export default function SidebarLayout() {
  const location = useLocation();
  const navigate= useNavigate();
  const handleLogoutClick=  async(e) => {
    try {
      // Make a GET request to the logout API
      await axios.get("http://localhost:5178/api/Account/logout");

      // Clear sessionStorage
      sessionStorage.clear();

      // Navigate to "/"
      navigate('/');
      
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
  return (
    <>
      <Card className="h-[calc(120vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5">
            <NavLink to="/" className={location.pathname === "/" ? "text-blue-500" : ""}>
              LocalizeR
            </NavLink>
          </Typography>
        </div>
        <List>
        <ListItem>
            <NavLink to="/serviceProviderProfile" className={location.pathname === "/serviceProviderProfile" ? "text-blue-500" : ""}>
              Profile
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/listRequest" className={location.pathname === "/listRequest" ? "text-blue-500" : ""}>
              List of Request
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/reviewAllowPage" className={location.pathname === "/reviewAllowPage" ? "text-blue-500" : ""}>
              Accepted Request
            </NavLink>
          </ListItem>
          <ListItem><button type="button"
          onClick={handleLogoutClick}
          >Log Out</button></ListItem>
        </List>
      </Card>
    </>
  );
}
