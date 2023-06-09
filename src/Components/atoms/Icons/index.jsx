import React from 'react';
import profile from "../../../assets/images/profile.jpg"
import { Image } from "../../atoms";

export const Icon = (props) => {

  const  { type } = props;

  if ( type === "home" )  {
    return(
          <div>
         <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
         <path d="M4,10V21h6V15h4v6h6V10L12,3Z" class="style-scope yt-icon"></path>
    
  </svg>
          </div>
    )
  }

  if ( type === "search" )  {
    return(
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} padding= {0} margin={0} {...props}>
      <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" ></path>
    </svg>
    </div> 
    )
  }

  if ( type === "Notifications" )  {
    return(
          <div>
        <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
        <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path>
  </svg>
          </div>
    )
  }

  if ( type === "Addvideo" )  {
    return(
          <div>
         <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
         <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" class="style-scope yt-icon"></path>
  </svg>
          </div>
    )
  }

  if ( type === "Mic" )  {
    return(
          <div>
         <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
         <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z" ></path>
  </svg>
          </div>
    )
  }


  if ( type === "shorts" )  {
    return(
          <div>
               <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
               <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
  </svg>
       
          </div>
    )
  }

  if ( type === "subscriptons" )  {
    return(
          <div>
         <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
         <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z" class="style-scope yt-icon"></path>  </svg>
          </div>
    )
  }

  if ( type === "library" )  {
    return(
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
           <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" class="style-scope yt-icon"></path>
  </svg>
          </div>
    )
  }

  if ( type === "history" )  {
    return(
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
           <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon"></path>  </svg>
          </div>
    )
  }

  if ( type === "your-videos" )  {
    return(
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
           <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" class="style-scope yt-icon"></path>  </svg>
          </div>
    )
  }

  if ( type === "watch-later" )  {
    return(
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
           <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" />
          </svg>
          </div>
    )
  }

  if ( type === "liked-videos" )  {
    return(
          <div>
         <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
         <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path>
  </svg>
          </div>
    )
  }

  if (type === "vid1" )  {
    return(
      <Image style={{}} className=" Profileradius" width="40px" height="40px"  src={profile} alt="Profile" />
          
         
    )
  }

  if (type === "vid2" )  {
    return(
          
      <Image style={{}} className=" Profileradius" width="40px" height="40px"  src={profile} alt="Profile" />
         
    )
  }

  if (type === "vid3" )  {
    return(
          
      <Image style={{}} className=" Profileradius" width="40px" height="40px"  src={profile} alt="Profile" />
         
    )
  }

  if (type === "vid4" )  {
    return(
          
      <Image style={{}} className=" Profileradius" width="40px" height="40px"  src={profile} alt="Profile" />
         
    )
  }


    return <div>
       <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
       <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" />
  </svg>
    </div>;
  };


