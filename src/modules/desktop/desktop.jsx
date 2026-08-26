import { useModal } from "@react95/core";
import { useState } from "react";
import { Explorer101 } from "@react95/icons";
import { modals } from "../../shared/utils/modals"
import AboutModal from "../modals/about/aboutModal";
import DesktopIcons from "./desktopIcons";
import DesktopTaskBar from "./desktopTaskBar";
// import ExperienceModal from "../modals/experience/experienceModal";
// import TechnologiesModal from "../modals/technologies/technologiesModal";
import CVModal from "../modals/cv/cvModal";

export default function Desktop() {

    const { add, restore, focus } = useModal();
    // const [showExperience, setShowExperience] = useState(false);
    // const [showTechnologies, setShowTechnologies] = useState(false);
    const [showCV, setShowCV] = useState(false);

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

    // const handleOpenExperienceModal = () => {
    //     setShowExperience(true);
    // };

    // const handleOpenTechnologiesModal = () => {
    //     setShowTechnologies(true);
    // };

    const handleOpenCVModal = () => {
        setShowCV(true);
    }

    return (
        <div className="desktop-surface select-none">
            {/* openExperienceModal={handleOpenExperienceModal} */}
            {/* openTechnologiesModal={handleOpenTechnologiesModal} */}
            <DesktopTaskBar openAboutModal={handleOpenAboutModal} openCVModal={handleOpenCVModal} />

            {/* openExperienceModal={handleOpenExperienceModal} */}
            {/* openTechnologiesModal={handleOpenTechnologiesModal} */}
            <DesktopIcons openAboutModal={handleOpenAboutModal} openCVModal={handleOpenCVModal} />
            
            <AboutModal id={modals.about} nextStep={handleOpenCVModal} />

            {/* {showExperience && (<ExperienceModal id={modals.experience} nextStep={handleOpenTechnologiesModal} onClose={() => setShowExperience(false)} />)} */}
            {/* {showTechnologies && (<TechnologiesModal id={modals.tecnologies} nextStep={handleOpenCVModal} onClose={() => setShowTechnologies(false)} />)} */}
            {showCV && (<CVModal id={modals.cv} onClose={() => setShowCV(false)} />)}
        </div>
    )
}
