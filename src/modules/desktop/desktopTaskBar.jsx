import { Explorer101, Progman11 } from "@react95/icons"
import { TaskBar, List } from "@react95/core"
import xp from "../../assets/images/xp.png"

export default function DesktopTaskBar({ openAboutModal, openExperienceModal, openTechnologiesModal }) {

    return (
        <TaskBar list={
            <List width="225px">
                <List.Item icon={<Explorer101 variant="32x32_4" />} onClick={openAboutModal}>
                    Sobre
                </List.Item>
                <List.Item 
                  style={{ paddingInlineStart: 5 }}
                  icon={<img src={xp} alt="Experiência" width="38px" height="32px" style={{ marginRight: 5 }} />}
                  onClick={openExperienceModal}>
                    Experiência
                </List.Item>
                <List.Item icon={<Progman11 variant="32x32_4" />} onClick={openTechnologiesModal}>
                    Tecnologias
                </List.Item>
            </List>
        } />
    )
}