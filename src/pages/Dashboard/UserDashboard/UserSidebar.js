import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export default function UserSidebar() {
  const location = useLocation();

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
          <ListItem>Log Out</ListItem>
        </List>
      </Card>
    </>
  );
}
