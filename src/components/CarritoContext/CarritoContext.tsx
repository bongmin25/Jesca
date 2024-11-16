
// import React, { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const initialState = {
//   items: [],
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingProductIndex = state.items.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (existingProductIndex >= 0) {
//         const updatedItems = [...state.items];
//         updatedItems[existingProductIndex].quantity += 1;
//         return { ...state, items: updatedItems };
//       }

//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, quantity: 1 }],
//       };

//     case "INCREMENT_QUANTITY":
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };

//     case "DECREMENT_QUANTITY":
//       return {
//         ...state,
//         items: state.items
//           .map((item) =>
//             item.id === action.payload.id && item.quantity > 1
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           )
//           .filter((item) => item.quantity > 0),
//       };

//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
