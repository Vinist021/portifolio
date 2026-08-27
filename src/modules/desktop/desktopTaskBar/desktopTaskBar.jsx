import { Explorer101, Awschd32400 } from "@react95/icons"
import { TaskBar, List } from "@react95/core"
import SocialMenu from "./socialMenu"
// import xp from "../../assets/images/xp.png"

export default function DesktopTaskBar({
    openAboutModal,
    // openExperienceModal,
    // openTechnologiesModal,
    openCVModal
}) {

    return (
        <TaskBar className="desktop-taskbar" list={
            <List className="desktop-start-menu" width="225px">
                <SocialMenu />
                <List.Item icon={<Explorer101 variant="32x32_4" />} onClick={openAboutModal}>
                    Sobre
                </List.Item>
                {/* <List.Item
                  style={{ paddingInlineStart: 5 }}
                  icon={<img src={xp} alt="Experiência" width="38px" height="32px" style={{ marginRight: 5 }} />}
                  onClick={openExperienceModal}>
                    Experiência
                </List.Item> */}
                {/* <List.Item icon={<Progman11 variant="32x32_4" />} onClick={openTechnologiesModal}>
                    Tecnologias
                </List.Item> */}
                <List.Item icon={<Awschd32400 variant="32x32_4" />} onClick={openCVModal}>
                    CV
                </List.Item>
            </List>
        } />
    )
}
