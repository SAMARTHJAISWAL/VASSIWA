# VASSIWA

# MERN Event Management System

A comprehensive web application built using the MERN (MongoDB, Express.js, React, Node.js) stack for managing user registrations, subscriptions, and events.

## Features

- **User Authentication & Management**
  - Secure user registration and login
  - JWT-based authentication system
  - User profile management
  - Subscription handling

- **Event Gallery**
  - Dynamic event display
  - Image optimization and lazy loading
  - Filtering and search capabilities
  - Responsive grid layout

- **Feedback System**
  - User feedback submission
  - Rating system
  - Comment moderation
  - Analytics dashboard

## Tech Stack

- **Frontend**
  - React.js
  - Redux for state management
  - Material-UI/Tailwind CSS
  - Axios for API requests

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd event-management-system
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the server directory:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development server:
```bash
# Start backend server
cd server
npm run dev

# Start frontend in a new terminal
cd client
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback

## Project Structure

```
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
