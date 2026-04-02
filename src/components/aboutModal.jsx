import { Modal, Frame, TitleBar, useModal } from "@react95/core";
import { Explorer101, Mmsys113 } from "@react95/icons";
import pixelme from "../shared/assets/pixelme.png";

export default function AboutModal({ id = 'about' }) {
    const { remove, minimize } = useModal();

    const handleClose = () => {
        minimize(id);
        remove(id);
    };

    const handleButtonClick = (e) => alert(e.currentTarget.value);

    return (
        <Modal id={id} icon={<Explorer101 variant="32x32_4" />} title="Sobre" dragOptions={{
            defaultPosition: {
                x: 250,
                y: 100
            }
        }} titleBarOptions={
            <>
                <Modal.Minimize className="cursor-default" />
                <TitleBar.Close onClick={handleClose} className="cursor-default" />
            </>
        } buttons={[{
            value: 'Próximo',
            onClick: handleButtonClick
        },]}>
            <Modal.Content width="400px" height="300px" boxShadow="$in" bgColor="white">
                <Frame as="div" display="flex" flexDirection="column" gap="8px">
                    <h4 className="mt-1 text-center text-2xl">Vinicius Teixeira</h4>
                    <div className="flex items-start gap-4">
                        <img src={pixelme} height="250px" width="210px" alt="Vinicius Teixeira" className="mt-[-30px] ms-[-25px]" />
                        <div>
                            <p className="text-[0.90rem]">Sou um desenvolvedor fullstack apaixonado por transformar ideias em produtos digitais eficientes, unindo performance, criatividade e uma boa experiência ao usuário</p>
                        </div>
                    </div>

                </Frame>
            </Modal.Content>
        </Modal>
    )
}
