import { useModal } from "@react95/core";
import { useState } from "react";
import { Explorer101 } from "@react95/icons";
import { modals } from "../shared/utils/modals";
import AboutModal from "./modals/aboutModal";
import DesktopIcons from "./desktopIcons";
import DesktopTaskBar from "./desktopTaskBar";
import ExperienceModal from "./modals/experienceModal";

export default function Desktop() {

    const { add, restore, focus } = useModal();
    const [showExperience, setShowExperience] = useState(false);

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
        setShowExperience(true);
    };

    return (
        <>
            <DesktopTaskBar openAboutModal={handleOpenAboutModal} openExperienceModal={handleOpenExperienceModal} />

            <DesktopIcons openAboutModal={handleOpenAboutModal} openExperienceModal={handleOpenExperienceModal} />

            <AboutModal id={modals.about} nextStep={handleOpenExperienceModal} />
            {showExperience && (
                <ExperienceModal id={modals.experience} onClose={() => setShowExperience(false)} />
            )}
        </>
    )
}