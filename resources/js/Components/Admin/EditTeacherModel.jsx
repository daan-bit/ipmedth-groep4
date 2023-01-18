import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "../../../css/components/Teacher/GroupModel.css";
import ResponsiveNavLink from "../ResponsiveNavLink";

// First_name (username) (input)
// Last_name (input)
// Email (input)
// School_id (get from props)
// Password (input)
// role_id (assigned in controller)

export default function AddTeacherModel({
    closeModel,
    current_username,
    current_lastname,
    current_email,
    user_id,
}) {
    const addTeacherModelForm = React.useRef();
    const [usernameError, setUsernameError] = React.useState(false);
    const [lastnameError, setLastnameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] =
        React.useState(false);

    // values
    const [username, setUsername] = React.useState(current_username);
    const [lastname, setLastname] = React.useState(current_lastname);
    const [email, setEmail] = React.useState(current_email);

    const getFormData = () => {
        const formData = new FormData(addTeacherModelForm.current);
        return Object.fromEntries(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, lastname, email } = getFormData();

        setUsernameError(false);
        setLastnameError(false);
        setEmailError(false);

        // Check if username is valid (min 3 characters) (regex)
        const usernameIsValid = username.match(/^[a-zA-Z0-9]{3,}$/);

        // Check if lastname is valid (min 3 characters, can have spaces) (regex)
        const lastnameIsValid = lastname.match(/^[a-zA-Z0-9 ]{3,}$/);

        // Check if email is valid (regex)
        const emailIsValid = email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if (!usernameIsValid) {
            setUsernameError(
                "De gebruikersnaam moet minimaal 3 karakters bevatten"
            );
        }

        if (!lastnameIsValid) {
            setLastnameError(
                "De achternaam moet minimaal 3 karakters bevatten"
            );
        }

        if (!emailIsValid) {
            setEmailError("Het emailadres is niet geldig");
        }

        if (usernameIsValid && lastnameIsValid && emailIsValid) {
            Inertia.put(`/docent/${user_id}`, {
                username,
                lastname,
                email,
            });
            closeModel();
        }
    };

    const handleDelete = () => {
        Inertia.delete(`/docent/${user_id}`);
        closeModel();
    };

    return (
        <div className="group__modal">
            <div className="group__modal__overlay" onClick={closeModel}></div>
            <div className="group__modal__content">
                {showDeleteConfirmation ? (
                    <div className="group__modal__deleteConfirmation">
                        <h2 className="group__modal__deleteTitle">
                            Weet je zeker dat je deze docent wilt verwijderen?
                        </h2>
                        <div className="group__modal__deleteConfirmation__buttons">
                            <button
                                className="group__modal__deleteConfirmation__button group__modal__deleteConfirmation__button--cancel"
                                onClick={() => setShowDeleteConfirmation(false)}
                            >
                                Annuleer
                            </button>
                            <button
                                className="group__modal__deleteConfirmation__button group__modal__deleteConfirmation__button--confirm"
                                onClick={handleDelete}
                            >
                                Verwijder docent
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="group__modal__header">
                            <h2 className="group__modal__title">
                                Nieuwe docent
                            </h2>
                            <button
                                className="group__modal__closeButton"
                                onClick={closeModel}
                            >
                                X
                            </button>
                        </div>
                        <div className="group__modal__body">
                            <form
                                className="group__modal__form"
                                name="teacherModelForm"
                                ref={addTeacherModelForm}
                            >
                                <div className="group__modal__form__group">
                                    <label htmlFor="username">
                                        Gebruikersnaam
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="group__modal__form__input"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />

                                    {usernameError && (
                                        <div className="group__modal__form__error">
                                            <p>{usernameError}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="group__modal__form__group">
                                    <label htmlFor="lastname">Achternaam</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        className="group__modal__form__input"
                                        value={lastname}
                                        onChange={(e) =>
                                            setLastname(e.target.value)
                                        }
                                    />

                                    {lastnameError && (
                                        <div className="group__modal__form__error">
                                            <p>{lastnameError}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="group__modal__form__group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="group__modal__form__input"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />

                                    {emailError && (
                                        <div className="group__modal__form__error">
                                            <p>{emailError}</p>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="group__modal__footer">
                            <button
                                className="group__modal__delete button-secondary"
                                onClick={() => setShowDeleteConfirmation(true)}
                                as="button"
                            >
                                Verwijder docent
                            </button>
                            <button
                                className="group__modal__submit button-primary"
                                onClick={handleSubmit}
                                as="button"
                            >
                                Wijzig docent
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
