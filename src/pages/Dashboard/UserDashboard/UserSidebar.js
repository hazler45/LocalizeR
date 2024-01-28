import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserSidebar() {
  const location = useLocation();
  const navigate= useNavigate();
  const handleLogoutClick=  async(e) => {
    try {
      // Make a GET request to the logout API
      const response= await axios.get("http://localhost:5178/api/Account/logout");

      // Clear sessionStorage
      console.log(response);
      if(response.status= 200)
      {
      sessionStorage.clear();
      navigate('/');
      }
      // Navigate to "/
      
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <>
      <Card className="h-[calc(140vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" className="text-orange-700">
            <Link to="/" className={location.pathname === "/" ? "text-blue-500" : ""}>
              LocalizeR
            </Link>
          </Typography>
        </div>
        <List>
          <ListItem>
            <Link to="/userProfile" className={location.pathname === "/userProfile" ? "text-blue-500" : ""}>
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/reviewRequest" className={location.pathname === "/reviewRequest" ? "text-blue-500" : ""}>
              Review Request
            </Link>
          </ListItem>
          <ListItem><button type="button"
          onClick={handleLogoutClick}
          >Log Out</button></ListItem>
        </List>
      </Card>
    </>
  );
}
