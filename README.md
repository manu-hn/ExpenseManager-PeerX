# Expense Manager

Expense Manager is a web application built using React.js, Tailwind CSS, Redux, and Firebase. It offers a user-friendly interface for managing expenses efficiently. Below are the features and setup instructions for the project.

### Features

1. `Create User`: Users can sign up through a modal window, ensuring a seamless and distraction-free experience.
2. `Search Function`:Users can search for expenses based on their names, enhancing accessibility and ease of use.
3. `Mobile Responsive`: The application is designed to be fully responsive, ensuring a smooth experience across various devices.

#### Tech Stack Used

- `React.js`: Utilized for building the user interface, leveraging its powerful UI development capabilities.
- `Tailwind CSS`: Used for styling, providing a clean and modern look to the application.
- `Redux`: Implemented for managing the state of the project, facilitating efficient data flow and state management.
- `Firebase`: Integrated for user authentication, allowing users to securely sign up, sign in, and sign out.

## Project Setup

Follow these steps to set up and run the project:

1. Clone the project: `git clone https://github.com/manu-hn/ExpenseManager-PeerX.git`.
2. Install dependencies: run the command `npm install` to install dependencies.
3. Create a Firebase project:

- Create a Firebase project named "ExpenseManager" or any desired name.
- Obtain the Firebase API key, as it is necessary for starting the project.

4. Set up environment variables:

- Create a `.env.local` file in the root of the project.
- Define a variable named `VITE_FIREBASE_API_KEY` and set it to your Firebase API key. Make sure to prefix it with `VITE_`.

5. Start the project: Run `npm run dev` to start the project.
6. Access the project: The local project can be accessed at `http://localhost:5173/`.

### Prerequisites

- Node.js and npm should be installed on your local machine.

##### Note: The "hooks" folder in the "utils" folder has no relation to this project and was created for developing this application as a Full Stack App. Please Ignore it.

Feel free to reach out if you encounter any issues or have any questions. Happy coding! 🚀
