import React, { useState } from 'react';

import { Modal } from "flowbite-react/lib/cjs/components/Modal";
import { Button } from "flowbite-react/lib/cjs/components/Button/Button";

const NewSplit = ({toggle}) => {

    const [onClose, setClose] = useState(false);

    return (
        <Modal
            show={true}
            position="center"
            onClose={toggle}
        >
            <Modal.Header>
            Start a New Split
            </Modal.Header>
            <Modal.Body>
            <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={toggle}>
                I accept
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewSplit;