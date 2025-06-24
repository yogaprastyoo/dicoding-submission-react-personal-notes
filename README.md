# Personal Notes Application

A simple and interactive web application built with React to manage personal notes. This project was developed as a submission for the "Belajar Membuat Aplikasi Web dengan React" (Learn to Build Web Applications with React) course at Dicoding Indonesia, focusing on fundamental React concepts.

## Features

This application allows users to:

* **Display Notes:** View a list of active and archived notes.
* **Add Notes:** Create new notes with a title (character limit of 50) and body.
* **Delete Notes:** Remove unwanted notes from the list.
* **Archive/Unarchive Notes:** Move notes between active and archived lists for better organization.
* **Search Notes:** Filter notes by keywords in their titles for easy retrieval.

## Technologies Used

* **React.js:** For building the user interface with reusable, declarative, and stateful components.
* **JavaScript (ES6+):** Core programming logic and interactivity.
* **HTML5:** Structural foundation of the web application.
* **CSS3:** Styling and ensuring responsive design across various devices.
* **Vite:** A modern and fast build tool for front-end development, enhancing the development experience.

## Project Structure

The project follows a component-based architecture for better organization, reusability, and maintainability:

```
src/
├── components/
│ ├── Fragments/
│ │ ├── NoteInput.jsx # Component for adding new notes with character limit logic.
│ │ ├── NoteItem.jsx # Component for displaying individual note items with delete and archive actions.
│ │ ├── NoteList.jsx # Component for rendering lists of notes (active/archived).
│ │ └── NoteSearch.jsx # Component for searching notes by title.
│ └── Layouts/
│ ├── NoteBody.jsx # Main body layout, handling note filtering and rendering lists.
│ └── NoteHeader.jsx # Header section with the app title and search bar.
├── pages/
│ └── note.jsx # Main application page, managing overall state and handlers for notes.
├── styles/
│ └── style.css # Global styling for the application, including responsive design rules.
├── utils/
│ └── index.js # Utility functions for initial data and date formatting.
└── index.jsx # Main entry point of the React application, responsible for rendering the App.
```

## How to Run Locally

To get a copy of this project up and running on your local machine for development and testing purposes, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yogaprastyoo/dicoding-submission-react-personal-notes.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dicoding-submission-react-personal-notes
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # Alternatively, if you use Yarn:
    # yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    # Alternatively, if you use Yarn:
    # yarn dev
    ```
    The application should now be running in your browser at `http://localhost:5173/` (or a similar local address provided by Vite).

## Acknowledgements

This project was developed as a submission for the "Belajar Membuat Aplikasi Web dengan React" course, provided by [Dicoding Indonesia](https://www.dicoding.com/).


