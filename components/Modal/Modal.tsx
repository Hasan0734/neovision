import React from 'react';
import {  Modal, ModalBody, ModalHeader,  } from 'reactstrap';

const Modals = (props:any) => {
    const children:any = props.children
    return (
        <div>
            
            <Modal centered fullscreen="sm" isOpen size="lg"
              toggle={function noRefCheck(){}}
             >
                <ModalBody>
                    {children}
                </ModalBody>
                
            </Modal>
        </div>
    );
};

export default Modals;