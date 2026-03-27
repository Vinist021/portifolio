import { List, TaskBar, useModal } from "@react95/core";
import { Explorer101 } from "@react95/icons";
import AboutModal from "./aboutModal";
import { modals } from "../utils/modals";

export default function Desktop() {

    const { restore, focus } = useModal();

    const handleRestoreAboutModal = () => {
        restore(modals.about);
        focus(modals.about);
    };

    return (
        <>
            <TaskBar list={
                <List width="225px">
                    <List.Item icon={<Explorer101 variant="32x32_4" />} onClick={handleRestoreAboutModal}>
                        Sobre
                    </List.Item>
                </List>
            } />

            <AboutModal id={modals.about} />
        </>
    )
}