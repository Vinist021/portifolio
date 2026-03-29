import { List, TaskBar, useModal } from "@react95/core";
import { Explorer101, Mmsys113 } from "@react95/icons";
import AboutModal from "./AboutModal";
import { modals } from "../utils/modals";

export default function Desktop() {

    const { add, restore, focus } = useModal();

    const handleOpenAboutModal = () => {
        add({
            id: modals.about,
            title: 'Sobre',
            icon: <Mmsys113 variant="32x32_4" />,
            hasButton: true
        });
        restore(modals.about);
        focus(modals.about);
    };

    return (
        <>
            <TaskBar list={
                <List width="225px">
                    <List.Item icon={<Explorer101 variant="32x32_4" />} onClick={handleOpenAboutModal}>
                        Sobre
                    </List.Item>
                </List>
            } />

            <AboutModal id={modals.about} />
        </>
    )
}