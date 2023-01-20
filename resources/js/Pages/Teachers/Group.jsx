import React, { useState, useEffect } from "react";
import Header from "@/Components/Teacher/Header";
import GroupStatistics from "@/Components/Teacher/GroupStatistics";
import GroupOverview from "@/Components/Teacher/GroupOverview";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import "../../../css/pages/Teachers/overviewGroup.css";

function Overview(props) {
    // console.log(props);
    const [activeSection, setActiveSection] = useState("statistieken");

    function changeActiveSection(section) {
        setActiveSection(section);
    }

    if (props.students.length < 1 && activeSection == "statistieken") {
        setActiveSection("leerlingen");
    }

    useEffect(() => {
        const param = new URL(location.href).searchParams.get("overzicht");
        switch (param) {
            case "statistieken":
                setActiveSection("statistieken");
                break;
            case "leerlingen":
                setActiveSection("leerlingen");
                break;
            default:
                setActiveSection("statistieken");
                break;
        }
    }, []);

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

                {props.students.length > 0 && (
                    <div className="group__overview__menu">
                        <button
                            onClick={() => changeActiveSection("statistieken")}
                            className={`group__overview__menuItem ${
                                activeSection == "statistieken" ? "active" : ""
                            }`}
                        >
                            Groep statistieken
                        </button>
                        <button
                            onClick={() => changeActiveSection("leerlingen")}
                            className={`group__overview__menuItem ${
                                activeSection == "leerlingen" ? "active" : ""
                            }`}
                        >
                            Overzicht leerlingen
                        </button>
                    </div>
                )}
            </section>

            {activeSection == "statistieken" && (
                <GroupStatistics
                    allResults={props.allResults}
                    assignments={props.assignments}
                />
            )}

            {activeSection == "leerlingen" && (
                <GroupOverview
                    group={props.group}
                    students={props.students}
                    allResults={props.allResults}
                    assignments={props.assignments}
                />
            )}
        </>
    );
}

export default Overview;
