import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Explorer101 } from "@react95/icons";
import pixelme from "../../../assets/images/pixelme.png";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";

export default function AboutModal({ id = 'about', nextStep }) {
    const { remove, minimize } = useModal();
    const isMobile = useMediaQuery("(max-width: 767px)");

    const handleClose = () => {
        minimize(id);
        remove(id);
    };

    const handleNextStep = () => nextStep();

    return (
        <Modal id={id} className="responsive-modal responsive-modal--about" icon={<Explorer101 variant="32x32_4" />} title="Sobre" dragOptions={{
            bounds: { top: 0, right: 0, bottom: isMobile ? 44 : 28, left: 0 },
            disabled: isMobile,
        }} titleBarOptions={
            <>
                <Modal.Minimize className="cursor-default" />
                <TitleBar.Close onClick={handleClose} className="cursor-default" />
            </>
        } buttons={[{
            value: 'Próximo',
            onClick: handleNextStep
        },]}>
            <Modal.Content className="responsive-modal__content" width="400px" height="300px" boxShadow="$in" bgColor="white">
                <Frame as="div" display="flex" flexDirection="column" gap="8px" height="100%" minHeight="0">
                    <h4 className="mt-1 shrink-0 text-center text-xl md:text-2xl">Vinicius Teixeira</h4>
                    <div className="about-content flex min-h-0 flex-1 flex-row items-start justify-start gap-2 md:gap-4">
                        <img src={pixelme} alt="Vinicius Teixeira" className="about-image mt-[-18px] ms-[-14px] h-auto w-[clamp(112px,38vw,170px)] max-w-full shrink-0 object-contain md:mt-[-30px] md:ms-[-25px] md:w-[210px]" />
                        <div className="about-description min-w-0 flex-1">
                            <p className="m-0 text-[0.90rem] leading-relaxed">Sou um desenvolvedor fullstack apaixonado por transformar ideias em produtos digitais eficientes, unindo performance, criatividade e uma boa experiência ao usuário</p>
                        </div>
                    </div>

                </Frame>
            </Modal.Content>
        </Modal>
    )
}
