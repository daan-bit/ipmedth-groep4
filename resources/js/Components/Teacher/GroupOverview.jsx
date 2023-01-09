import React, { useState } from "react";
import "../../../css/components/Teacher/GroupOverview.css";
import AddStudentModel from "../Teacher/AddStudentModel";
import ResponsiveNavLink from "../ResponsiveNavLink";
import { Inertia } from "@inertiajs/inertia";

export default function GroupOverview(props) {
    // console.log(props);
    const [addStudentModel, setAddStudentModel] = useState(false);
    let allResults = props.allResults;
    let allStudents = props.students;
    let totalAssignments = props.assignments.length;
    let allStudentsWithResults = [];

    for (let i = 0; i < allStudents.length; i++) {
        let student = allStudents[i];
        let studentResults = {
            good: 0,
            bad: 0,
            unfinished: totalAssignments,
        };

        for (let j = 0; j < allResults.length; j++) {
            let result = allResults[j];

            if (student.id === result[0]?.student_id) {
                let good = 0;
                let bad = 0;
                let unfinished = totalAssignments;

                for (let k = 0; k < result.length; k++) {
                    if (result[k].status === 1) {
                        good++;
                        unfinished--;
                    } else if (result[k].status === -1) {
                        bad++;
                        unfinished--;
                    }
                }

                studentResults = {
                    good: good,
                    bad: bad,
                    unfinished: unfinished,
                };
            }
        }

        allStudentsWithResults.push({
            id: student.id,
            first_name: student.first_name,
            results: studentResults,
        });
    }

    const openAddStudentModel = () => {
        setAddStudentModel(true);
    };

    const closeAddStudentModel = () => {
        setAddStudentModel(false);
    };

    const deleteUser = (userId) => {
        Inertia.delete(`/docent/overzicht/${props.group.id}/${userId}`);
    }

    return (
        <>
            {addStudentModel ? <AddStudentModel closeModel={closeAddStudentModel} group_id={props.group.id}/> : null}
            <section className="student__table__header">
                <button className="button button-primary" onClick={openAddStudentModel}>
                    Voeg leerling toe
                </button>
            </section>
            <article className="student__table__container">
                <ul className="student__table__row student__table__heading">
                    <li>&lrm;</li>
                    <li>
                        <p>Leerling</p>
                    </li>
                    <li>
                        <p>Voortgang</p>
                    </li>
                    <li>&lrm;</li>
                </ul>
                <ul className="student__table">
                    {allStudentsWithResults.map((student) => (
                        <li key={student.id} className="student__table__row">
                            <div>
                                <figure className="student__item__figure">
                                    <img
                                        className="student__item__figure__picture"
                                        src={`https://avatars.dicebear.com/api/bottts/${student.id}.svg`}
                                        alt={`Avatar van ${student.first_name}`}
                                    ></img>
                                </figure>
                            </div>

                            <p className="student__item__name">
                                {student.first_name}
                            </p>

                            <div className="progress__container">
                                <div className="progress__bar">
                                    <div
                                        className="progress__bar__progress"
                                        style={{
                                            width: `${
                                                (student.results.good /
                                                    totalAssignments) *
                                                100
                                            }%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="progress__text">
                                    {student.results.good} / {totalAssignments}
                                </p>
                            </div>

                                 <div></div>       
                            {/* <button className="student__item__button" onClick={() => deleteUser(student.id)}><span class="material-symbols-outlined">delete</span></button> */}
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
}
