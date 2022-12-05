import React from "react";
import { Head } from '@inertiajs/inertia-react';
import {usePage } from "@inertiajs/inertia-react";
import AICanvas from "@/Components/Student/AICanvas";

export default function Sandbox() {
    const { level } = usePage().props;
    console.log(level);
    return (
        <article>
            <Head title={level.name} />
            <p>hello World</p>
            <AICanvas id="canvas" />
        </article>
    )
}