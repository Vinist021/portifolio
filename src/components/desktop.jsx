import { useModal } from "@react95/core";
import { Explorer101 } from "@react95/icons";
import { modals } from "../shared/utils/modals";
import AboutModal from "./aboutModal";
import DesktopIcons from "./desktopIcons";
import DesktopTaskBar from "./desktopTaskBar";
import ExperienceModal from "./experienceModal";

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

    const handleOpenExperienceModal = () => {
        add({
            id: modals.experience,
            title: 'Experiência',
            icon: <Explorer101 variant="32x32_4" />,
            hasButton: true
        });
        restore(modals.experience);
        focus(modals.experience);
    };

    return (
        <>
            <DesktopTaskBar openAboutModal={handleOpenAboutModal} openExperienceModal={handleOpenExperienceModal} />

            <DesktopIcons openAboutModal={handleOpenAboutModal} openExperienceModal={handleOpenExperienceModal} />

            <AboutModal id={modals.about} nextStep={handleOpenExperienceModal} />
            <ExperienceModal id={modals.experience} />
        </>
    )
}