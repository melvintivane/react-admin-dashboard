import React from 'react'
import "./topbar.css";
import topAvatar from "../../img/pexels-andrea-piacquadio-943084.jpg"
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">tivaneadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src={topAvatar} alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
