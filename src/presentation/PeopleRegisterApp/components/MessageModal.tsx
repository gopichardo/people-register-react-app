import Modal from 'react-bootstrap/Modal';

export type MessageModalProps = {
    show: boolean;
    handleClose: () => void;
    title: string;
    backdrop?: boolean | "static";
    keyboard?: boolean;
    button?: {
        text?: string;
        style?: "primary" | "secondary"
    },
    children?: string | React.ReactNode
}

export const MessageModal = ({ show, handleClose, title, backdrop, keyboard = true, button, children }: MessageModalProps) => {
    return (
        <Modal show={show} onHide={handleClose} backdrop={backdrop} keyboard={keyboard} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <button className={`btn btn-${button?.style ?? 'primary'}`} onClick={handleClose}>
                    {button?.text ?? 'Aceptar'}
                </button>
            </Modal.Footer>
        </Modal>
    );
};
