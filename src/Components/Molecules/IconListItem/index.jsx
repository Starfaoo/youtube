import React from 'react';
import { Icon } from '../../atoms';


export const IconListItem = (props) => {

  const  { type } = props;

  if (type === "home" )  {
    return(
          <div className='flex sideiconlist ' style={{  backgroundColor: "#F2F2F2" }} >
          <Icon type ="home"  />
          <p  style={{ margin: " 0 10px 0 20px"  }} > <b>Home</b></p>
          </div>
    )
  }


  if (type === "home" )  {
    return(
          <div className='flex sideiconlist ' style={{  backgroundColor: "#F2F2F2" }} >
          <Icon type ="home"  />
          <p  style={{ margin: " 0 10px 0 20px"  }} > <b>Home</b></p>
          </div>
    )
  }

  if ( type === "shorts" )  {
    return(
          <div className='flex sideiconlist ' >
          <Icon type ="shorts" />
          <p  style={{ margin: " 0 10px 0 20px"  }}>Shorts</p>
          </div>
    )
  }

  if (type === "subscriptons" )  {
    return(
          <div className='flex sideiconlist'  >
          <Icon type ="subscriptons" />
          <p style={{ margin: " 0 10px 0 20px"  }}>Subscriptons</p>
          </div>
    )
  }

  if (type === "library" )  {
    return(
          <div className='flex sideiconlist '  >
          <Icon type ="library" />
          <p style={{ margin: " 0 10px 0 20px"  }}>Library</p>
          </div>
    )
  }

  if (type === "history" )  {
    return(
          <div className='flex sideiconlist'  >
          <Icon type ="history" />
          <p style={{ margin: " 0 10px 0 20px"  }}>History</p>
          </div>
    )
  }

  if (type === "your-videos" )  {
    return(
          <div className='flex sideiconlist' >
          <Icon type ="your-videos" />
          <p style={{ margin: " 0 10px 0 20px"  }}>Your videos</p>
          </div>
    )
  }

 

  if (type === "watch-later" )  {
    return(
          <div className='flex sideiconlist'>
          <Icon type ="watch-later" />
          <p style={{ margin: " 0 10px 0 20px"  }} >Watch later</p>
          </div>
    )
  }

  if (type === "liked-videos" )  {
    return(
          <div className='flex sideiconlist'>
          <Icon type ="liked-videos" />
          <p style={{ margin: " 0 10px 0 20px"  }}>Liked videos</p>
          </div>
    )
  }

  if (type === "vid1" )  {
    return(
      <div className='flex ' style={{ margin: "15px 0 0 0", }} >
          <Icon type ="vid1" />
          <div className='flex flex-column' style={{ paddingLeft: "15px",}} >
          <h5 style={{ paddingBottom: "10px", lineHeight: "1.5"}}>PASTOR ADEBOYE'S SON SHED TEARS AFTER HEARING HIS FATHER'S COMMENT...</h5>
          <p >Fklef TV</p>
          <p >126k views   2 days ago</p>
          </div>
          </div>
    )
  }

  if (type === "vid2" )  {
    return(
          <div className='flex ' style={{ margin: "15px 0 0 0", }} >
          
          <Icon type ="vid2" />
          <div className='flex flex-column' style={{ paddingLeft: "15px",}} >
          <h5 style={{ paddingBottom: "10px", lineHeight: "1.5"}}>PASTOR ADEBOYE'S SON SHED TEARS AFTER HEARING HIS FATHER'S COMMENT...</h5>
          <p >Time with God</p>
          <p >51k views   1 month ago</p>
          </div>
          </div>
    )
  }

  if (type === "vid3" )  {
    return(
      <div className='flex flex-justify' style={{ margin: "15px 0 0 0",  }} >
          <Icon type ="vid3" />
          <div className='flex flex-column ' style={{ paddingLeft: "15px",}} >
          <h5 style={{ paddingBottom: "10px", lineHeight: "1.5"}}>PASTOR ADEBOYE'S SON SHED TEARS AFTER HEARING HIS FATHER'S COMMENT...</h5>
          <p >Time with God</p>
          <p >51k views   1 month ago</p>
          </div>
          </div>
    )
  }

  if (type === "vid4" )  {
    return(
      <div className='flex flex-justify' style={{ margin: "15px 0 0 0",  }} >
          <Icon type ="vid4" />
          <div className='flex flex-column' style={{ paddingLeft: "15px",}} >
          <h5 style={{ paddingBottom: "10px", lineHeight: "1.5"}}>PASTOR ADEBOYE'S SON SHED TEARS AFTER HEARING HIS FATHER'S COMMENT...</h5>
          <p >Time with God</p>
          <p >51k views   1 month ago</p>
          </div>
          </div>
    )
  }

    return (
    <div>
      check iconlist
     
    </div>
    );
  };