import React from "react";
import "./style.css";
import {SideBar, Navbar} from '../../Organisms';





export const HalfHomepagetem = ({children}) => {
  return (
    <section className="flex flex-column"  style={{maxWidth:"100vw"}}>
    <Navbar  />
    <section className="flex flexsp  " style={{maxWidth:"100vw"}} >
        <section className=" flexsp1" style={{}} >
        <SideBar className=" "/>
        </section>
        <div className=" flexsp2 flex-center" style={{maxWidth:"auto"}}>
        {children}
          </div>  
      </section>
    </section>
    
  );
};

