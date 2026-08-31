#  Feed Post Application

A full-stack MERN application where users can create posts with images, captions, and tags. Uploaded images are stored using ImageKit, post data is stored in MongoDB, and the latest posts are displayed first in the feed.

##  Live Demo

### Frontend
[View Frontend](https://feed-post-kohl.vercel.app/)

### Backend API
[View bAckend](https://feed-post-3tn7.onrender.com/feed)

---

##  Features

- 📸 Upload images
- 📝 Add captions to posts
- #️⃣ Add tags
- 🖼️ Image storage using ImageKit
- 🗄️ Store post data in MongoDB
- 🆕 Latest posts appear first
- ⏳ Loading state while uploading posts
- 🔄 Automatic redirect to the feed after successful post creation
- 📱 Responsive user interface
- ☁️ Backend deployed on Render
- 🚀 Frontend deployed online

---

##  Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit

---

##  Project Structure

```text
feed-post/
│
├── bAckend/
│   ├── src/
│   │   ├── db/
│   │   ├── model/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── create_post.jsx
│   ├── feed.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md



```
---

<p align="center">
  Made with ❤️ by 
  <a href="https://github.com/amansethiya">Aman Sethiya</a>
</p>
