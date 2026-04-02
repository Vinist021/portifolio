import { Cursor } from "@react95/core"
import xp from "../shared/assets/xp.png"

import { Explorer101 } from "@react95/icons";

export default function DesktopIcons({ openAboutModal, openExperienceModal }) {
    return (
        <>
            <div style={{ width: 100, marginLeft: 10, marginTop: 10 }}>
                <div className={Cursor.Pointer} onClick={() => openAboutModal()}>
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
                        Sobre
                    </p>
                </div>

                <div className={Cursor.Pointer} onClick={() => openExperienceModal()}>
                    <img src={xp} alt="experiência" width="40px" style={{ marginLeft: 26, marginTop: 0 }}/>
                    <p
                        style={{
                            fontFamily: "MS Sans Serif",
                            fontSize: 13,
                            justifyContent: "center",
                            marginTop: 3,
                            width: 100,
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        Experiência
                    </p>
                </div>
            </div>
        </>
    )
}