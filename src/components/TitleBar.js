import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

export default function TitleBar({ currentRecipient, setCurrentRecipient, loggedIn, setLoggedIn, title }) {
    const handleLogout = useCallback(() => {
        setLoggedIn(false);
    }, [setLoggedIn]);

    const changeRecipient = useCallback(() => {
        setCurrentRecipient((prevRecipient) => (prevRecipient === 'jack' ? 'jill' : 'jack'));
    }, [setCurrentRecipient]);

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography>{title}</Typography>
                {loggedIn && currentRecipient && (
                    <>
                        <Button
                            style={{ margin: '0 30px', backgroundColor: 'black', color: 'white' }}
                            onClick={changeRecipient}
                        >
                            Messaging {currentRecipient}
                        </Button>
                        <Button onClick={handleLogout}>Logout</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

TitleBar.propTypes = {
    currentRecipient: PropTypes.string,
    setCurrentRecipient: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
    currentRecipient: ''
};
