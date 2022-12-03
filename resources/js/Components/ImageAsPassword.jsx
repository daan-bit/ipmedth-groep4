import React, { useEffect, useRef } from 'react';

export default function ImageAsPassword({
    id,
    className,
    src,
    data,
    buttondata,
    divClassName = 'student__login__images__block'
}) {

    return (
        <div id={id} className={divClassName}>
        <img className={className} src={src} data={data} buttondata={buttondata} id={id}></img>
        </div> 
    );
}