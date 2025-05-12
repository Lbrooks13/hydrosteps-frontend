# HydroSteps

HydroSteps is a mobile-friendly productivity tracker that helps users stay healthy by logging their **daily step count** and **water intake**. Users can:

- Register and log in securely
- Set personalized daily goals
- Track and view their progress in real-time
- See summaries and visual history charts of their activity

## User Stories

As a user, I want to:
-  Register for an account so I can track my personal progress
-  Log in securely and access my dashboard
-  Record how many steps I've walked and how much water I’ve consumed each day
-  View a summary of today’s total steps and water
-  Set daily targets for steps and water intake to stay on track
-  See how well I’m doing compared to my daily targets
-  View a history of my previous entries
-  See a chart that helps me understand trends over time
-  Log out securely when I’m finished

## Features

###  Authentication
- Register and log in with a secure password
- Protected routes using token-based authentication
- Session persists while user is logged in

###  Entry Tracking
- Users can manually add their daily step count and water intake
- Each entry is tied to the logged-in user

###  Target Setting
- Users can set personalized daily targets
- Summary compares actual vs. target for the current day

###  History & Data Visualization
- Entries are displayed as a bar chart using Recharts
- Helps visualize activity trends over time

###  Responsive UI
- Clean, card-based layout using Bootstrap
- Works on desktop, tablet, and mobile screens

###  Route Protection
- Only authenticated users can access `/dashboard` and `/history`
- Unauthenticated users are redirected to login

###  Navigation
- Navbar adapts to login state: shows “Dashboard” and “Logout” only when logged in

## React Component Structure


### Component Descriptions:
- **App** – Main wrapper holding routes and layout
- **Navbar** – Header with login/logout/register links
- **LoginPage/RegisterPage** – User authentication forms
- **DashboardPage** – Main user screen with input form and today’s stats
  - `EntryForm` – Steps and water intake form
  - `TodaySummary` – Shows today’s totals
- **HistoryPage** – Displays list of all past entries

## Wireframes

The initial planning phase included wireframes to guide the layout and user experience for each screen. These included:

- A login and registration form
- A dashboard for tracking water and steps
- A visual summary of progress

![Wireframes](https://i.ibb.co/21KZ7xqM/Hydro-Steps-Wireframe.png)

## Technologies Used

### Frontend
- **React.js** – frontend framework
- **React Router** – for navigation and protected routes
- **Bootstrap 5** – for responsive layout and styling
- **Recharts** – for charting activity history

### Backend
- **Django** – web framework for backend logic
- **Django REST Framework** – API and authentication
- **SimpleJWT** – token-based authentication
- **CORS Headers** – to allow secure cross-origin requests

### Tools
- **GitHub Projects** – for Agile-style task tracking
- **Git & GitHub** – version control and deployment
- **Visual Studio Code** – development environment







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
