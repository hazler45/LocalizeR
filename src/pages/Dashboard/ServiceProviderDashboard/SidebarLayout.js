import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export default function SidebarLayout() {
  const location = useLocation();

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
              Request
            </NavLink>
          </ListItem>
          <ListItem>Log Out</ListItem>
        </List>
      </Card>
    </>
  );
}
