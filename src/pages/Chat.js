import PropTypes from 'prop-types';

import MessageInput from '../components/MessageInput';
import MessageList from '../components/MessageList';

export default function Chat({ currentRecipient, currentUser, messages, updateMessageList }) {
    return (
        // should use a variable for subtracting toolbar height
        <div style={{ height: 'calc(100% - 64px)', width: '100%' }}>
            <MessageList currentRecipient={currentRecipient} currentUser={currentUser} messages={messages} />
            <MessageInput
                currentRecipient={currentRecipient}
                currentUser={currentUser}
                updateMessageList={updateMessageList}
            />
        </div>
    );
}

Chat.propTypes = {
    currentRecipient: PropTypes.string.isRequired,
    currentUser: PropTypes.string.isRequired,
    messages: PropTypes.shape({}).isRequired,
    updateMessageList: PropTypes.func.isRequired
};
