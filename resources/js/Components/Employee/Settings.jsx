import React, { useState, useEffect } from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Inertia } from "@inertiajs/inertia";
import CustomCollapsible from "@/Components/CustomCollapsible";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

import "../../../css/components/input.css";
import "../../../css/pages/Admin/adminSettings.css";

function Settings(props) {
    const [values, setValues] = useState({
        old_password: "",
        new_password: "",
        new_password_confirm: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const [passwordConfirmError, setpasswordConfirmError] = useState("");

    useEffect(() => {
        setpasswordConfirmError("");
    }, [values]);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        setErrorMessage("");
        if (values.new_password != values.new_password_confirm) {
            setpasswordConfirmError(
                "De wachtwoorden komen niet overeen"
            );
            e.preventDefault();
            return;
        }else if(values.new_password == "" || values.new_password_confirm == ""){
            setpasswordConfirmError("Vul beide velden in");
            e.preventDefault();
            return;
        }

        e.preventDefault();
        Inertia.post("/change-password", values);
        setErrorMessage("Het wachtwoord is onjuist");      
    }

    return (
        <>
            <article className="menuSettingsPage">
                <section className="adminSettingsPage__logoutContainer">
                    <button className="adminSettingsPage__closeButton" onClick={() => {props.showMenu(false)}}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                        className={"button-secundary"}
                    >
                        Log uit
                    </ResponsiveNavLink>
                </section>
                <section className="adminSettingsPage__contentContainer">
                    <section className="contentContainer__content">
                        <CustomCollapsible trigger={"Wijzig wachtwoord"}>
                            <form
                                onSubmit={handleSubmit}
                                className="content__form"
                            >
                                <section className="form__contentBlock">
                                    <label htmlFor="old_password">
                                        Huidig wachtwoord:
                                    </label>
                                    <TextInput
                                        id="old_password"
                                        type="password"
                                        name="old_password"
                                        autoComplete={"old_password"}
                                        value={values.old_password}
                                        isFocused={true}
                                        handleChange={handleChange}
                                    />
                                    {errorMessage && (
                                        <InputError message={errorMessage} />
                                    )}
                                </section>

                                <section className="form__contentBlock">
                                    <label htmlFor="new_password">
                                        Nieuw wachtwoord:
                                    </label>
                                    <TextInput
                                        id="new_password"
                                        type="password"
                                        name="new_password"
                                        value={values.new_password}
                                        handleChange={handleChange}
                                    />
                                    <InputError
                                        message={passwordConfirmError}
                                    />
                                </section>

                                <section className="form__contentBlock">
                                    <label htmlFor="new_password_confirm">
                                        Herhaal nieuw wachtwoord:
                                    </label>
                                    <TextInput
                                        id="new_password_confirm"
                                        type="password"
                                        name="new_password_confirm"
                                        value={values.new_password_password}
                                        handleChange={handleChange}
                                    />
                                    <InputError
                                        message={passwordConfirmError}
                                    />
                                </section>

                                <section className="form__buttonContainer">
                                    <PrimaryButton processing={false}>
                                        Wijzig
                                    </PrimaryButton>
                                </section>
                            </form>
                        </CustomCollapsible>
                    </section>
                </section>
            </article>
            <div
                className="menu__backdrop"
                onClick={() => {
                    props.showMenu(false);
                }}
            ></div>
        </>
    );
}

export default Settings;
