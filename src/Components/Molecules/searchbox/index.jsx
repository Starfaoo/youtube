import React from 'react';
import {Input, Button} from "../../atoms/inputs"
import { Icon } from '../../atoms';



export const SearchBox = () => {
    return  (
     
      <div className='flex '>
      <Input className="borderL border-1 paddingI " type="text" placeholder="Search" name="Search" style={{ }}/>
      <Button  type="submit" className="sHeight borderR  border-2 paddingB"> < Icon type="search" style={{ margin: "-3px",   }} /></Button>
      </div>
     
    )
  };


 