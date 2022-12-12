import React from 'react';
import '../../../css/pages/worldoverview.css';

export default function Island({ className }) {
    return (
        <article className={className}>
            <figure className="island__figure">
                <img className="island__figure__image" src="/images/world/island.svg" alt="island"></img>
            </figure>
        </article>
    );
}