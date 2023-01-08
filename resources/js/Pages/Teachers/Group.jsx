import React, { useState } from "react";
import Header from "@/Components/Teacher/Header";
import GroupStatistics from "@/Components/Teacher/GroupStatistics";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import "../../../css/pages/Teachers/overviewGroup.css";

function Overview(props) {
    console.log(props);
    const [activeSection, setActiveSection] = useState("statistieken");

    function changeActiveSection(section) {
        setActiveSection(section);
    }

    return (
        <>
            <Header first_name={props.employee.first_name} />
            <section className="group__overview__container">
                <div className="group__overview__container-row">
                    <div className="group__overview__button__container">
                        <ResponsiveNavLink
                            as="button"
                            href={route("docent.overzicht")}
                            className={
                                "button-primary group__overview__backButton"
                            }
                        >
                            Terug
                        </ResponsiveNavLink>
                    </div>
                    <h1 className="group__overview__title">
                        Overzicht {props.group.school_group}
                    </h1>
                </div>

                <div className="group__overview__menu">
                    
                    <button onClick={() => changeActiveSection("statistieken")} className={`group__overview__menuItem ${activeSection == "statistieken" ? "active" : ""}`}>
                        Groep statistieken
                    </button>
                    <button onClick={() => changeActiveSection("leerlingen")} className={`group__overview__menuItem ${activeSection == "leerlingen" ? "active" : ""}`}>
                        Overzicht leerlingen
                    </button>
                </div>
            </section>

            {activeSection == "statistieken" && (
                <GroupStatistics
                    allResults={props.allResults}
                    assignments={props.assignments}
                />
            )}

            {activeSection == "leerlingen" && (
                <>
                    <article>
                        <h1>id: {props.group.id}</h1>
                        <p>school_group: {props.group.school_group}</p>
                        <p>school_id: {props.group.school_id}</p>
                        <p>school_year: {props.group.school_year}</p>
                    </article>
                    <article>
                        <h2>Students</h2>
                        <ul>
                            {props.students.map((student) => (
                                <li key={student.id}>
                                    <h3>id: {student.id}</h3>
                                    <p>first_name: {student.first_name}</p>
                                    <p>user_id: {student.user_id}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </>
            )}
        </>
    );
}

export default Overview;
