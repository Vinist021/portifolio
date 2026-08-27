import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Awschd32400 } from "@react95/icons";
import CVComponent from "./components/cvPage";
import viniciusCV from '../../../assets/documents/cv.pdf';
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";

export default function CVModal({ id = 'cv', onClose }) {
    const { remove, minimize } = useModal();
    const isMobile = useMediaQuery("(max-width: 767px)");

    const handleClose = () => {
        minimize(id);
        remove(id);
        if (onClose) onClose();
    };

const handleButtonClick = () => {
  window.open(viniciusCV, '_blank');
};

    return (
        <Modal id={id} className="responsive-modal responsive-modal--cv" icon={<Awschd32400 variant="32x32_4" />} title="Curriculum Vitae" dragOptions={{
            bounds: { top: 0, right: 0, bottom: isMobile ? 44 : 28, left: 0 },
            disabled: isMobile,
        }} titleBarOptions={
            <>
                <Modal.Minimize className="cursor-default" />
                <TitleBar.Close onClick={handleClose} className="cursor-default" />
            </>
        } buttons={[{
            value: 'Visualizar',
            onClick: handleButtonClick
        },]}>
            <Modal.Content
                className="responsive-modal__content"
                width="min(92vw, 640px)"
                height="min(88vh, 780px)"
                boxShadow="$in"
                bgColor="white"
                style={{ overflowY: 'auto', overflowX: 'hidden' }}
            >
                <Frame as="div" display="flex" flexDirection="column" gap="8px" height="100%" minHeight="0">
                    <CVComponent />
                </Frame>
            </Modal.Content>
        </Modal>
    )
}
