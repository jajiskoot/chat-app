import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { messageInputHeight } from './MessageInput';
import MessageItem from './MessageItem';

export default function MessageList({ currentRecipient, currentUser, messages }) {
    const elem = useRef(null);

    useEffect(() => {
        elem.current.scrollTop = elem.current.scrollHeight;
    }, [messages]);

    const scrollToTop = useCallback(() => {
        elem.current.scrollTop = 0;
    }, [elem]);

    return (
        <div
            ref={elem}
            style={{
                height: `calc(100% - ${messageInputHeight})`,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {messages[currentUser][currentRecipient] &&
                messages[currentUser][currentRecipient].map((m) => (
                    <div key={m.id}>
                        <MessageItem currentUser={currentUser} message={m} />
                    </div>
                ))}
            {elem?.current?.scrollTop > 0 && (
                <Button
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        position: 'fixed',
                        left: '20px',
                        bottom: `calc(${messageInputHeight} + 10px)`
                    }}
                    onClick={scrollToTop}
                >
                    Top
                </Button>
            )}
        </div>
    );
}

MessageList.propTypes = {
    currentRecipient: PropTypes.string.isRequired,
    currentUser: PropTypes.string.isRequired,
    messages: PropTypes.shape({
        [PropTypes.string]: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};
