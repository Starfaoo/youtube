import React from "react";
import { Icon } from "../../atoms/Icons";
import {SearchBox} from "../../Molecules/searchbox";
import logo from "../../../assets/logo/logo.jpeg";
import profile from "../../../assets/images/profile.jpg"
import { Image } from "../../atoms";

export const Navbar = () => {

    return(

     <div className="flex flex-justify  flex-align " style={{  margin: "10px 15px 10px 20px" , }}>
    <div className="flex flex-align " style={{  }} > 
    <Icon style={{margin: " 5px 25px 0 5px"  }} />
    <Image src={logo} alt="logo"  />
    </div>
    <div className="flex flex-align  "> 
    <SearchBox  />
    <Icon type="Mic" className="marginSL" />
     </div>
    <div className="flex flex-align "> 
    <Icon className="marginSR" type="Addvideo" />
    <Icon className="marginSR" type="Notifications" />
    <Image style={{width: 30 , borderRadius: 30/2}} className="marginSR Profileradius" width="30px" src={profile} alt="Profile" />
    </div>
    </div>
    )
}