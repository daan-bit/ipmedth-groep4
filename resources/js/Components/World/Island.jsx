import React from 'react';
import '../../../css/pages/worldoverview.css';
import { Link } from '@inertiajs/inertia-react';

export default function Island({ level, assignmentId, className, assignmentStatus, currentIslandLevel }) {
    return (
        <article className={className}>
            <figure className="island__figure">
                {assignmentStatus == '1' &&  currentIslandLevel == false ? (
                <img className="island__figure__image" src="/images/world/island__finished.svg" alt="island"></img>
                ) : assignmentStatus == '0' && currentIslandLevel == true ? (
                    <Link method="get" href={`/level/${level}/${assignmentId}`} className="island__figure__link">
                        <img className="island__figure__image" src="/images/world/island__current.svg" alt="island"></img>
                    </Link>
                ) : assignmentStatus == '0' && currentIslandLevel == false ? (
                    <img className="island__figure__image" src="/images/world/island__locked.svg" alt="island"></img>
                ) : assignmentStatus == '-1' ? (
                    <Link method="get" href={`/level/${level}/${assignmentId}`} className="island__figure__link">
                        <img className="island__figure__image" src="/images/world/island__declined.svg" alt="island"></img>
                    </Link>
                ) : (
                    <img className="island__figure__image" src="/images/world/island__current.svg" alt="island"></img>
                )}
            </figure>
        </article>
    );
}
