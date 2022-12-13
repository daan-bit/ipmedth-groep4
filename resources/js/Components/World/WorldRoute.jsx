import React from 'react';
import Island from '@/Components/World/Island';
import { Link } from '@inertiajs/inertia-react';

export default function Route({ className, assignmentId, linkClassName, level = 1, assignmentStatus = 0, currentIslandLevel}) {
    return (
        <div
            className={className}
        >
            <Link method="get"
                href={`/level/${level}/${assignmentId}`}
                className={linkClassName}
            >
                <Island className={"world__route__island"} assignmentStatus={assignmentStatus} currentIslandLevel={currentIslandLevel}></Island>
            </Link>
        </div>
    );
}
