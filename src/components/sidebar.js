import React from "react";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { PiSealPercentBold } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiUsersFill } from "react-icons/pi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoMdExit } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import logo from './logo.jpeg';
import './dashboard.css';


function Sidebar(){
    return(
        <div className="sidebar">
            <img className="logo" src={logo}></img>
            <div className="side-icons">
                <span className="sideIcon"><PiUsersFill /></span>
                <p>Student Management</p>
                <span className="sideIcon"><MdComputer /></span>
                <p>Financial Management</p>
                <span className="sideIcon"><PiSealPercentBold /></span>
                <p>Quality Control</p>
                <span className="sideIcon"><BiSolidCategoryAlt /></span>
                <p>Report Delivery</p>
                <span className="sideIcon"><BsFileEarmarkBarGraphFill /></span>
                <h4>Attendance</h4>
            </div>
            <div className="endSidebar">
                <span className="endSpan"><BsFillQuestionCircleFill /></span>
                <span className="endSpan"><IoMdSettings /></span>
                <span className="endSpan"><IoMdExit /></span>
            </div>
        </div>
    )
}

export default Sidebar;