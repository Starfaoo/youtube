import React from 'react';

export const Text = (props) => {
      const {type, children}= props

      if (type==="h3") {
        return <h3 style={{...props}}>{children}</h3>
}

if (type==="h2") {
    return <h2 style={{...props}}>{children}</h2>
}

if (type==="p") {
  return <p style={{...props}} >{children}</p>
}

if (type==="h1") {
    return <h1 style={{...props}} >{children}</h1>
}

return(
    <>
    <span style={{...props}}>{children}</span>

    </>
);
}






