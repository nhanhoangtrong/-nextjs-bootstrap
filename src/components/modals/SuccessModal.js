import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, title, message, onClose }) => {
    return (
        <Modal className="success-modal" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={onClose}>
                    Đã hiểu
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

SuccessModal.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
};

SuccessModal.defaultProps = {
    show: false,
};

export default SuccessModal;
