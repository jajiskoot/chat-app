import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Message from '../classes/Message';

export const messageInputHeight = '22px';

export default function MessageInput({ currentRecipient, currentUser, updateMessageList }) {
    const [message, setMessage] = useState('');

    const setMessageValue = useCallback(
        (event) => {
            setMessage(event.target.value);
        },
        [setMessage]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (message) {
                updateMessageList(new Message(currentRecipient, currentUser, message));
                setMessage('');
            }
        },
        [currentRecipient, currentUser, message, updateMessageList]
    );

    return (
        <form style={{ height: messageInputHeight, width: '100%' }} onSubmit={handleSubmit}>
            <input style={{ width: '100%' }} value={message} onChange={setMessageValue} placeholder="Enter Some Text" />
        </form>
    );
}

MessageInput.propTypes = {
    currentRecipient: PropTypes.string.isRequired,
    currentUser: PropTypes.string.isRequired,
    updateMessageList: PropTypes.func.isRequired
};
