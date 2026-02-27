
# Task Management Dashboard

A modern, single-page **React** dashboard application built with **TypeScript**, **Vite**, **Tailwind CSS**, and **ShadCN UI components**. It integrates with a REST API to fetch dashboard analytics, project, and user data.

---

## 🚀 Features

- **Login Page** with authentication
- **Dashboard Page** displaying:
  - Stat Cards (Total Users, Active Users, Revenue, Growth)
  - Analytics Charts (Views, Clicks, Conversions)
  - Reminders, Project List, Team Collaboration
  - Project Progress & Time Tracker components
- Fully **responsive** layout
- **Dynamic data** fetching from the REST API
- **Tailwind CSS + ShadCN UI** for modern styling and reusable components
- TypeScript for type safety

---

## 📦 Tech Stack

- **Framework:** React 18 + TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS + ShadCN UI  
- **Charts:** Recharts  
- **Icons:** Lucide React  
- **State & Context:** React Hooks + Context API  

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/khadizajarin/task-dashboard
cd task-dashboard
````

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## ⚡ Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build production bundle  |
| `npm run preview` | Preview production build |

---

## 🔑 Environment Variables

If authentication is used or API tokens are required, create a `.env` file in the root with variables like:

```env
VITE_API_BASE_URL=https://task-api-eight-flax.vercel.app
```

---

## 🧩 Project Structure

```
src/
 ├─ components/dashboard/   # Dashboard components (StatCard, Sidebar, TopBar, etc.)
 ├─ contexts/               # Context providers (AuthContext)
 ├─ pages/                  # Page components (Dashboard, Login)
 ├─ App.tsx                 # Main App component
 ├─ main.tsx                # Entry point
 ├─ lib/                    # Utility functions
 └─ styles/                 # Tailwind CSS or global styles
```

---

## 📈 API Integration

* **Dashboard Data:** `GET /api/dashboard`
* **Analytics Data:** `GET /api/analytics`
* **Authentication:** `POST /api/login`

All API requests include the user token for authorized endpoints.

---

## 🎨 Styling

* Tailwind CSS v4
* ShadCN UI components (`StatCard`, `Button`, `Sidebar`, etc.)
* Responsive design using Tailwind grid and flex utilities

---

## 📌 Deployment

The project can be deployed to **Vercel**, **Netlify**, or any static hosting service supporting Vite builds.

```bash
npm run build
```

Upload the `dist/` folder to your hosting provider or connect your repo to Vercel for automatic deployment.

---

## ✨ Contributions

This project is a professional intern assignment. Contributions are welcome but ensure they adhere to TypeScript + Tailwind + ShadCN patterns.

---

## 📄 License

MIT License

