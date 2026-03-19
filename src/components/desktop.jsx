import { List, TaskBar } from "@react95/core";
import { Explorer100, Explorer101 } from "@react95/icons";


export default function Desktop() {
    return (
        <TaskBar list={
            <List width="225px">
                <List.Item icon={<Explorer101 variant="32x32_4"/>}>
                    Sobre
                </List.Item>
            </List>
        } />
    )
}