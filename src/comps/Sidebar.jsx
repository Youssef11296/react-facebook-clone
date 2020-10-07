import React from "react";
import {
  Chat,
  EmojiFlags,
  ExpandMore,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import { useStateContext } from "../context/StateContext";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateContext();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        src="https://www.chla.org/sites/default/files/thumbnails/image/CHLA-What-You-Should-Know-Covid-19-1200x628-02.png"
        title="COVID-19"
      />
      <SidebarRow Icon={EmojiFlags} title="pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messanger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
