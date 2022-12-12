import React, {useState, useEffect } from "react";
import { Head } from '@inertiajs/inertia-react';
import { usePage } from "@inertiajs/inertia-react";
import AICanvas, { undoLastMove, save } from "@/Components/Student/AICanvas/AICanvas";
import { Inertia } from '@inertiajs/inertia';

import "../../../css/pages/Students/Level.css";

export default function Sandbox() {
    const { level } = usePage().props;
    console.log(level);
    const { student } = usePage().props;

    const [drawing, setDrawing] = useState({
        image: "",
        assignment_id: level.id,
        student_id: student.id,
    });

    //Update the image variable to the canvas.
    function updateImage(e) {
        e.preventDefault();
        const svg = save();
        setDrawing({...drawing, image: svg});
    }

    // Post request wordt uitgevoerd wanneer drawing.image geupdatet wordt
    useEffect(() => {
        //Als er een afbeelding is
        if (drawing.image) {
            Inertia.post('/level/insert-drawing', drawing);
        }
        //post req
    }, [drawing]);

    return (
        <article className="level__container">
            <Head title={level.name} />
            <h2 className="level__description u__z_index2">{level.description}</h2>
            <section className="canvas__container">
                <AICanvas id="canvas" mode="level" prompt={level.prompt} />
            </section>
            <button className="u__z_index2" onClick={undoLastMove}>undoLastMove</button>
            <form method="post" onSubmit={updateImage} enctype="multipart/form-data">
            <button className="u__z_index2">done</button>
            </form>
        </article>
    )
}