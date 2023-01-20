import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Header from "@/Components/Teacher/Header";
import "../../../css/pages/Admin/overview.css";
import AddTeacherModel from "@/Components/Admin/AddTeacherModel";
import EditTeacherModel from "@/Components/Admin/EditTeacherModel";

function Overview(props) {
    const [showAddTeacherModel, setShowAddTeacherModel] = React.useState(false);
    const [showEditTeacherModel, setShowEditTeacherModel] = React.useState(false);
    const [teacherToEdit, setTeacherToEdit] = React.useState(null);

    const openAddTeacherModel = (e) => {
        e.preventDefault();
        setShowAddTeacherModel(true);
    };

    const closeAddTeacherModel = () => {
        setShowAddTeacherModel(false);
    };

    const openEditTeacherModel = (
        username,
        lastname,
        email,
        user_id
    ) => {
        setTeacherToEdit({ username, lastname, email, user_id });
        setShowEditTeacherModel(true);
    };

    const closeEditTeacherModel = () => {
        setShowEditTeacherModel(false);
    };

    return (
        <section className="adminOverview">
            <Header first_name={props.employee.first_name} />
            <div className="page__title__wrapper">
                <h1 className="page__title">Overzicht</h1>
                <button
                    className="addTeacher__button"
                    onClick={(e) => openAddTeacherModel(e)}
                >
                    + Voeg docent toe
                </button>
            </div>
            {showAddTeacherModel ? (
                <AddTeacherModel
                    closeModel={closeAddTeacherModel}
                    school_id={props.employee.school_id}
                />
            ) : null}
            <section className="teachers__overview">
                {/* if there are no teachers in props.teachers array render this: */}
                {props.teachers.length === 0 ? (
                    <div className="teachers__overview__noTeachers">
                        <p className="teachers__overview__noTeachers__text">
                            Je hebt nog geen groepen, voeg er een toe!
                        </p>
                    </div>
                ) : (
                    <div className="teachers__overview__teachers">
                        {showEditTeacherModel ? (
                            <EditTeacherModel
                                closeModel={closeEditTeacherModel}
                                current_username={teacherToEdit.username}
                                current_lastname={teacherToEdit.lastname}
                                current_email={teacherToEdit.email}
                                user_id={teacherToEdit.user_id}
                            />
                        ) : null}

                        {props.teachers.map((teacher) => (
                            <div className="teacher__card" key={teacher.id}>
                                <div className="teacher__card__header">
                                    <h2 className="teacher__card__title">
                                        {teacher.first_name}
                                    </h2>
                                    <button
                                        className="teacher__card__edit__button"
                                        onClick={() =>
                                            openEditTeacherModel(
                                                teacher.first_name,
                                                teacher.last_name,
                                                teacher.email,
                                                teacher.user_id
                                            )
                                        }
                                    >
                                        <span className="material-symbols-outlined">
                                            more_vert
                                        </span>
                                    </button>
                                    <div className="teacher__card__line"></div>
                                </div>
                                <div className="teacher__card__body">
                                    <p className="teacher__card__body__students__text">
                                        {teacher.group_count}{" "}
                                        {teacher.group_count === 1
                                            ? "groep"
                                            : "groepen"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </section>
    );
}

export default Overview;