import { useCallback, useState } from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import User from '../classes/User';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import TitleBar from './TitleBar';

export default function App() {
    const [appName] = useState('Guild Chat App');
    // TODO: Use another service for managing users
    const [users] = useState([new User('jack', 'superSecure'), new User('jill', 'notReallySecure')]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentRecipient, setCurrentRecipient] = useState(null);

    const initializeMessageList = useCallback(() => {
        const initialMessageList = {};
        users.forEach((u) => {
            initialMessageList[u.username] = {};
        });
        return initialMessageList;
    }, [users]);

    // TODO: make call to backend service for message list after user logged in
    // keep this variable on MessageList component because nothing else would need access
    // to this if using backend service for storing messages
    const [messages, setMessages] = useState(initializeMessageList());

    const updateMessageList = useCallback(
        (message) => {
            const { recipient, sender } = message;
            // update both user's conversations (redundant if messaging self, but still only one message added)
            // TODO: Use backend service instead, via API, for persistence and data access security
            setMessages((prevMessages) => ({
                ...prevMessages,
                [sender]: {
                    ...prevMessages[sender],
                    [recipient]: prevMessages[sender][recipient]
                        ? [...prevMessages[sender][recipient], message]
                        : [message]
                },
                [recipient]: {
                    ...prevMessages[recipient],
                    [sender]: prevMessages[recipient][sender]
                        ? [...prevMessages[recipient][sender], message]
                        : [message]
                }
            }));
        },
        [setMessages]
    );

    return (
        // Typically wouldn't use inline styling, but it's quick
        <div style={{ height: '100vh', width: '50vw' }}>
            <TitleBar
                currentRecipient={currentRecipient}
                setCurrentRecipient={setCurrentRecipient}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                title={appName}
            />
            <Router>
                <Switch>
                    <Route path="/login">
                        {loggedIn ? (
                            <Redirect to="/" />
                        ) : (
                            <Login
                                setCurrentRecipient={setCurrentRecipient}
                                setCurrentUser={setCurrentUser}
                                setLoggedIn={setLoggedIn}
                            />
                        )}
                    </Route>
                    <Route path="/">
                        {loggedIn ? (
                            <Chat
                                currentRecipient={currentRecipient}
                                currentUser={currentUser}
                                messages={messages}
                                updateMessageList={updateMessageList}
                            />
                        ) : (
                            <Redirect to="/login" />
                        )}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
