import { List, TaskBar, useModal, Modal, Frame } from "@react95/core";
import { Explorer100, Explorer101, Mmsys113 } from "@react95/icons";
import { useEffect } from "react";

export default function Desktop() {

    const modals = {
        sobre: 'sobre'
    }

    const {
        add,
        remove,
        minimize,
        restore,
        focus
    } = useModal()

    useEffect(() => {
        // Register modals with the modal manager so they appear in the TaskBar
        add({
            id: modals.sobre,
            title: 'Sobre',
            icon: <Mmsys113 variant="32x32_4" />,
            hasButton: true

        });

        // Optionally restore the first modal on mount
        restore(modals.sobre);
    }, [add, modals.sobre, restore]);

    const handleCloseSobreModal = () => {
        minimize(modals.sobre);
        remove(modals.sobre);
    };

    const handleMinimizeSobreModal = () => {
        minimize(modals.sobre);
        focus('no-id');
    };

    const handleRestoreSobreModal = () => {
        add({
            id: modals.sobre,
            title: 'First Modal',
            icon: <Mmsys113 variant="32x32_4" />,
            hasButton: true
        });
        restore(modals.sobre);
        focus(modals.sobre);
    };

    const handleFocusSobre = () => focus(modals.sobre);
    const handleButtonClick = (e) => alert(e.currentTarget.value);

    return (
        <>
            <TaskBar list={
                <List width="225px">
                    <List.Item icon={<Explorer101 variant="32x32_4" />}>
                        Sobre
                    </List.Item>
                </List>
            } />

            <Modal id="first-modal" icon={<Mmsys113 variant="32x32_4" />} title="First Modal" dragOptions={{
                defaultPosition: {
                    x: 50,
                    y: 100
                }
            }} titleBarOptions={<Modal.Minimize />} buttons={[{
                value: 'Ok',
                onClick: handleButtonClick
            }, {
                value: 'Cancel',
                onClick: handleButtonClick
            }]} menu={[{
                name: 'File',
                list: <List width="200px">
                    <List.Item onClick={handleCloseSobreModal}>Exit</List.Item>
                </List>
            }, {
                name: 'Edit',
                list: <List width="200px">
                    <List.Item>Copy</List.Item>
                </List>
            }]}>
                <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
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

        </>
    )
}