import { useState } from "react"
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery"
import { ListItem } from "@react95/core/ListItem"
import { List } from "@react95/core"

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

export default function SocialMenu() {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const [isOpen, setIsOpen] = useState(false);

    const handleSocialClick = (event) => {
        const clickedItem = event.target instanceof Element
            ? event.target.closest("li")
            : null;

        if (!isMobile || clickedItem !== event.currentTarget) return;

        event.stopPropagation();
        setIsOpen((currentValue) => !currentValue);
    };

    return (
        <List.Item
            icon={<Wab321019 variant="32x32_4" />}
            aria-haspopup="menu"
            aria-expanded={isMobile ? isOpen : undefined}
            onClick={handleSocialClick}
        >
            Social
            <List style={isMobile ? { display: isOpen ? "block" : "none" } : undefined}>
                {socials.map((social) => (
                    <ListItem key={social.id} onClick={() => window.open(social.url, "_blank")}>
                        {social.name}
                    </ListItem>
                ))}
            </List>
        </List.Item>
    );
}