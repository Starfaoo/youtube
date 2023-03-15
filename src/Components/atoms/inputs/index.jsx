import React from 'react';

export const Input = ({ type, id, value, name, className, placeholder }) => {
    return <input className={className} value={value} name={name} type={type} placeholder={placeholder} id={id} />;
    
  };


  
  export const Button = ({ type, id, value, name, className, children }) => {
    return <button className={className} value={value} name={name} type={type}  id={id} >{children} </button> ;
    
  };