import React from 'react'
import {Link } from "react-router-dom";

export default function Navbar() {


  return (
    <div className='container'>
            <div className="menu-wrapper d-flex" >
                    <ul>
                       
                               <Link to={"/"}>
                               <li>Home</li></Link> 
                               <Link to={"/confessnow"}>

                                <li>Confess Now</li>
                                </Link>
                                <Link to={"/about"}>

                                <li>About</li>
                                </Link>
                      
                    
                    </ul>
                 
            </div>
    </div>
  )
}













