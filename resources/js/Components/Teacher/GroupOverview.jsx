import React, { useState } from "react";
import "../../../css/components/Teacher/GroupOverview.css";
import AddStudentModel from "../Teacher/AddStudentModel";
import ResponsiveNavLink from "../ResponsiveNavLink";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";

export default function GroupOverview(props) {
    console.log(props);
    const [addStudentModel, setAddStudentModel] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState(["", ""]);
    const [selectedStudent, setSelectedStudent] = useState("");
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
            user_id: student.user_id,
            password: student.password,
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
    };

    const viewPassword = (password, student) => {
        // split password into two parts, split at capital letter
        let passwordArray = password.split(/(?=[A-Z])/);
        setPassword(passwordArray);
        setShowPassword(true);
        setSelectedStudent(student);
    };

    const viewResults = (userId) => {
        Inertia.visit(`/docent/overzicht/${props.group.id}/${userId}`);
    };

    const downloadPasswords = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Naam,Plaatje 1,Plaatje 2";
        csvContent += "\n";

        allStudentsWithResults.forEach((student) => {
            let passwordArray = student.password.split(/(?=[A-Z])/);
            csvContent += `${student.first_name},${passwordArray[0]},${passwordArray[1]}`;
            csvContent += "\n";
        });

        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        link.setAttribute("download", `wachtwoorden_${props.group.school_group.replace(/\s/g, '_')}_${day}-${month}-${year}.csv`);
        document.body.appendChild(link); // Required for FF

        link.click();
    };

    return (
        <>
            {addStudentModel ? (
                <AddStudentModel
                    closeModel={closeAddStudentModel}
                    group_id={props.group.id}
                />
            ) : null}

            <Modal
                content={
                    <React.Fragment>
                        <div className="viewpassword__modal">
                            <button
                                className="viewpassword__close"
                                onClick={() => setShowPassword(false)}
                            >
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                            <h3 className="viewpassword__title">
                                Wachtwoord van {selectedStudent}
                            </h3>
                            <div className="viewpassword__password__wrapper">
                                <p className="viewpassword__password viewpassword__password--1">
                                    <span className="password--bold">
                                        Plaatje 1:
                                    </span>{" "}
                                    {password[0]}
                                </p>
                                <p className="viewpassword__password viewpassword__password--2">
                                    <span className="password--bold">
                                        Plaatje 2:
                                    </span>{" "}
                                    {password[1]}
                                </p>
                            </div>
                        </div>
                    </React.Fragment>
                }
                modelState={showPassword}
                setModelState={setShowPassword}
            />

            <section className="student__table__header">
                <button
                    className="button button-primary"
                    onClick={downloadPasswords}
                >
                    Download wachtwoorden
                </button>
                <button
                    className="button button-primary"
                    onClick={openAddStudentModel}
                >
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

                            <div className="student__item__button__wrapper">
                                <button
                                    className="student__item__button student__item__button--password"
                                    onClick={() => viewResults(student.id)}
                                >
                                    <span className="material-symbols-outlined">
                                        visibility
                                    </span>
                                </button>
                                <button
                                    className="student__item__button student__item__button--password"
                                    onClick={() =>
                                        viewPassword(
                                            student.password,
                                            student.first_name
                                        )
                                    }
                                >
                                    <span className="material-symbols-outlined">
                                        password
                                    </span>
                                </button>
                                <button
                                    className="student__item__button student__item__button--delete"
                                    onClick={() => deleteUser(student.user_id)}
                                >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
}
