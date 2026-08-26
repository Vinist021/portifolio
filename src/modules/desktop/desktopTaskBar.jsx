import { Explorer101, Awschd32400, Wab321019 } from "@react95/icons"
import { TaskBar, List } from "@react95/core"
// import xp from "../../assets/images/xp.png"
import { ListItem } from "@react95/core/ListItem"

  const socials = [
    {
      id: 0,
      name: "Github",
      url: "https://github.com/Vinist021",
    },
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vinicius-dos-santos-teixeira/",
    },
  ];

export default function DesktopTaskBar({
    openAboutModal,
    // openExperienceModal,
    // openTechnologiesModal,
    openCVModal
}) {

    return (
        <TaskBar list={
            <List width="225px">
                <List.Item icon={<Wab321019 variant="32x32_4" />}>
                    Social
                    <List>
                        {socials.map((social) => (
                            <ListItem key={social.id} onClick={() => window.open(social.url, "_blank")}>
                                {social.name}
                            </ListItem>
                        ))}
                    </List>
                </List.Item>
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
