import {React, useState} from "react";
import {IconListItem} from "../../Molecules";
import { SmallIcon } from "../../Molecules/iconSmall";
import { Icon } from "../../atoms/Icons";



export const SideBar = () => {

      const [show, setShow] = useState(false);

      const handleClick = (e) => {
        setShow ( current => !current);
      }

  return (

  <div style={{  margin: "15px", }}>
   
    <Icon onClick={handleClick}>Click</Icon>

    { show &&(
    <div>
    <IconListItem type = "home" />
    <IconListItem type = "shorts" />
    <IconListItem type = "subscriptons" />
    <div style={{ borderBottom: "1px solid #f2f2f2", margin: "10px 0" }}> </div>
    <IconListItem type = "library" />
    <IconListItem type = "history" />
    <IconListItem type = "your-videos" />
    <IconListItem type = "watch-later" />
    <IconListItem type = "liked-videos" />
    </div>
    )}

{ !show &&(
    <div>
    <SmallIcon type = "home" />
    <SmallIcon type = "shorts" />
    <SmallIcon type = "subscriptons" />
    <SmallIcon type = "library" />
    </div>
)}
  </div>
  

  )
};