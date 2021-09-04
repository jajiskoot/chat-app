import { fireEvent, render } from '@testing-library/react';

import TitleBar from '../TitleBar';

describe('TitleBar component tests', () => {
    const currentRecipient = 'jill';
    const setCurrentRecipient = jest.fn();
    let loggedIn = false;
    const setLoggedIn = jest.fn();
    const appName = 'Guild Chat';

    test('elements do not show if not logged in', () => {
        const { queryByText } = render(
            <TitleBar
                currentRecipient={currentRecipient}
                setCurrentRecipient={setCurrentRecipient}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                title={appName}
            />
        );

        // Typically would prefer using constants shared throughout app instead of hardcoded strings
        expect(queryByText(`Messaging ${currentRecipient}`)).toBe(null);
        expect(queryByText('Logout')).toBe(null);
    });

    test('elements shown if logged in', () => {
        loggedIn = true;

        const { getByText } = render(
            <TitleBar
                currentRecipient={currentRecipient}
                setCurrentRecipient={setCurrentRecipient}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                title={appName}
            />
        );

        // Typically would prefer using constants shared throughout app instead of hardcoded strings
        expect(getByText(`Messaging ${currentRecipient}`)).not.toBe(null);
        expect(getByText('Logout')).not.toBe(null);
    });

    test('Clicking on recipient changes the recipient value', () => {
        loggedIn = true;

        const { getByText, findByText } = render(
            <TitleBar
                currentRecipient={currentRecipient}
                setCurrentRecipient={setCurrentRecipient}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                title={appName}
            />
        );

        // Typically would prefer using constants shared throughout app instead of hardcoded strings
        const recipientButton = getByText(`Messaging ${currentRecipient}`);
        fireEvent.click(recipientButton);
        expect(findByText(`Messaging jack`)).not.toBe(null);
    });

    test('Clicking Logout calls setLoggedIn with value false', () => {
        loggedIn = true;

        const { getByText } = render(
            <TitleBar
                currentRecipient={currentRecipient}
                setCurrentRecipient={setCurrentRecipient}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                title={appName}
            />
        );

        // Typically would prefer using constants shared throughout app instead of hardcoded strings
        const logoutButton = getByText('Logout');
        fireEvent.click(logoutButton);
        expect(setLoggedIn).toHaveBeenCalledWith(false);
    });
});
