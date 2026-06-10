import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Awschd32400, Explorer101 } from "@react95/icons";
import CVComponent from "./components/cvPage";

export default function CVModal({ id = 'cv', onClose }) {
    const { remove, minimize } = useModal();

    const handleClose = () => {
        minimize(id);
        remove(id);
        if (onClose) onClose();
    };

    const handleButtonClick = (e) => alert(e.currentTarget.value);

    return (
        <Modal id={id} icon={<Awschd32400 variant="32x32_4" />} title="Curriculum Vitae" dragOptions={{
            defaultPosition: {
                x: 550,
                y: 0
            }
        }} titleBarOptions={
            <>
                <Modal.Minimize className="cursor-default" />
                <TitleBar.Close onClick={handleClose} className="cursor-default" />
            </>
        } buttons={[{
            value: 'Próximo',
            onClick: handleButtonClick
        },]}>
            <Modal.Content
                width="min(92vw, 800px)"
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