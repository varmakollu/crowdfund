# CrowdFund Platform

## Overview
CrowdFund is a modern, responsive crowdfunding platform built with **React.js (Vite)**, designed to facilitate seamless project discovery, funding, and management. The platform prioritizes user-friendly navigation, real-time updates, and secure transactions, integrating smoothly with a **REST API backend**.

---

## Features & Functionality

### **1. Landing Page (`Home.jsx`)**
- **Hero Section**: Showcases trending projects via a carousel.
- **Category-based Filters**: Users can explore projects by categories like Tech, Art, and Social.
- **Search Bar**: Integrated component (`SearchBar.jsx`) for project search.
- **Stats Counter**: Displays total projects funded and total donations.

### **2. Project Discovery**
- **`ProjectList.jsx`**: Grid/list view of projects with sorting (Newest, Most Funded).
- **`ProjectCard.jsx`**: Displays project details including a progress bar and deadline.
- **Filters**: Users can filter projects by category, funding status, and location.

### **3. Project Details Page**
- **Multimedia Gallery**: Supports images and videos for project showcasing.
- **Interactive Progress Bar (`ProgressBar.jsx`)**: Visually represents funding progress.
- **Tiered Reward System**: Displays different reward levels for backers.
- **"Back Project" Button**: Triggers `PaymentModal.jsx` for contributions.
- **Real-time Comments Section**: Enables community engagement.

### **4. User Authentication Flow**
- **Authentication Forms**: `LoginForm.jsx` and `RegisterForm.jsx` for email/password and social logins.
- **Password Reset**: Allows users to recover their accounts.
- **Protected Routes**: Restricts project creation and management to authenticated users.

### **5. Project Creation & Management**
- **`ProjectForm.jsx`**: Multi-step form for creating projects with a rich text editor.
- **Image Upload**: Allows users to add project thumbnails.
- **Reward Tier Configuration**: Users can define pricing, descriptions, and limits for rewards.

### **6. User Profile**
- **Dashboard**: Displays backed and created projects.
- **Profile Editing**: Users can update avatars, bio, and social links.
- **Transaction History**: Provides a record of donations and received funds.

### **7. Admin & Analytics**
- **Analytics Dashboard (`DashboardChart.jsx`)**: Tracks project performance (funds raised over time, backer demographics).
- **Moderation Controls**: Enables admins to flag and manage projects for policy violations.

---

## Technical Specifications

### **Tech Stack**
- **Frontend Framework**: React.js (Vite)
- **Routing**: React Router v6 (Lazy Loading for pages)
- **State Management**:
  - `AuthContext.jsx`: Handles user authentication state.
  - `ProjectContext.jsx`: Manages project data fetching and caching.
- **Styling**: Tailwind CSS + DaisyUI
- **API Integration**:
  - Uses Axios (`utils/api.js`) with JWT authentication.
  - Form validation via `utils/validators.js`.
- **Responsive Design**: Mobile-first approach, optimized for all viewports (320px+).

### **Component Details**
- **`PaymentModal.jsx`**:
  - Integrates **Stripe Elements** for secure transactions.
  - Handles tier selection and donation amounts.
  - Displays success/error notifications.
- **`Navbar.jsx`**:
  - Adapts to user authentication state (guest vs. logged-in user).
  - Includes a debounced search bar for real-time project discovery.
  - Shows notification badges for new activity.
- **`ProgressBar.jsx`**:
  - Animates dynamically based on funding progress.
  - Displays raised amount vs. funding goal.

---

## Installation & Setup

### **Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn package manager

### **Installation Steps**
```sh
# Clone the repository
git clone https://github.com/varmakollu/crowdfund
cd crowdfund

# Install dependencies
npm install  # or yarn install

# Start development server
npm run dev  # or yarn dev
```

### **Environment Variables**
Create a `.env` file in the root directory and configure:
```env
VITE_API_BASE_URL=<your-api-url>
VITE_STRIPE_PUBLIC_KEY=<your-stripe-key>
```

---

## Contribution Guidelines
- Fork the repository and create a new branch.
- Follow the existing folder structure and coding conventions.
- Submit pull requests with detailed descriptions.

---

## License
This project is licensed under the MIT License.

---

Happy Coding! 🚀
