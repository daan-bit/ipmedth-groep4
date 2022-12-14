import React from 'react';
import Island from '@/Components/World/Island';

export default function Route({ className, assignmentId, level = 1, assignmentStatus = 0, currentIslandLevel}) {
    return (
        <div className={className}>
            <Island level={level} assignmentId={assignmentId} className={"world__route__island"} assignmentStatus={assignmentStatus} currentIslandLevel={currentIslandLevel}></Island>
        </div>
    );
}
