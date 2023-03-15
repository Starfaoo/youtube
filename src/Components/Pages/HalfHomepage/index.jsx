import React from "react";
import "./style.css";
import { HalfHomepagetem } from "../../Templates";
import { Card } from "../../Organisms";
import { Tags } from "../../Organisms/horizontalTag";



export const HalfHomepage =() => {

  
return(
  
      
   <HalfHomepagetem >
      <div className=" flex flex-column  " style={{ margin: " 7px 30px", }} >
      <Tags/>
      </div>
      
      <div className=" flex flex-center  "  style={{ margin: " 30px 0 0 0",  }} > 
      <Card type="vid1" /> 
      <Card type="vid2" />
      <Card type="vid3" />
      <Card type="vid4" />
      </div>

      
      
   </HalfHomepagetem>
  
   
)
}
