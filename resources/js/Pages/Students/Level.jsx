import React from "react";
import { Head } from '@inertiajs/inertia-react';
import { usePage } from "@inertiajs/inertia-react";
import AICanvas, { undoLastMove } from "@/Components/Student/AICanvas/AICanvas";

import "../../../css/pages/Students/Level.css";

export default function Sandbox() {
    const { level } = usePage().props;
    return (
        <article className="level__container">
            <Head title={level.name} />
            <h2 className="level__description u__z_index2">{level.description}</h2>
            <section className="canvas__container">
                <AICanvas id="canvas" mode="level" prompt="vogel" />
            </section>
            <button className="u__z_index2" onClick={undoLastMove}>Click me</button>
        </article>
    )

}