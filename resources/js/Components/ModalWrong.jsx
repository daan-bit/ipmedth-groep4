import React from "react";
import Modal from "./Modal";
import { AiOutlineClose } from "react-icons/ai";
import "../../css/components/modalGoodWrong.css";
import "../../css/components/button.css";

export default function ModalWrong({
    modelState = false,
    setModelState = false,
    tryDrawingAgain,
    updateDrawing,
}) {
    return (
        <Modal
            content={
                <React.Fragment>
                    <section data-status="wrong" className="wrapper">
                        <h2 className="u_zindex">Aaah jammer</h2>
                        <AiOutlineClose size={100} color={"#DB3069"} className="u_zindex" />
                        <section className="button_wrapper u_zindex">
                            <button
                                className="button button-primary"
                                onClick={() => tryDrawingAgain()}
                            >
                                Opnieuw
                            </button>
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
