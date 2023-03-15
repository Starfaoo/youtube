import React from 'react';

export const Video = ({ src, alt, className }) => {
    return <img className={className} src={src} alt={alt} />;
  };