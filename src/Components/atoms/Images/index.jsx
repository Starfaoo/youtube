import React from 'react';

export const Image = ({ src, alt, className ,width, height}) => {
    return <img className={className} src={src} alt={alt} width={width} height= {height}/>;
  };