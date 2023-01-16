import React, { useState } from "react";
import "../../../css/components/Teacher/ResultOverview.css";
import AddStudentModel from "@/Components/Teacher/AddStudentModel";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import Header from "@/Components/Teacher/Header";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function ResultOverview(props) {
    const [showDrawing, setShowDrawing] = useState(false);

    let allResults = props.results;
    let allDrawings = props.drawings;
    let allAssignments = props.assignments;
    let totalAssignments = allAssignments.length;
    let resultsComplete = [];

    for (let i = 0; i < totalAssignments; i++) {
        let assignment = allAssignments[i];
        let assignmentResult = {
            id: assignment.id,
            name: assignment.name,
            description: assignment.description,
            status: 0,
            drawing: null,
        };

        for (let j = 0; j < allResults.length; j++) {
            let result = allResults[j];

            if (assignment.id === result.assignment_id) {
                assignmentResult = {
                    ...assignmentResult,
                    status: result.status,
                };
            }

            for (let k = 0; k < allDrawings.length; k++) {
                let drawing = allDrawings[k];

                if (assignment.id === drawing.assignment_id) {
                    assignmentResult = {
                        ...assignmentResult,
                        drawing: drawing.image,
                    };
                }
            }
        }

        resultsComplete.push(assignmentResult);
    }

    const viewDrawing = (drawing) => {
        setShowDrawing(drawing);
    };

    const passAssignment = (assignment_id) => {
        Inertia.post(
            `/docent/overzicht/${props.group.id}/${props.student.id}/resultaat`,
            {
                assignment_id: assignment_id,
                status: 1,
            }
        );
    };

    const failAssignment = (assignment_id) => {
        Inertia.post(
            `/docent/overzicht/${props.group.id}/${props.student.id}/resultaat`,
            {
                assignment_id: assignment_id,
                status: -1,
            }
        );
    };

    return (
        <>
            <Header first_name={props.employee.first_name} />
            <section className="result__overview__container">
                <div className="result__overview__container-row">
                    <div className="result__overview__button__container">
                        <ResponsiveNavLink
                            as="button"
                            href={`/docent/overzicht/${props.group.id}?overzicht=leerlingen`}
                            className={
                                "button-primary result__overview__backButton"
                            }
                        >
                            Terug naar leerlingen
                        </ResponsiveNavLink>
                    </div>
                    <h1 className="result__overview__title">
                        Overzicht {props.student.first_name}
                    </h1>
                </div>
            </section>

            <Modal
                content={
                    <React.Fragment>
                        <img src={`/${showDrawing}`} alt="Tekening" />
                    </React.Fragment>
                }
                modelState={showDrawing}
                setModelState={setShowDrawing}
            />

            <article className="result__table__container">
                <ul className="result__table__row result__table__heading">
                    <li>
                        <p>Status</p>
                    </li>
                    <li>
                        <p>Tekening</p>
                    </li>
                    <li>
                        <p>Opdracht</p>
                    </li>
                    <li>
                        <p>Beschrijving</p>
                    </li>
                    <li>&lrm;</li>
                </ul>
                <ul className="result__table">
                    {resultsComplete.map((result) => (
                        <li key={result.id} className="result__table__row">
                            <div>
                                <div
                                    className={`result__item__status ${
                                        result.status === 1
                                            ? "result__item__status--passed"
                                            : ""
                                    }`}
                                ></div>
                            </div>

                            <div>
                                <figure className="result__item__figure">
                                    {result.drawing ? (
                                        <img
                                            className="result__item__figure__picture"
                                            src={`/${result.drawing}`}
                                            alt={`Tekening van ${props.student.first_name}`}
                                            onClick={() => {
                                                viewDrawing(result.drawing);
                                            }}
                                        ></img>
                                    ) : (
                                        <div className="result__item__figure__noPicture">
                                            <span className="material-symbols-outlined">
                                                draw
                                            </span>
                                        </div>
                                    )}
                                </figure>
                            </div>

                            <p className="result__item__name">{result.name}</p>

                            <p className="result__item__description">
                                {result.description}
                            </p>

                            <div className="result__item__button__wrapper">
                                {result.drawing ? (
                                    <>
                                        <button
                                            className="result__item__button result__item__button--view"
                                            onClick={() => {
                                                viewDrawing(result.drawing);
                                            }}
                                        >
                                            <span className="material-symbols-outlined">
                                                visibility
                                            </span>
                                        </button>
                                        <button
                                            className="result__item__button result__item__button--pass"
                                            onClick={() => {
                                                passAssignment(result.id);
                                            }}
                                        >
                                            <span className="material-symbols-outlined">
                                                done
                                            </span>
                                        </button>
                                        <button
                                            className="result__item__button result__item__button--fail"
                                            onClick={() => {
                                                failAssignment(result.id);
                                            }}
                                        >
                                            <span className="material-symbols-outlined">
                                                close
                                            </span>
                                        </button>
                                    </>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
}
