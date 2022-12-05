import React from 'react';

export default function ImageAsPassword({
    id,
    className,
    src,
    data,
    divClassName = 'student__login__images__figure'
}) {

    return (
        <figure className={divClassName}>
        <img className={className} src={src} data={data} id={id}></img>
        </figure> 
    );
}