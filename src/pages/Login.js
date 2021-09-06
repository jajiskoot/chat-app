import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export default function Login({ setCurrentRecipient, setCurrentUser, setLoggedIn }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (user === 'jack' || user === 'jill') {
                setCurrentRecipient(user === 'jack' ? 'jill' : 'jack');
                setCurrentUser(user);
                setLoggedIn(true);
            }
        },
        [user, setCurrentRecipient, setCurrentUser, setLoggedIn]
    );

    return (
        <form onSubmit={handleSubmit}>
            username:
            <input
                value={user}
                onChange={(e) => {
                    setUser(e.target.value);
                }}
            />
            <br />
            password:
            <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <br />
            <Button type="submit">Login</Button>
        </form>
    );
}

Login.propTypes = {
    setCurrentRecipient: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    setLoggedIn: PropTypes.func.isRequired
};
