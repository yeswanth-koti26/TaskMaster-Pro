# TaskMaster Pro

TaskMaster Pro is a comprehensive project management application designed to help teams collaborate effectively and manage tasks efficiently. With features like user authentication, task assignment, commenting, and task status tracking, TaskMaster Pro ensures seamless teamwork and project execution. Built with a modern tech stack including React, Node.js, Express, and MongoDB, this application is perfect for showcasing full-stack development skills.

## Features

- **User Authentication**: Secure user registration and login with JWT authentication.
- **Task Management**: Create, update, and delete tasks.
- **Task Assignment**: Assign tasks to team members.
- **Commenting**: Add comments to tasks for better collaboration.
- **Task Status Tracking**: Track the status of tasks from creation to completion.
- **Responsive Design**: Fully responsive design for a great user experience on all devices.

## Tech Stack

- **Frontend**: React, Axios, React Router, CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS, Responsive Design

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (local or cloud)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yeswanth-koti26/taskmaster-pro.git
    cd taskmaster-pro
    ```

2. **Install backend dependencies**:
    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```sh
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. **Run the backend server**:
    ```sh
    cd backend
    npm run dev
    ```

2. **Run the frontend development server**:
    ```sh
    cd ../frontend
    npm start
    ```

## Usage

- **Register a new user** and login.
- **Create and assign tasks** to team members.
- **Add comments** to tasks for better collaboration.
- **Track task status** from creation to completion.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes. Make sure to follow the project's coding guidelines and standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the developers and contributors of the libraries and frameworks used in this project.
- Special thanks to the open-source community for providing valuable resources and support.

---

Built with ❤️ by [yeswanth-koti26](https://github.com/yeswanth-koti26)
