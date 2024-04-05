import {FC, useState, useRef, useEffect} from 'react';
import {createPortal} from "react-dom";
import "../../styles/component_styles/Modal.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";

interface IModalTemplate {
    fragment: React.ReactNode;
}

export const useModal = ({fragment}: IModalTemplate): any[] => {

    const modalRef = useRef<HTMLDivElement>(document.createElement("div"));
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {

        const handleClick: EventListener = ({target}: Event): void => {
            if (isModalOpen && modalRef.current && !modalRef.current.contains(target as any)) {
                setModalOpen(false);
            }
        };

        window.addEventListener("mousedown", handleClick);
        return () => {
            window.removeEventListener("mousedown", handleClick);
        };

    }, [isModalOpen]);

    const Modal: FC = () => {
        return (
            createPortal(
                isModalOpen && <div className={"Modal-wrapper"}>
                    <div className="Modal" ref={modalRef}>
                        <button className={"Fa-wrapper-button Close-modal--modal"} onClick={() => setModalOpen(false)}>
                            <FontAwesomeIcon icon={faX} className={"Fa-icon"}/>
                        </button>
                        {fragment}
                    </div>
                </div>,
                document.querySelector("#Modal-container") as HTMLElement
            )
        );
    };

    return [isModalOpen, setModalOpen, Modal];

};
