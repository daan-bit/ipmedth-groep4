import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import AICanvas, {
    undoLastMove,
    save,
    getPercentage,
} from "@/Components/Student/AICanvas/AICanvas";
import Tutorial from "@/Components/Student/Tutorial";
import "../../../css/pages/Students/Level.css";
import ModalGood from "@/Components/ModalGood";
import ModalWrong from "@/Components/ModalWrong";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEraserFill } from "react-icons/bs";
import { BiQuestionMark } from "react-icons/bi"

export default function Level() {
    const { level } = usePage().props;
    const { student } = usePage().props;
    const { images } = usePage().props;
    const { tutorial_completed } = usePage().props;

    const [drawing, setDrawing] = useState({
        image: "",
        assignment_id: level.id,
        student_id: student.id,
        AIGuessPercentage: 0,
    });
    const [modelStartState, setModelStartState] = useState(true);
    const [modelEndState, setModelEndState] = useState(false);
    const [drawingGuessed, setDrawingGuessed] = useState(false);
    const [tutorialWindow, setTutorialWindow] = useState(!tutorial_completed); //this inverse because you dont want to show the tutorial if it has been completed

    //Update the image variable to the canvas.
    function updateDrawing() {
        const svg = save();
        const percentage = getPercentage();
        setDrawing({ ...drawing, image: svg, AIGuessPercentage: percentage });
    }

    function showModelEndState() {
        const percentage = getPercentage();
        if (percentage >= 50) setDrawingGuessed(true);
        else setDrawingGuessed(false);
        setModelEndState(true);
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
            <section className="button_container">
                <button
                    className="level__button u__z_index2"
                    onClick={undoLastMove}
                    data-bgcolor="red"
                >
                    <BsFillEraserFill size={50} color={"#202020"} />
                </button>
                <button
                    className="level__button u__z_index2"
                    onClick={() => setTutorialWindow(true)}
                    data-bgcolor="yellow"
                >
                    <BiQuestionMark size={50} color={"#202020"} />
                </button>
                <button
                    onClick={showModelEndState}
                    className="level__button u__z_index2"
                    data-bgcolor="green"
                >
                    <AiOutlineCheck size={50} color={"#202020"} />
                </button>
            </section>

            {/* THE POPUP MODELS, INCLUDING THE START, WRONG AND GOOD */}
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

                            <button
                                className="button button-primary popup_start"
                                onClick={() => setModelStartState(false)}
                            >
                                START
                            </button>
                        </section>
                    </React.Fragment>
                }
                modelState={modelStartState}
                setModelState={setModelStartState}
                bgClosePopUp={false}
            ></Modal>
            {drawingGuessed ? (
                <ModalGood
                    modelState={modelEndState}
                    setModelState={setModelEndState}
                    updateDrawing={updateDrawing}
                />
            ) : (
                <ModalWrong
                    modelState={modelEndState}
                    setModelState={setModelEndState}
                    updateDrawing={updateDrawing}
                />
            )}

            <section onClick={() => setTutorialWindow(false)}>
                {tutorialWindow ? (
                    <Tutorial text={`yo ho ho, je kan op het witte vierkant tekenen. Boven zie je een tekst, daar staat nu een 'Teken een ${level.prompt}'. Maak een ${level.prompt} die de computer kan raden om dichter bij de schatkist💎 te komen. Ook zie je een gum🔴, klik op de gum om opnieuw te beginnen. Het vinkje🟢 kan je op drukken als je klaar bent. En klik op de vogel om de tutorial weer te zien🐦.`} />
                ) : null}
            </section>
        </article>
    );
}
