import React from "react";
import Modal from "./Modal";
import { AiOutlineCheck } from "react-icons/ai";
import "../../css/components/modalGoodWrong.css";
import "../../css/components/button.css";

export default function ModalGood({
    modelState = false,
    setModelState = false,
    updateDrawing,
}) {
    return (
        <Modal
            content={
                <React.Fragment>
                    <section data-status="good" className="wrapper">
                        <h2>Goed gedaan</h2>
                        <AiOutlineCheck size={100} color={"#06D6A0"} />
                        <section className="button_wrapper">
                            <button
                                className="button button-primary"
                                onClick={() => updateDrawing()}
                            >
                                Volgende
                            </button>
                        </section>
                    </section>
                </React.Fragment>
            }
            modelState={modelState}
            setModelState={setModelState}
        ></Modal>
    );
}
