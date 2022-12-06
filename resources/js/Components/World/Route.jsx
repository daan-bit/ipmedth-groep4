import React from 'react';
import Island from '@/Components/World/Island';
import { Link } from '@inertiajs/inertia-react';

export default function Route({ className, assignmentId, linkClassName }) {
    return (
        <div
            className={className}
        >
            <Link method="get"
                href={`/world/assignment/` + assignmentId}
                className={linkClassName}
            >

                <Island className={"world__route__island"}></Island>
            </Link>
        </div>
    );
}
