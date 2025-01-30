# Mini E-Commerce Application (Easy commerce)

## 🛒 Live Demo
[Visit the Live Website](https://easy-commerce-ten.vercel.app/)

## 📌 Overview
This is a **mini e-commerce web application** built using **Next.js**. It allows users to browse products, view details, and manage a shopping cart.

## 🚀 Features

### ✅ Landing Page
- Displays a list of products fetched from a mock API.
- Each product card includes:
  - Product image
  - Name
  - Price
  - "Add to Cart" button

### ✅ Product Details Page
- Clicking a product navigates to a dynamic route **(/product/[id])**.
- The product details page includes:
  - Product image
  - Name
  - Description
  - Price
  - "Add to Cart" button
  - Related products (fetched based on the category)



### ✅ API Integration
- Uses a mock API (Faker.js ) to fetch product data.
- Implements API routes in Next.js for:
  - Fetching products
  - Adding/removing items in the cart

### ✅ Performance Optimization
- **Server-side rendering (SSR)** for the landing page.
- **Static site generation (SSG)** for product details.

### ✅ Responsive Design
- Fully responsive on **mobile & desktop devices**.

### ✅ Code Quality
- Built with **TypeScript**.
- Follows **clean coding practices**.
- Well-commented for better readability.

## 🛠️ Technologies Used
- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS** (Styling)
- **Mock API (Faker.js / JSON Placeholder)**

## 📦 Installation & Setup

1. **Clone the Repository:**
```sh
 git clone https://github.com/MD-HABIB-ULLA/easy-commerce
```

2. **Navigate to the project directory:**
```sh
 cd easy-commerce
```

3. **Install dependencies:**
```sh
 npm install
 # or
yarn install
```

4. **Run the development server:**
```sh
 npm run dev
 # or
yarn dev
```

5. **Open your browser and visit:**
```sh
 http://localhost:3000
```

## 📤 Deployment
The application is hosted on **Vercel**. You can visit the live version here:
👉 **[Live Demo](https://easy-commerce-ten.vercel.app/)**

## 📂 Folder Structure
```
📦 your-project
 ┣ 📂 pages
 ┃ ┣ 📂 api       # API routes
 ┃ ┣ 📂 cart      # Cart page
 ┃ ┣ 📂 product   # Dynamic product pages
 ┃ ┗ 📜 index.tsx # Landing page
 ┣ 📂 components  # UI components
 ┣ 📂 hooks       # Custom hooks
 ┣ 📂 styles      # Global styles
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

## 📜 License
This project is **open-source** and available for learning purposes. Feel free to fork & modify!

---
🚀 **Developed by [Habib Ulla](https://github.com/MD-HABIB-ULLA)**

