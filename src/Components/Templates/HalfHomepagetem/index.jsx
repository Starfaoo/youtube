import React from "react";
import "./style.css";
import {SideBar, Navbar} from '../../Organisms';





export const HalfHomepagetem = ({children}) => {
  return (
    <section className="flex flex-column"  style={{maxWidth: "100%"}}>
    <Navbar  />
    <section className="flex flexsp  " >
        <section className=" flexsp1" style={{maxWidth: "20%"}} >
        <SideBar/>
        </section>
        <div className=" flexsp2 flex-center" style={{maxWidth: "90%"}}>
        {children}
          </div>  
      </section>
    </section>
    
  );
};

