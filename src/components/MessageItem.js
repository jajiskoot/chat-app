import PropTypes from 'prop-types';

export default function MessageItem({ currentUser, message }) {
    return <div style={{ float: `${message.sender === currentUser ? 'right' : 'left'}` }}>{message.text}</div>;
}

MessageItem.propTypes = {
    currentUser: PropTypes.string.isRequired,
    message: PropTypes.shape({
        recipient: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};
