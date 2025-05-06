// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id:number ;
  src: string;
  title?: string;
  title1?: string;
  price: number;
  size:string;
  color:string;
  discountedPrice?: number;
  quantity: number;

}

interface CartState {
  cartItems: CartItem[];
}

const initialState:CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
    
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    
    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;
      state.cartItems = state.cartItems.filter(item => !(item.id === id && item.size === size && item.color === color));
    },
    increaseQuantity: (state, action) => {
      const { id, size, color } = action.payload;
      const item = state.cartItems.find(item => item.id === id && item.size === size && item.color === color);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const { id, size, color } = action.payload;
      const item = state.cartItems.find(item => item.id === id && item.size === size && item.color === color);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
