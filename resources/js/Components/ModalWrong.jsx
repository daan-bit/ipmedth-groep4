import React from "react";
import Modal from "./Modal";
import { AiOutlineClose } from "react-icons/ai";
import "../../css/components/modalGoodWrong.css";
import "../../css/components/button.css";

export default function ModalWrong({
    modelState = false,
    setModelState = false,
    tryDrawingAgain,
    updateDrawing
}) {
    return (
        <Modal
            content={
                <React.Fragment>
                    <section data-status="wrong" className="wrapper">
                        <h2>Aaah jammer</h2>
                        <AiOutlineClose size={100} color={"#DB3069"} />
                        <p>
                            Als de computer fout geraden heeft kan je de
                            juffvrouw/meester om hulp vragen
                        </p>
                        <section className="button_wrapper">
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
                    </section>
                </React.Fragment>
            }
            modelState={modelState}
            setModelState={setModelState}
            bgClosePopUp={false}
        ></Modal>
    );
}
