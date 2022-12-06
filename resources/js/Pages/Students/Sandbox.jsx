import React from "react";
import { Head } from '@inertiajs/inertia-react';
import AICanvas from "@/Components/Student/AICanvas/AICanvas";

const styles = {
    section: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexdirection: "column",
    },
}

export default function Sandbox(props) {
    return (
        <section style={styles.section}>
            <Head title="🏖️ Sandbox" />
            <AICanvas style={styles.canvas} id="canvas" />
        </section>
    )
}