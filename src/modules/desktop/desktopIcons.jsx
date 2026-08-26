import { Cursor } from "@react95/core"
// import xp from "../../assets/images/xp.png"

import { Awschd32400, Explorer101 } from "@react95/icons";

export default function DesktopIcons({
    openAboutModal,
    // openExperienceModal,
    // openTechnologiesModal,
    openCVModal
}) {
    return (
        <div className="desktop-icons" role="group" aria-label="Atalhos da área de trabalho">
                <button
                    type="button"
                    className={`${Cursor.Pointer} desktop-icon`}
                    onClick={openAboutModal}
                    aria-label="Abrir Sobre"
                >
                    <Explorer101
                        variant="32x32_4"
                    />
                    <span className="desktop-icon__label">
                        Sobre
                    </span>
                </button>

                {/* <div className={Cursor.Pointer} onClick={openExperienceModal}>
                    <img src={xp} alt="experiência" width="40px" style={{ marginLeft: 26, marginTop: 0 }} />
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
                </div> */}

                {/* <div className={Cursor.Pointer} onClick={openTechnologiesModal}>
                    <Progman11
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
                        Tecnologias
                    </p>
                </div> */}

                <button
                    type="button"
                    className={`${Cursor.Pointer} desktop-icon`}
                    onClick={openCVModal}
                    aria-label="Abrir currículo"
                >
                    <Awschd32400
                        variant="32x32_4"
                    />
                    <span className="desktop-icon__label">
                        CV
                    </span>
                </button>
        </div>
    )
}
