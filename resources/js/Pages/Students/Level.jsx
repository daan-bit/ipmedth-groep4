import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import AICanvas, {
    undoLastMove,
    save,
} from "@/Components/Student/AICanvas/AICanvas";
import PrimaryButton from '@/Components/PrimaryButton';
import "../../../css/pages/Students/Level.css";

export default function Sandbox() {
    const { level } = usePage().props;
    const { student } = usePage().props;
    const { images } = usePage().props;
    console.log(level);
    console.log(images);

    const [drawing, setDrawing] = useState({
        image: "",
        assignment_id: level.id,
        student_id: student.id,
        AIGuessPercentage: 0, //Value between 0 and 1
    });
    const [modelState, setModelState] = useState(true);

    //Update the image variable to the canvas.
    function updateImage(e) {
        e.preventDefault();
        const svg = save();
        setDrawing({ ...drawing, image: svg });
    }

    // Post request wordt uitgevoerd wanneer drawing.image geupdatet wordt
    useEffect(() => {
        //Als er een afbeelding is
        if (drawing.image) {
            Inertia.post("/level/insert-drawing", drawing);
        }
        //post req
    }, [drawing]);

    return (
        <article className="level__container">
            <Head title={level.name} />
            <h3 className="level__description u__z_index2">
                {level.description}
            </h3>
            <section className="canvas__container">
                <AICanvas id="canvas" mode="level" prompt={level.prompt} />
            </section>
            <button className="u__z_index2" onClick={undoLastMove}>
                undoLastMove
            </button>
            <form
                method="post"
                onSubmit={updateImage}
                encType="multipart/form-data"
            >
                <button className="u__z_index2">done</button>
            </form>
            <Modal
                content={
                    <React.Fragment>
                        <section className="popup">
                            <h2 className="popup_titel">{level.description}</h2>
                            <h3 className="popup_subtitel">{level.name}</h3>
                            <section className="popup_figure_holder">
                                <figure className="popup_figure">
                                    <img
                                        src={images[0].image}
                                        alt={level.prompt}
                                    />
                                </figure>
                                <figure className="popup_figure">
                                    <img
                                        src={images[1].image}
                                        alt={level.prompt}
                                    />
                                </figure>
                                <figure className="popup_figure">
                                    <img
                                        src={images[2].image}
                                        alt={level.prompt}
                                    />
                                </figure>
                            </section>

                            <button className="button button-primary popup_start" onClick={() => setModelState(false)}>
                                START
                            </button>
                        </section>
                    </React.Fragment>
                }
                modelState={modelState}
                setModelState={setModelState}
                bgClosePopUp={false}
            ></Modal>
        </article>
    );
}
