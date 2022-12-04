import React, { useEffect, useRef } from 'react';

export default function ImageAsPassword({
    id,
    className,
    src,
    data,
    divClassName = 'student__login__images__block'
}) {

    return (
        <div className={divClassName}>
        <img className={className} src={src} data={data} id={id}></img>
        </div> 
    );
}