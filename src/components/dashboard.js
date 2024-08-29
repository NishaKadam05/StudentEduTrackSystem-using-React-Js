import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import Sidebar from './sidebar';

function Dashboard(){

    const[count1,setCount1]=useState(8);
    const[count2,setCount2]=useState(13);
    const[count3,setCount3]=useState(0);

    const Regular=()=>{
        setCount1(count1+1);
    }

    const Remedial=()=>{
        setCount2(count2+1);
    }

    const Club=()=>{
        setCount3(count3+1);
    }

    return(
        <div className='dashboard'>
            <Sidebar/>
            <div>
                <div className='heading'>
                    <h1>Student Management</h1>
                </div>
                <div className='first-sec'>
                    <div className='orange'>  
                        <span><FaUserAlt className='icon'/></span>
                        <span>{count1}</span>
                        <p>Regular Students</p>
                    </div>
                    <div className='purple'>
                        <span><RiUser2Fill /></span>
                        <span>{count2}</span>
                        <p>Remedial Students</p>
                    </div>
                    <div className='green'>
                        <span><FaUsers /></span>
                        <span>{count3}</span>
                        <p>In Paid Clubs</p>
                    </div>
                </div>
                <div className='sec-sec'>
                    <h2>Menu</h2>
                    <div className='second-sec'>
                        <div onClick={Regular}>
                            <span><FaUserAlt /></span>
                            <p>Regular Enrollment</p>
                        </div>
                        <div onClick={Remedial}>
                            <span><FaBook /></span>
                            <p>Remedial Enrollment</p>
                        </div>
                        <div onClick={Club}>
                            <span><FaUsers /></span>
                            <p>Club Management</p>
                        </div>
                    </div>
                    <div className='second-sec'>
                        <div>
                            <span><FaBookOpenReader /></span>
                            <p>Classroom Management</p>
                        </div>
                        <div>
                            <span><MdEmail /></span>
                            <p>SMS/EMAIL</p>
                        </div>
                        <div>
                            <span><BsFileEarmarkBarGraphFill /></span>
                            <p>Attendance</p>
                        </div>
                    </div>
                    <div className='second-sec-last'>
                        <span><FaRegHospital /></span>
                        <p>Clinic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;