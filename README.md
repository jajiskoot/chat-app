This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Using Running App

The initial page that's brought up is the Login page, the two input boxes are for username and password, with the first box being where you input the username.  There are two users you can log in as: jack and jill.  There isn't any password authentication so it doesn't matter what passwords are used.

Each user, once logged in, can send messages to the other user or to themselves.

The user that messages are currently being sent to, can be changed by clicking on the button that says "MESSAGING <user>"

Messages on the left side of the screen represent messages coming from a different user, and messages on the right side of the screen are messages sent by the currently logged in user.

If enough messages are sent, so that there's room for scrolling through messages, a button will appear, just above the input text box, that says "TOP". That button will scroll to the top of the exchanged messages.
