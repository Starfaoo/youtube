import React from 'react';
import { Icon } from '../../atoms';


export const SmallIcon = (props) => {

  const  { type } = props;

  if (type === "home" )  {
    return(
          <div className='flex flex-column smalliconlist ' style={{   }} >
          <Icon type ="home"  />
          <p  style={{ fontSize:"10px" }} > <b>Home</b></p>
          </div>
    )
  }

  if ( type === "shorts" )  {
    return(
          <div className='flex flex-column smalliconlist ' >
          <Icon type ="shorts" />
          <p  style={{fontSize:"10px" }}>Shorts</p>
          </div>
    )
  }

  if (type === "subscriptons" )  {
    return(
          <div className='flex flex-column smalliconlist'  >
          <Icon type ="subscriptons" />
          <p style={{ fontSize:"10px" }}>Subscriptons</p>
          </div>
    )
  }

  if (type === "library" )  {
    return(
          <div className='flex flex-column smalliconlist '  >
          <Icon type ="library" />
          <p style={{fontSize:"10px"  }}>Library</p>
          </div>
    )
  }
}