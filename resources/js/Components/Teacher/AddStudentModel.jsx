import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "../../../css/components/Teacher/GroupModel.css";

export default function AddGroupModel({ closeModel, group_id }) {
    const addGroupModelForm = React.useRef();
    const [usernameError, setUsernameError] = React.useState(false);

    const getFormData = () => {
        const formData = new FormData(addGroupModelForm.current);
        return Object.fromEntries(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let { username } = getFormData();
        username = username.trim();

        setUsernameError(false);

        if (
            username === "" ||
            username === null ||
            username === undefined ||
            username.length < 3
        ) {
            setUsernameError(
                "Dit veld mag niet leeg zijn of minder dan 3 karakters bevatten"
            );
            return;
        }

        Inertia.post(`/docent/overzicht/${group_id}/${username}`);
        closeModel();
    };

    return (
        <div className="group__modal">
            <div className="group__modal__overlay" onClick={closeModel}></div>
            <div className="group__modal__content">
                <div className="group__modal__header">
                    <h2 className="group__modal__title">Nieuwe Leerling</h2>
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
                        name="groupModelForm"
                        ref={addGroupModelForm}
                    >
                        <div className="group__modal__form__group">
                            <label
                                className="group__modal__form__label"
                                htmlFor="username"
                            >
                                Gebruikersnaam
                            </label>
                            <input
                                className={`group__modal__form__input ${
                                    usernameError && "invalid"
                                }`}
                                type="text"
                                name="username"
                                id="username"
                                placeholder={"Gebuikersnaam voor de leerling"}
                            />
                            {/* Add a place for a error message, and render only when there is something wrong in this form field */}
                            {usernameError && (
                                <div className="group__modal__form__error">
                                    <p>{usernameError}</p>
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
                        Leerling toevoegen
                    </button>
                </div>
            </div>
        </div>
    );
}
