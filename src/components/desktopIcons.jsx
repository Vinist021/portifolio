import { Cursor, useModal } from "@react95/core"
import { modals } from "../utils/modals";

export default function DesktopIcons() {

    const { add, restore, focus } = useModal();

    const handleOpenAboutModal = () => {
        add({
            id: modals.about,
            title: 'Sobre',
            icon: <Mmsys113 variant="32x32_4" />,
            hasButton: true
        });
        restore(modals.about);
        focus(modals.about);
    };

    return (
        <>
            <div style={{ width: 100, marginLeft: 10, marginTop: 10 }}>
                <div className={Cursor.Pointer} onClick={() => handleOpenAboutModal()}>
                    <Explorer101
                        variant="32x32_4"
                        style={{ marginLeft: 32, marginTop: 15 }}
                    />
                    <p
                        style={{
                            fontFamily: "MS Sans Serif",
                            fontSize: 13,
                            justifyContent: "center",
                            marginTop: 5,
                            width: 100,
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        Portfolio
                    </p>
                </div>
            </div>
        </>
    )
}