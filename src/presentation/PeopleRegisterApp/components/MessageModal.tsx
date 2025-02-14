import Modal from 'react-bootstrap/Modal';

type MessageModalProps = {
    show: boolean;
    handleClose: () => void;
    content: string | React.ReactNode;
    title: string;
    backdrop?: boolean | "static";
    keyboard?: boolean;
    button?: {
        text?: string;
        style?: "primary" | "secondary"
    }
}

export const MessageModal = ({ show, handleClose, content, title, backdrop, keyboard = true, button }: MessageModalProps) => {
    return (
        <Modal show={show} onHide={handleClose} backdrop={backdrop} keyboard={keyboard} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{content}</Modal.Body>
            <Modal.Footer>
                <button className={`btn btn-${button?.style ?? 'primary'}`} onClick={handleClose}>
                    {button?.text ?? 'Aceptar'}
                </button>
            </Modal.Footer>
        </Modal>
    );
};
