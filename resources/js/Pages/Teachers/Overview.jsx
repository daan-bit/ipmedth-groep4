import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Header from "@/Components/Teacher/Header";
import "../../../css/pages/Teachers/overview.css";
import AddGroupModel from "@/Components/Teacher/AddGroupModel";
import EditGroupModel from "@/Components/Teacher/EditGroupModel";

function Overview(props) {
    console.log(props);
    const [showAddGroupModel, setShowAddGroupModel] = React.useState(false);
    const [showEditGroupModel, setShowEditGroupModel] = React.useState(false);
    const [groupToEdit, setGroupToEdit] = React.useState(null);
    const groups = Object.keys(props.groups).map((key) => props.groups[key]);

    // sort groups by school_year and name
    let sortGroups = (a, b) => {
        // sort by school year, descending
        if (a.school_year > b.school_year) {
            return -1;
        }
        if (a.school_year < b.school_year) {
            return 1;
        }
        // if school year is equal, sort by school group, descending
        if (a.school_year == b.school_year) {
            if (a.school_group > b.school_group) {
                return -1;
            }
            if (a.school_group < b.school_group) {
                return 1;
            }
        }
        // if school year and group are equal, leave the order unchanged
        return 0;
    };
    groups.sort(sortGroups);

    const openAddGroupModel = (e) => {
        e.preventDefault();
        setShowAddGroupModel(true);
    };

    const closeAddGroupModel = () => {
        setShowAddGroupModel(false);
    };

    const openEditGroupModel = (
        school_id,
        school_year,
        school_group,
        group_id
    ) => {
        setGroupToEdit({ school_id, school_year, school_group, group_id });
        setShowEditGroupModel(true);
    };

    const closeEditGroupModel = () => {
        setShowEditGroupModel(false);
    };

    return (
        <section className="teacherOverview">
            <Header first_name={props.employee.first_name} />
            <div className="page__title__wrapper">
                <h1 className="page__title">Overzicht</h1>
                <button
                    className="addGroup__button"
                    onClick={(e) => openAddGroupModel(e)}
                >
                    + Nieuwe groep
                </button>
            </div>
            {showAddGroupModel ? (
                <AddGroupModel
                    closeModel={closeAddGroupModel}
                    school_id={props.employee.school_id}
                    employee_id={props.employee.id}
                />
            ) : null}
            <section className="groups__overview">
                {/* if there are no groups in props.groups array render this: */}
                {props.groups.length === 0 ? (
                    <div className="groups__overview__noGroups">
                        <p className="groups__overview__noGroups__text">
                            Je hebt nog geen groepen, voeg er een toe!
                        </p>
                    </div>
                ) : (
                    <div className="groups__overview__groups">
                        {showEditGroupModel ? (
                            <EditGroupModel
                                closeModel={closeEditGroupModel}
                                school_id={groupToEdit.school_id}
                                school_year={groupToEdit.school_year}
                                school_group={groupToEdit.school_group}
                                group_id={groupToEdit.group_id}
                            />
                        ) : null}

                        {groups.map((group) => (
                            <div className="group__card" key={group.id}>
                                <div className="group__card__header">
                                    <h2 className="group__card__title">
                                        {group.school_group}
                                    </h2>
                                    <p className="group__card__subtitle">
                                        {group.school_year}
                                    </p>
                                    <button
                                        className="group__card__edit__button"
                                        onClick={() =>
                                            openEditGroupModel(
                                                props.employee.school_id,
                                                group.school_year,
                                                group.school_group,
                                                group.id
                                            )
                                        }
                                    >
                                        <span class="material-symbols-outlined">
                                            more_vert
                                        </span>
                                    </button>
                                    <div className="group__card__line"></div>
                                </div>
                                <div className="group__card__body">
                                    <p className="group__card__body__students__text">
                                        {group.student_count}{" "}
                                        {group.student_count === 1
                                            ? "leerling"
                                            : "leerlingen"}
                                    </p>
                                </div>
                                <div className="group__card__footer">
                                    <ResponsiveNavLink
                                        method="get"
                                        className="group__card__footer__link button-primary"
                                        href={`/docent/overzicht/${group.id}`}
                                        as="button"
                                    >
                                        Bekijk groep
                                    </ResponsiveNavLink>
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
