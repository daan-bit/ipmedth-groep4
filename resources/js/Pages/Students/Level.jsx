import React, {useState} from "react";
import { Head } from '@inertiajs/inertia-react';
import { usePage } from "@inertiajs/inertia-react";
import AICanvas, { undoLastMove } from "@/Components/Student/AICanvas/AICanvas";

import "../../../css/pages/Students/Level.css";

function done() {
    console.log("LOG");
}

export default function Sandbox() {
    const { level } = usePage().props;

    const [drawing, setDrawing] = useState({
        image: "",
        assignment_id: level.id,
        student_id: "",
    });

    return (
        <article className="level__container">
            <Head title={level.name} />
            <h2 className="level__description u__z_index2">{level.description}</h2>
            <section className="canvas__container">
                <AICanvas id="canvas" mode="level" prompt="vogel" />
            </section>
            {/* <button className="u__z_index2" onClick={undoLastMove}>undoLastMove</button>
            <button className="u__z_index2" onClick={done}>done</button> */}
        </article>
    )

}