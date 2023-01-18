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
    school_id
}) {
    const addTeacherModelForm = React.useRef();
    const [usernameError, setUsernameError] = React.useState(false);
    const [lastnameError, setLastnameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [password_confirmationError, setPassword_confirmationError] =
        React.useState(false);

    const getFormData = () => {
        const formData = new FormData(addTeacherModelForm.current);
        return Object.fromEntries(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, lastname, email, password, password_confirmation } =
            getFormData();

        setUsernameError(false);
        setLastnameError(false);
        setEmailError(false);
        setPasswordError(false);
        setPassword_confirmationError(false);

        // Check if username is valid (min 3 characters) (regex)
        const usernameIsValid = username.match(/^[a-zA-Z0-9]{3,}$/);

        // Check if lastname is valid (min 3 characters, can have spaces) (regex)
        const lastnameIsValid = lastname.match(/^[a-zA-Z0-9 ]{3,}$/);

        // Check if email is valid (regex)
        const emailIsValid = email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        // Check if password is valid (min 8 characters) (regex)
        const passwordIsValid = password.match(/^[a-zA-Z0-9]{8,}$/);

        // Check if password_confirmation is valid when matching password
        const password_confirmationIsValid = (password_confirmation === password);

        if (!usernameIsValid) {
            setUsernameError(
                "De gebruikersnaam moet minimaal 3 karakters bevatten"
            );
        }

        if (!lastnameIsValid) {
            setLastnameError("De achternaam moet minimaal 3 karakters bevatten");
        }

        if (!emailIsValid) {
            setEmailError("Het emailadres is niet geldig");
        }

        if (!passwordIsValid) {
            setPasswordError(
                "Het wachtwoord moet minimaal 8 karakters bevatten"
            );
        }

        if (!password_confirmationIsValid) {
            setPassword_confirmationError(
                "De wachtwoorden komen niet overeen"
            );
        }

        if (
            usernameIsValid &&
            lastnameIsValid &&
            emailIsValid &&
            passwordIsValid &&
            password_confirmationIsValid
        ) {
            Inertia.post("/docent", {
                username,
                lastname,
                email,
                password,
                school_id,
            });
            closeModel();
        }
    };

    return (
        <div className="group__modal">
            <div className="group__modal__overlay" onClick={closeModel}></div>
            <div className="group__modal__content">
                <div className="group__modal__header">
                    <h2 className="group__modal__title">Nieuwe docent</h2>
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
                            <label htmlFor="username">Gebruikersnaam</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="group__modal__form__input"
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
                            />

                            {emailError && (
                                <div className="group__modal__form__error">
                                    <p>{emailError}</p>
                                </div>
                            )}
                        </div>

                        <div className="group__modal__form__group">
                            <label htmlFor="password">Wachtwoord</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="group__modal__form__input"
                            />

                            {passwordError && (
                                <div className="group__modal__form__error">
                                    <p>{passwordError}</p>
                                </div>
                            )}
                        </div>

                        <div className="group__modal__form__group">
                            <label htmlFor="password_confirmation">
                                Wachtwoord bevestigen
                            </label>
                            <input
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                className="group__modal__form__input"
                            />

                            {password_confirmationError && (
                                <div className="group__modal__form__error">
                                    <p>{password_confirmationError}</p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
                <div className="group__modal__footer">
                    <button
                        className="group__modal__submit button-primary"
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
