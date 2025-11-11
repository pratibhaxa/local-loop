# React Supabase Signup Page

This project is a complete, functional signup page built with React and Supabase. It includes a modern frontend stack, user input validation, and integration with Supabase for user authentication.

## Getting Started

To get the application running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your Supabase project:**
    *   Go to [supabase.com](https://supabase.com/) and create a new project.
    *   In your Supabase project dashboard, navigate to the **Settings** > **API** section.
    *   You will find your **Project URL** and **Project API keys**. You'll need the `anon` key.

4.  **Configure environment variables:**
    *   In the root of the project, you'll find a `.env` file.
    *   Open this file and replace the placeholder values with your actual Supabase Project URL and anon key:
        ```
        REACT_APP_SUPABASE_URL="your-supabase-project-url"
        REACT_APP_SUPABASE_ANON_KEY="your-supabase-anon-key"
        ```

5.  **Run the application:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

## Features

*   **React-based:** Built with modern React, using functional components and hooks.
*   **Supabase Integration:** User signup is handled by Supabase authentication.
*   **Input Validation:** The form validates for empty fields and matching passwords.
*   **User Feedback:** Clear success and error messages are displayed to the user.
*   **Clean UI:** Styled with Tailwind CSS for a modern, clean look.
