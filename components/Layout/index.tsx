"use client";
import React, { ReactNode } from "react";
import TabNavigator from "./TabNavigator";
import Player from "./Player";
import SideNavigation from "@/components/Layout/SideNavigation";

interface Children {
    children: ReactNode;
}

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <div>
      <SideNavigation />
      {children}
      <Player/>
      <TabNavigator />
    </div>
  );
};

export default Layout;