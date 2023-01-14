import AlbumItem from "@/Components/Album/AlbumItem";
import React, { useState } from "react";
import "../../../css/pages/Album/albumOverview.css";
import { FiArrowLeft } from "react-icons/fi";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";

export default function Overview(props) {
    const [modelState, setModelState] = useState();
    const [contentModel, setContentModel]= useState();
    const assignments = props.assignments;
    const drawings = props.drawings;
    const info = props.drawingInfo;

    const backToWorld = (e) => {
        e.preventDefault();
        Inertia.get(route("student.overview"));
    };

    return (
        <article className="album">
            <button className="album__return_button" onClick={backToWorld}>
                {<FiArrowLeft size="32" />}&nbsp;Terug
            </button>
            <section className="album__header">
                <h2 className="album__header__title">Tekeningen</h2>
            </section>
            <section className="drawings">
                {drawings.map((item, key) =>
                    drawings.length > 0 ? (
                        <AlbumItem
                            key={key}
                            image={item.image}
                            imgAlt={`Afbeelding van opdracht ${
                                assignments[item.assignment_id - 1].id
                            }`}
                            assignmentName={
                                assignments[item.assignment_id - 1].name
                            }
                            drawingDate={
                                info[item.assignment_id - 1].created_at
                            }
                            prompt={assignments[item.assignment_id - 1].prompt}

                            setModelState={setModelState}
                            setContentModel={setContentModel}
                        />
                    ) : (
                        <section className="drawings__not__found">
                            <h2 className="drawings__not__found__title">
                                Je hebt nog geen tekeningen gemaakt!
                            </h2>
                        </section>
                    )
                )}
            </section>

            <Modal
                content={contentModel}
                modelState={modelState}
                setModelState={setModelState}

            ></Modal>
        </article>
    );
}
