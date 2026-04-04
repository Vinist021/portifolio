import { Explorer101 } from "@react95/icons"
import { TaskBar, List } from "@react95/core"
import xp from "../shared/assets/xp.png"

export default function DesktopTaskBar({ openAboutModal }) {

    return (
        <TaskBar list={
            <List width="225px">
                <List.Item icon={<Explorer101 variant="32x32_4" />} onClick={() => openAboutModal()}>
                    Sobre
                </List.Item>
                <List.Item style={{ paddingInlineStart: 10 }} icon={<img src={xp} alt="Experiência" width="32px" height="32px" style={{ marginRight: 5 }} />}>
                    Experiência
                </List.Item>
            </List>
        } />
    )
}