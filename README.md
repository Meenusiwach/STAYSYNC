Hotel Reservation System (MERN)
-A full–featured hotel reservation web application built using **MERN Stack** with secure authentication, role-based access, booking calendar UI, and admin dashboard for managing hotels / rooms / reservations.

🚀 Tech Stack
| Category | Tech                                  |
| -------- | ------------------------------------- |
| Frontend | React.js, Context API, React Calendar |
| Backend  | Node.js, Express.js                   |
| Database | MongoDB                               |
| Auth     | JWT (Role Based Authentication)       |

✨ Features

-User Side
* Create account / Login using JWT
* Search hotels and select date range
* Calendar based booking flow
* View & manage own reservations

-Admin Side
* Admin login access
* CRUD operations (Add / Edit / Delete)
  * Hotels
  * Rooms
  * Reservations
* Manage users

🔐 Authentication
* JWT token stored securely
* Middleware based protected routes
* Two roles supported:
  * User
  * Admin

📦 Folder Structure
project/
 ├── client/      # React Frontend
 └── server/      # Node + Express Backend

⚙️ Installation & Setup
1) Clone repo
git clone <your-repo-link>
cd project

2) Backend Setup
cd server
npm install
# create .env file
PORT=5000
MONGO_URI=YOUR_MONGO_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
npm start

3) Frontend Setup
cd client
npm install
npm start

Frontend runs on **[http://localhost:3000](http://localhost:3000)**
Backend runs on **[http://localhost:5000](http://localhost:5000)**

📅 Booking UI

* Uses **React Calendar** to select check-in / check-out dates
* Sends date range to backend and stores booking details in MongoDB

🛠 APIs (Examples)

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Create account    |
| POST   | `/auth/login`    | Login & get token |
| GET    | `/hotels`        | List Hotels       |
| POST   | `/book`          | Reserve hotel     |

✨ Future Enhancements (optional)

* Payment gateway
* Email confirmations
* Search & filters (price range / location / rating)

Screenshots



