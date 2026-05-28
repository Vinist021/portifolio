import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Explorer101, Progman11 } from "@react95/icons";

export default function TechnologiesModal({ id = 'technologies', nextStep }) {
    const { remove, minimize } = useModal();

    const handleClose = () => {
        minimize(id);
        remove(id);
    };

    const handleNextStep = () => nextStep();

    return (
        <Modal id={id} icon={<Progman11 variant="32x32_4" />} title="Tecnologias" dragOptions={{
            defaultPosition: {
                x: 250,
                y: 100
            }
        }} titleBarOptions={
            <>
                <Modal.Minimize className="cursor-default" />
                <TitleBar.Close onClick={handleClose} className="cursor-default" />
            </>
        } buttons={[{
            value: 'Próximo',
            onClick: handleNextStep
        },]}>
            <Modal.Content width="400px" height="300px" boxShadow="$in" bgColor="white">
                <Frame as="div" display="flex" flexDirection="column" gap="8px">

                </Frame>
            </Modal.Content>
        </Modal>
    )
}
