// // import React, {  act, useContext, useReducer } from 'react'
// // import { createContext } from 'react'
// // const CartDispatchContext = createContext()
// // const CartStateContext = createContext()


// // const reducer = (state, action ) =>{
// //     switch(action.type){
// //         case "ADD":
// //         return [...state, {id:action.id, name: action.name, qty:action.Qty, size: action.size, price: action.price, img: action.img}]
// //         default:
// //         console.log("Error in reducer")
// //     }

// // }

// // export const  CartProvider = ({children})=>{
// //     const[state, dispatch] = useReducer(reducer, [])

// //     return(
// //         <CartDispatchContext.Provider value={dispatch}>
// //             <CartStateContext.Provider value={state}>
// // {children}
// //             </CartStateContext.Provider>

// //         </CartDispatchContext.Provider>

// //     )
// // }
// // export const useCart=()=> useContext(CartStateContext)
// // export const useDispatchCart=()=> useContext(CartDispatchContext)




// // import React, { useContext, useReducer, createContext } from "react";

// // // Contexts for Cart State and Dispatch
// // const CartDispatchContext = createContext();
// // const CartStateContext = createContext();


// // const reducer = (state, action) => {
// //     switch (action.type) {
// //       case "ADD":
// //         return [
// //           ...state,
// //           {
// //             id: action.id,
// //             name: action.name,
// //             qty: action.qty,
// //             size: action.size,
// //             price: action.price,
// //             img: action.img,
// //           },
// //         ];
  
// //       case "REMOVE":
// //         let newArr = [...state];
// //         newArr.splice(action.index, 1);
// //         return newArr;
  
// //       case "UPDATE":
// //         let updatedArr = state.map((food) => {
// //           if (food.id === action.id) {
// //             return {
// //               ...food,
// //               qty: food.qty + parseInt(action.qty), // Update the quantity correctly
// //               price: action.price * (food.qty + parseInt(action.qty)), // Adjust price based on new quantity
// //             };
// //           }
// //           return food; // Keep other food items unchanged
// //         });
// //         return updatedArr;
  
// //       case "DROP":
// //         return []; // Clear the cart by returning an empty array
  
// //       default:
// //         console.log("Error in reducer");
// //         return state;
// //     }
// //   };
  

// // // CartProvider Component to manage Cart State
// // export const CartProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(reducer, []);  // Initial state is an empty array

// //   return (
// //     <CartDispatchContext.Provider value={dispatch}>
// //       <CartStateContext.Provider value={state}>
// //         {children}
// //       </CartStateContext.Provider>
// //     </CartDispatchContext.Provider>
// //   );
// // };

// // // Custom hooks to use Cart State and Dispatch
// // export const useCart = () => useContext(CartStateContext);
// // export const useDispatchCart = () => useContext(CartDispatchContext);

// // 6 october
// import React, { useContext, useReducer, createContext } from "react";

// // Contexts for Cart State and Dispatch
// const CartDispatchContext = createContext();
// const CartStateContext = createContext();

// // Cart reducer to manage the cart actions
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       // Add new item to the cart
//       return [
//         ...state,
//         {
//           id: action.id,
//           name: action.name,
//           qty: action.qty,
//           size: action.size,
//           price: action.price,
//           img: action.img,
//         },
//       ];

//     case "REMOVE":
//       // Remove an item by index
//       return state.filter((_, index) => index !== action.index);

//     case "UPDATE":
//       // Update the quantity of a specific item
//       return state.map((food) => {
//         if (food.id === action.id) {
//           const newQty = food.qty + parseInt(action.qty);
//           return {
//             ...food,
//             qty: newQty,
//             price: (action.price * newQty).toFixed(2), // Adjust price based on new quantity
//           };
//         }
//         return food; // Keep other food items unchanged
//       });

//     case "DROP":
//       // Clear the cart by returning an empty array
//       return [];

//     default:
//       console.error("Error in reducer: Unknown action type", action.type);
//       return state; // Return current state for unknown action
//   }
// };

// // CartProvider Component to manage Cart State
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []); // Initial state is an empty array

//   return (
//     <CartDispatchContext.Provider value={dispatch}>
//       <CartStateContext.Provider value={state}>
//         {children}
//       </CartStateContext.Provider>
//     </CartDispatchContext.Provider>
//   );
// };

// // Custom hooks to use Cart State and Dispatch
// export const useCart = () => {
//   const context = useContext(CartStateContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export const useDispatchCart = () => {
//   const context = useContext(CartDispatchContext);
//   if (context === undefined) {
//     throw new Error("useDispatchCart must be used within a CartProvider");
//   }
//   return context;
// };


// 6 ocotber
import React, { useContext, useReducer, createContext } from "react";

// Contexts for Cart State and Dispatch
const CartDispatchContext = createContext();
const CartStateContext = createContext();

// Cart reducer to manage the cart actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Add new item to the cart
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    case "REMOVE":
      // Remove an item by index
      return state.filter((_, index) => index !== action.index);

    case "UPDATE":
      // Update the quantity of a specific item
      return state.map((food) => {
        if (food.id === action.id) {
          const newQty = food.qty + parseInt(action.qty);
          return {
            ...food,
            qty: newQty,
            price: (action.price * newQty).toFixed(2), // Adjust price based on new quantity
          };
        }
        return food; // Keep other food items unchanged
      });

    case "DROP":
      // Clear the cart by returning an empty array
      return [];

    case "CLEAR":
      // Handle the CLEAR action to reset the cart
      return []; // Returns an empty array

    default:
      console.error("Error in reducer: Unknown action type", action.type);
      return state; // Return current state for unknown action
  }
};

// CartProvider Component to manage Cart State
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []); // Initial state is an empty array

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

// Custom hooks to use Cart State and Dispatch
export const useCart = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const useDispatchCart = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useDispatchCart must be used within a CartProvider");
  }
  return context;
};
