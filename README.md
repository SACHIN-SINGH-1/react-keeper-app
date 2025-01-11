# Keeper App

The Keeper App is a simple note-taking application built using React. It allows users to create, delete, and manage notes. The app stores the notes locally in the browser, so even after refreshing, the notes are preserved.

## Table of Contents

- [Keeper App](#keeper-app)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Folder Structure](#folder-structure)
    - [Explanation of Key Folders and Files](#explanation-of-key-folders-and-files)
  - [Setup](#setup)

## Technologies Used

- **React** (via Create React App)
- **React Hooks** for state management
- **LocalStorage** for storing notes in the browser

## Folder Structure

```plaintext
keeper-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ ├──├── App.css
│ ├──├── index.css
│ ├──└── ...
│ ├── components/
│ ├──├── Note.js
│ ├──├── CreateArea.js
│ ├──├── KeeperApp.js
│ └──└── ...
├── package.json
└── README.md
```

### Explanation of Key Folders and Files

- **public/**: Contains the `index.html` file and other static assets.
- **src/**: Contains all the source code files for the React app.
  - **assets/**: Holds any css, images or icons files used in the app.
  - **components/**: Contains individual React components for different UI elements of the app (e.g., `CreateArea`, `Note`).
  - **App.js**: The main component that manages the app's logic and layout.
  - **index.js**: The entry point for the React app.
  - **App.css**: The main CSS file for styling.

## Setup

To get started with the Keeper App, you need to have **Node.js** and **npm** installed on your system.

1; Clone the repository:

```bash
git clone https://github.com/your-username/keeper-app.git
cd keeper-app
```

2; Install the dependencies:

```bash
npm install
```

3; Running the App Locally:

```bash
npm start
```
