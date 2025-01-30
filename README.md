

# Mini E-Commerce Application

This is a mini e-commerce web application built using **Next.js**. It includes features like a landing page with product listings, a product details page, and a cart functionality. The application is fully responsive and uses **TypeScript** for better code quality.

## Live Demo

You can access the live application here: [Easy-commerce](https://easy-commerce-ten.vercel.app/)

## Features

1. **Landing Page**:
   - Displays a list of products fetched from a mock API.
   - Each product card shows:
     - Product image
     - Name
     - Price
     - "Add to Cart" button

2. **Product Details Page**:
   - Dynamic route (`/product/[id]`) for each product.
   - Displays:
     - Product image
     - Name
     - Description
     - Price
     - "Add to Cart" button
     - Related products (based on the product category)

3. **Cart Functionality**:
   - Cart page (`/cart`) to:
     - List all products added to the cart.
     - Show the total price of the cart.
     - Allow users to remove items from the cart.

4. **API Integration**:
   - Uses a mock API to fetch product data.
   - Implements API routes in Next.js for:
     - Fetching products.
     - Adding/removing items in the cart.

5. **Performance**:
   - Uses **Server-Side Rendering (SSR)** for the landing page.
   - Uses **Static Site Generation (SSG)** for product details.

6. **Responsive Design**:
   - Works seamlessly on both desktop and mobile devices.

7. **Code Quality**:
   - Built with **TypeScript**.
   - Follows clean coding practices.
   - Includes comments for better understanding.

## Technologies Used

- **Next.js**: For server-side rendering and static site generation.
- **TypeScript**: For type safety and better code quality.
- **Tailwind CSS**: For responsive and modern styling.
- **Mock API**: For fetching product data.
- **Vercel**: For hosting the application.

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/MD-HABIB-ULLA/easy-commerce]
   cd [easy-commerce]
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
.
├── components/          # Reusable components
├── pages/               # Application pages
│   ├── api/             # API routes
│   ├── cart/            # Cart page
│   ├── product/         # Product details page
│   └── index.tsx        # Landing page
├── styles/              # Global styles
├── types/               # TypeScript types
├── utils/               # Utility functions
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## API Integration

The application uses a mock API to fetch product data. The API routes are implemented in the `pages/api` directory.

- **Fetch Products**: `/api/products`


## Performance Optimization

- **Server-Side Rendering (SSR)**: Used for the landing page to fetch product data dynamically.
- **Static Site Generation (SSG)**: Used for the product details page to pre-render pages at build time.

## Responsive Design

The application is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## Code Quality

- **TypeScript**: Ensures type safety and reduces runtime errors.
- **Clean Code**: Follows best practices for readability and maintainability.
- **Comments**: Added where necessary for better understanding.

## Hosting

The application is hosted on **Vercel**. You can access the live demo here: [Easy-commerce](https://easy-commerce-ten.vercel.app/)

---

## Author

- **Habib Ulla**  
  GitHub: [GitHub Profile Link](https://github.com/MD-HABIB-ULLA?tab=repositories)  
  Email: [habibulla1278@gmail.com]

---

Feel free to reach out if you have any questions or feedback!

