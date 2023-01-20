import "./bootstrap";
import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "LerenTekenen";

function checkScreenSize(root, App, props) {
    if (document.documentElement.clientWidth > 750)
        root.render(<App {...props} />);
    else {
        root.render(
            <section>
                <h1>Te klein scherm</h1>
                <p>
                    Het gebruikte scherm is te klein. Gebruik een groter
                    apparaat zoals een tablet of computer.
                </p>
            </section>
        );
    }
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        //checks size of the users screen, get called before the resize event because resize is called if the screen changes.
        checkScreenSize(root, App, props);
        window.addEventListener("resize", () => {
            checkScreenSize(root, App, props);
        });
    },
});

InertiaProgress.init({ color: "#4B5563" });
