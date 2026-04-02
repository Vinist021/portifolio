import { useModal } from "@react95/core";
import { Explorer101 } from "@react95/icons";
import { modals } from "../shared/utils/modals";
import AboutModal from "./aboutModal";
import DesktopIcons from "./desktopIcons";
import DesktopTaskBar from "./desktopTaskBar";

export default function Desktop() {

    const { add, restore, focus } = useModal();

    const handleOpenAboutModal = () => {
        add({
            id: modals.about,
            title: 'Sobre',
            icon: <Explorer101 variant="32x32_4" />,
            hasButton: true
        });
        restore(modals.about);
        focus(modals.about);
    };

    return (
        <>
            <DesktopTaskBar openAboutModal={handleOpenAboutModal} />

            <DesktopIcons openAboutModal={handleOpenAboutModal} />

            <AboutModal id={modals.about} />
        </>
    )
}