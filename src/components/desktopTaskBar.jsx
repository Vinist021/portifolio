import { Explorer101 } from "@react95/icons"
import { TaskBar, List } from "@react95/core"

export default function DesktopTaskBar({ openAboutModal }) {

    return (
        <TaskBar list={
            <List width="225px">
                <List.Item icon={<Explorer101 variant="32x32_4" />} onClick={() => openAboutModal()}>
                    Sobre
                </List.Item>
            </List>
        } />
    )
}