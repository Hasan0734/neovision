import React, {useState} from 'react';
import { Modal, ModalBody, ModalHeader, } from 'reactstrap';

const Modals = (props: any) => {

    const {isOpens, setIsOpen, children} = props
    return (
        <div>
            <Modal
                centered
                fullscreen="lg"
                size="lg"
                isOpen={isOpens}
                toggle={() => setIsOpen(false)}
            >
                <ModalBody>
                    {children}
                </ModalBody>
               
            </Modal>
        </div>
    );
};

export default Modals;