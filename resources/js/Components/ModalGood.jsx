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
                        <h2 className="u_zindex">Goed gedaan</h2>
                        <AiOutlineCheck size={100} color={"#06D6A0"} className="u_zindex" />
                        <section className="button_wrapper u_zindex">
                            <button
                                className="button button-primary"
                                onClick={() => updateDrawing()}
                            >
                                Volgende
                            </button>
                        </section>
                        <figure className="mascot__figure">
                            <img
                                className="mascot__image"
                                src="/images/mascot.png"
                                alt="Afbeeldingen van de mascotten"
                            />
                        </figure>
                    </section>
                </React.Fragment>
            }
            modelState={modelState}
            setModelState={setModelState}
            bgClosePopUp={false}
        ></Modal>
    );
}
