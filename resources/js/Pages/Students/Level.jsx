import React from "react";
import { Head } from '@inertiajs/inertia-react';
import { usePage } from "@inertiajs/inertia-react";
import AICanvas from "@/Components/Student/AICanvas/AICanvas";

import "../../../css/pages/Students/Level.css";

export default function Sandbox() {
    const { level } = usePage().props;
    console.log(level);
    return (
        <article className="level__container">
            <Head title={level.name} />
            <h2 className="level__description">{level.description}</h2>
            <section className="canvas__container">
                <AICanvas id="canvas" />
            </section>
        </article>
    )
}