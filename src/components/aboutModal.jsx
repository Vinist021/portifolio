import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Explorer101, Mmsys113 } from "@react95/icons";

export default function AboutModal({ id = 'about'}) {
    const { remove, minimize } = useModal();

    const handleClose = () => {
        minimize(id);
        remove(id);
    };

    const handleButtonClick = (e) => alert(e.currentTarget.value);

    return (
        <Modal id={id} icon={<Explorer101 variant="32x32_4" />} title="Sobre" dragOptions={{
            defaultPosition: {
                x: 250,
                y: 100
            }
        }} titleBarOptions={
            <>
                <Modal.Minimize className="cursor-default"/>
                <TitleBar.Close onClick={handleClose} className="cursor-default" />
            </>
        } buttons={[{
            value: 'Ok',
            onClick: handleButtonClick
        }, {
            value: 'Cancel',
            onClick: handleButtonClick
        }]}>
            <Modal.Content width="400px" height="300px" boxShadow="$in" bgColor="white" p="16px">
                <Frame as="div" display="flex" flexDirection="column" gap="8px">
                    <h4>Modal Control</h4>
                    <p>
                        This modal is controlled entirely using the{' '}
                        <code>useModal()</code> hook:
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        margin: '8px 0'
                    }}>
                        <li>
                            <code>minimize(id)</code> - Minimize modal
                        </li>
                        <li>
                            <code>restore(id)</code> - Restore modal
                        </li>
                        <li>
                            <code>focus(id)</code> - Bring to focus
                        </li>
                    </ul>
                    <p>Try the control buttons above or use the TaskBar below.</p>
                </Frame>
            </Modal.Content>
        </Modal>
    )
}
