import React from "react";
import { IconListItem } from "../../Molecules";


export const Card = (props) => {

const {type} = props


if (type === "vid1") {

  return(
    <div className="flex flex-column cardstyle" >

     <div  className="" > <iframe className="Vidstyle" width="100%" height="300" src="https://www.youtube.com/embed/78JhhV1VJtg" title="YouTube video player" frameborder="0"  allow=" clipboard-write; encrypted-media; web-share" allowfullscreen></iframe>
</div>

      <div className="flex " style={{ width: "100%" ,  }}> 
     
      <IconListItem type="vid1"/>
      
      
      </div>

      </div>
  )
}

if (type === "vid2") {
return(
  <div className="flex flex-column cardstyle" >

   <div className="Vidstyle"> <iframe className="Vidstyle" width="100%" height="300" src="https://www.youtube.com/embed/78JhhV1VJtg" title="YouTube video player" frameborder="0"  allow=" clipboard-write; encrypted-media; web-share" allowfullscreen></iframe></div>

    <div className="flex " style={{ width: "100%" ,  }}> 
   
    <IconListItem type="vid2"/>
    
    
    </div>

    </div>
)
}

if (type === "vid3") {
return(
  <div className="flex flex-column cardstyle" >

   <div  className="Vidstyle" ><iframe className="Vidstyle" width="100%" height="300" src="https://www.youtube.com/embed/78JhhV1VJtg" title="YouTube video player" frameborder="0"  allow=" clipboard-write; encrypted-media; web-share" allowfullscreen></iframe> </div>

    <div className="flex " style={{ width: "100%" ,  }}> 
   
    <IconListItem type="vid3"/>
    
    
    </div>

    </div>
)
}

if (type === "vid4") {
return(
  <div className="flex flex-column cardstyle" >

   <div className="Vidstyle"  ><iframe className="Vidstyle" width="100%" height="300" src="https://www.youtube.com/embed/78JhhV1VJtg" title="YouTube video player" frameborder="0"  allow=" clipboard-write; encrypted-media; web-share" allowfullscreen></iframe> </div>

    <div className="flex " style={{ width: "100%" ,  }}> 
   
  <IconListItem type="vid4"/> 
    
    
    </div>

    </div>
)
}


  return (
  
    
     <div className="flex flex-column" style={{ height: "300px", backgroundColor: "white", width: "410px" , }}>

     check card

      </div>
      
   

  );
};