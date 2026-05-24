import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Explorer101 } from "@react95/icons";
import xp from '../shared/assets/images/xp.png'

export default function ExperienceModal({ id = 'experience', onClose }) {
    const { remove, minimize } = useModal();

    const handleClose = () => {
        minimize(id);
        remove(id);
        if (onClose) onClose();
    };

    const handleButtonClick = (e) => alert(e.currentTarget.value);

    return (
        <Modal id={id} icon={<><img src={xp} alt="xp" width="20px" height="16px" style={{ marginRight: 3 }}/></>} title="Experiência" dragOptions={{
            defaultPosition: {
                x: 350,
                y: 150
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
            <Modal.Content width="400px" height="300px" boxShadow="$in" bgColor="white">
                <Frame as="div" display="flex" flexDirection="column" gap="8px">
                    <h4 className="mt-1 text-center text-2xl">Experiência</h4>
                </Frame>
            </Modal.Content>
        </Modal>
    )
}
