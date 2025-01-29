import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface CartState {
  items: Product[]; // Array to store cart items
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        // Product is not in the cart, add it
        state.items.push(action.payload);
      }
      // No action if product is already in the cart (no quantity change)
    },
    removeFromCart(state, action: PayloadAction<string>) {
      // Remove the product by id
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      // Clears all products from the cart
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
