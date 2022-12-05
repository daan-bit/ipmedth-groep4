import React from "react";
import { Head } from '@inertiajs/inertia-react';
import {usePage } from "@inertiajs/inertia-react";
import AICanvas from "@/Components/Student/AICanvas";

import "../../../css/pages/Students/Level.css";

export default function Sandbox() {
    const { level } = usePage().props;
    console.log(level);
    return (
        <article className="container">
            <Head title={level.name} />
            <AICanvas id="canvas" />
        </article>
    )
}