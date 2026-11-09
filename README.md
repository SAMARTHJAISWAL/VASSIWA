# VASSIWA

Website for **VASSIWA**, an association of industrial companies in Visakhapatnam. Member companies can register (with their Udyam ID), log in, browse events and a gallery, and submit grievances or contact messages.

Built with React on the frontend and Node.js / Express / MongoDB on the backend.

## Features

- **Company registration** — company name, email, contact number, date of joining, Udyam ID, nature of product, password and an uploaded screenshot of the Udyam ID (JPEG/PNG, max 5 MB). Passwords are hashed with bcrypt.
- **Login** with email + password; the backend returns a JWT (valid 1 hour) which is kept in `localStorage`.
- After registering or logging in, the navbar's **Feedback** link switches to **Grievances**.
- **Grievances** and **Contact Us** forms saved to MongoDB.
- **Admin grievances** page (`/admin/grievances`) listing all submitted grievances.
- Static pages: landing page with links to Udyam / MSME, events (sample data), gallery, disclaimer, feedback form (front-end only; there is no feedback endpoint yet).

## Tech stack

- **Frontend:** React 18 (Vite), React Router 6, styled-components, axios, react-datepicker
- **Backend:** Node.js, Express 4, Mongoose 8 (MongoDB), multer (file uploads), bcryptjs, jsonwebtoken, dotenv

## Getting started

Requirements: Node.js 20.19+ or 22.12+ (the backend alone runs on 18+) and a MongoDB database (local `mongod` or a free MongoDB Atlas cluster).

### 1. Backend (port 5001)

```bash
cd backend
npm install
cp .env.example .env    # set MONGODB_URI and JWT_SECRET
npm run dev             # or: npm start
```

| Variable | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | yes | MongoDB connection string |
| `JWT_SECRET` | yes | Secret for signing login tokens |
| `PORT` | no | API port (default `5001`) |

The server refuses to start if `MONGODB_URI` or `JWT_SECRET` is missing. Uploaded screenshots are saved to `backend/uploads/` (git-ignored) and served at `/uploads/...`.

### 2. Frontend (port 3000)

```bash
cd frontend
npm install
cp .env.example .env    # optional; defaults to http://localhost:5001/api
npm run dev             # or: npm start
```

The frontend is built with [Vite](https://vite.dev) and needs Node.js 20.19+ or 22.12+.

| Variable | Default | Description |
| --- | --- | --- |
| `VITE_API_URL` | `http://localhost:5001/api` | Backend API base URL (read at build time via `import.meta.env`) |

Other scripts:

- `npm run build` creates a production build in `frontend/build`
- `npm run preview` serves that build locally on port 3000
- `npm test` runs the Vitest test suite

If you used the old Create React App setup, rename `REACT_APP_API_URL` to `VITE_API_URL` in your `frontend/.env`.

## API

| Method | Endpoint | Body |
| --- | --- | --- |
| GET | `/api/health` | — |
| POST | `/api/companies` | `multipart/form-data`: `companyName`, `email`, `contactNumber`, `dateOfJoining`, `udyamId`, `natureOfProduct`, `password`, `screenshot` (file) |
| POST | `/api/Login` | `{ email, password }` → `{ token, company }` |
| GET / POST | `/api/grievances` | `{ companyName, email, grievance }` |
| GET / POST | `/api/contact` | `{ name, email, message }` |

## Project structure

```
backend/
  server.js            Express app, MongoDB connection, route mounting
  models/              Company, Grievance, Contact (Mongoose schemas)
  routes/              companies (registration + upload), Login, grievances, contact
frontend/
  index.html           HTML entry (Vite)
  vite.config.js       Vite + Vitest config (dev server on port 3000)
  public/              static assets copied as-is (favicon, manifest, ...)
  src/
    App.jsx            routes
    config.js          API base URL
    context/           RegistrationContext (logged-in / registered flag)
    components/        pages (registration, Login, landing, events, gallery, ...)
    assets/            logo and gallery images
```

## Known limitations

- `GET /api/grievances`, `GET /api/contact` and the `/admin/grievances` page are **not protected** — anyone can read submitted names, emails and messages. Add authentication before deploying publicly.
- The registered/logged-in flag lives in React state only, so it resets on page reload.
- Events are hard-coded sample data and the gallery images are placeholders (copies of the logo).

## Licence

[MIT](LICENSE) © 2024–2026 Samarth Jaiswal

The MIT licence covers the source code. Images, video and other media in this repository are not covered.
