import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of our cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// Create a slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If the item already exists in the cart, just increase the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions for use in components
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// Selector to get the cart items
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

// Selector to calculate the total price
export const selectTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
