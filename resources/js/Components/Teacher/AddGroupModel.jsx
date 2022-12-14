import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "../../../css/components/Teacher/AddGroupModel.css";
import ResponsiveNavLink from "../ResponsiveNavLink";

export default function AddGroupModel({ closeModel, school_id, employee_id }) {
    const addGroupModelForm = React.useRef();
    const [schoolYearError, setSchoolYearError] = React.useState(false);
    const [schoolGroupError, setSchoolGroupError] = React.useState(false);

    const getFormData = () => {
        const formData = new FormData(addGroupModelForm.current);
        return Object.fromEntries(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { school_year, school_group } = getFormData();

        setSchoolYearError(false);
        setSchoolGroupError(false);

        const schoolYearIsValid = school_year.match(/^\d{4}-\d{4}$/);
        const schoolGroupIsValid = school_group.match(/^Groep \d{1,2}[a-zA-Z]{0,2}$/);

        if (!schoolYearIsValid) {
            setSchoolYearError(
                "Het schooljaar moet er als volgt uitzien: 2022-2023"
            );
        } 
        
        if (!schoolGroupIsValid) {
            setSchoolGroupError("De groep moet er als volgt uitzien: Groep 3A");
        } 
        
        if (schoolYearIsValid && schoolGroupIsValid) {
            Inertia.post("/docent/groep", {
                school_year,
                school_group,
                school_id,
                employee_id,
            });
            closeModel();
        }
    };

    let oldSchoolYearValue = "";
    const school_year_mask = (value) => {
        if (value.length <= 4) {
            value = value.replace(/\D/g, "");
        }

        if (value.length == 8 && value.length < oldSchoolYearValue.length) {
            return "";
        }

        // if the value is longer than 4 but shorter than 9, only leave the first 4 characters
        if (value.length > 4 && value.length < 9) {
            value = value.slice(0, 4);
        }

        if (value.length > 9) {
            value = value.slice(0, 9);
        }

        if (value.length == 4 && value.length > oldSchoolYearValue.length) {
            value = `${value}-${+value + 1}`;
        }

        if (value.match(/^\d{4}-\d{4}$/)) {
            setSchoolYearError(false);
        }

        oldSchoolYearValue = value;
        return value;
    };

    // add a mask to the school_group input field to format the input like Groep 1A
    const school_group_mask = (value) => {
        // The first 6 characters should always be "Groep " if not, replace the first 6 characters with "Groep "
        if (value.length < 6) {
            value = "Groep " + value.slice(6);
        } else if (value.slice(0, 6) != "Groep ") {
            value = "Groep " + value.slice(6);
        }
        // allow only "Groep " + 1 digit + 2 letters
        if (value.length > 9) {
            value = value.slice(0, 9);
        }

        // if the 7th character is not a digit, remove it
        if (value.length > 6 && !/\d/.test(value[6])) {
            value = value.slice(0, 6) + value.slice(7);
        }

        // if the 8th character is not a letter, remove it
        if (value.length > 7 && !/[a-zA-Z]/.test(value[7])) {
            value = value.slice(0, 7) + value.slice(8);
        }

        // if the 9th character is not a letter, remove it
        if (value.length > 8 && !/[a-zA-Z]/.test(value[8])) {
            value = value.slice(0, 8);
        }

        if (value.match(/^Groep \d{1,2}[a-zA-Z]{0,2}$/)) {
            setSchoolGroupError(false);
        }

        return value;
    };

    return (
        <div className="addGroup__modal">
            <div className="addGroup__modal__overlay" onClick={closeModel}></div>
            <div className="addGroup__modal__content">
                <div className="addGroup__modal__header">
                    <h2 className="addGroup__modal__title">Nieuwe groep</h2>
                    <button className="addGroup__modal__closeButton" onClick={closeModel}>X</button>
                </div>
                <div className="addGroup__modal__body">
                    <form
                        className="addGroup__modal__form"
                        name="addGroupModelForm"
                        ref={addGroupModelForm}
                    >
                        <div className="addGroup__modal__form__group">
                            <label
                                className="addGroup__modal__form__label"
                                htmlFor="school_year"
                            >
                                Schooljaar
                            </label>
                            {/* school_year need to be formatted like 2022-2023 use a mask for this */}
                            <input
                                className={`addGroup__modal__form__input ${schoolYearError && "invalid"}`}
                                type="text"
                                name="school_year"
                                id="school_year"
                                onChange={(e) => {
                                    e.target.value = school_year_mask(
                                        e.target.value
                                    );
                                }}
                                placeholder={
                                    new Date().getFullYear() +
                                    "-" +
                                    (new Date().getFullYear() + 1)
                                }
                            />
                            {/* Add a place for a error message, and render only when there is something wrong in this form field */}
                            {schoolYearError && (
                                <div className="addGroup__modal__form__error">
                                    <p>{schoolYearError}</p>
                                </div>
                            )}
                        </div>
                        <div className="addGroup__modal__form__group">
                            <label
                                className="addGroup__modal__form__label"
                                htmlFor="school_group"
                            >
                                Groep
                            </label>
                            <input
                                className={`addGroup__modal__form__input ${schoolGroupError && "invalid"}`}
                                type="text"
                                name="school_group"
                                id="school_group"
                                placeholder="Groep 3A"
                                onChange={(e) => {
                                    e.target.value = school_group_mask(
                                        e.target.value
                                    );
                                }}
                                onClick={(e) => {
                                    if (e.target.value.length == 0) {
                                        e.target.value = "Groep ";
                                    }
                                }}
                                onFocus={(e) => {
                                    if (e.target.value.length == 0) {
                                        e.target.value = "Groep ";
                                    }
                                }}
                                onBlur={(e) => {
                                    if (e.target.value == "Groep ") {
                                        e.target.value = "";
                                    }
                                }}
                            />
                            {schoolGroupError && (
                                <div className="addGroup__modal__form__error">
                                    <p>{schoolGroupError}</p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
                <div className="addGroup__modal__footer">
                    <button
                        className="addGroup__modal__submit button-primary"
                        onClick={handleSubmit}
                        as="button"
                    >
                        Toevoegen
                    </button>
                </div>
            </div>
        </div>
    );
}
