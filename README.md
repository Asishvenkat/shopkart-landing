# MERN Stack Product Landing Page Assignment

## Overview
A full-stack e-commerce product landing page built with the MERN stack (MongoDB, Express, React, Node.js). Features include a responsive UI, product search with autosuggest, filters, and a professional look inspired by Amazon/Flipkart.

## Features
- Product landing page with:
  - Header and search bar (with autosuggest)
  - Hero/banner section
  - Responsive product grid (image, name, price, rating, hover effect)
  - Category filter
  - Mobile/tablet/desktop support
- Backend API (Node.js + Express + MongoDB):
  - `/products` – Get all products
  - `/search?q=term` – Search products by name (autosuggest, max 5 results)

## Folder Structure
```
/Assignment/Trizen
  ├── backend/    # Node.js, Express, MongoDB API
  └── frontend/   # React app (UI)
```

## Setup Instructions

### Prerequisites
- Node.js & npm
- MongoDB Atlas account (or local MongoDB)

### 1. Backend Setup
```sh
cd backend
npm install
# Configure your MongoDB URI in a .env file:
# MONGODB_URI=your_mongodb_connection_string
npm run seed   # Seed the database with products
npm start      # Start backend server (default: http://localhost:5000)
```

### 2. Frontend Setup
```sh
cd frontend
npm install
npm run dev    # Start React app (default: http://localhost:5173)
```

## API Endpoints
- `GET /products` – Returns all products
- `GET /search?q=term` – Returns up to 5 products matching the search term (case-insensitive, partial match)

# Demo Video

Watch the project demo here: [Google Drive Video](https://drive.google.com/file/d/1Nq4oBvZtuClrTr75vLwldcfy06O-7Wuh/view?usp=sharing)

# Project Images

Below are the images present in the `public` folder, shown in the same order (1, 2, 3, 4):

<div align="center">
	<img src="/public/1.png" alt="Image 1" width="180" style="margin:8px;" />
	<img src="/public/2.png" alt="Image 2" width="180" style="margin:8px;" />
</div>
<div align="center">
	<img src="/public/3.png" alt="Image 3" width="180" style="margin:8px;" />
	<img src="/public/4.png" alt="Image 4" width="180" style="margin:8px;" />
</div>

## Submission
- Push your code to a GitHub repository with this structure.
- Include this README, screenshots, and video demo link.

## Contact
- Mobile: +91 8639648822
- Email: support@trizenventures.com
- Location: Hyderabad, Telangana, India
- Website: https://trizenventures.com

---
**Good luck!**