import React from 'react';
import '../../../css/pages/worldoverview.css';

export default function Island({ className, assignmentStatus, currentIslandLevel }) {
    return (
        <article className={className}>
            <figure className="island__figure">
                {assignmentStatus == '1' &&  currentIslandLevel == false ? (
                <img className="island__figure__image" src="/images/world/island__finished.svg" alt="island"></img>
                ) : assignmentStatus == '0' && currentIslandLevel == true ? (
                    <img className="island__figure__image" src="/images/world/island__current.svg" alt="island"></img>
                ) : assignmentStatus == '0' && currentIslandLevel == false ? (
                    <img className="island__figure__image" src="/images/world/island__locked.svg" alt="island"></img>
                ) : (
                    <img className="island__figure__image" src="/images/world/island__current.svg" alt="island"></img>
                )}
            </figure>
        </article>
    );
}
