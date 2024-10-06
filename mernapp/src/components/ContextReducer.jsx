// import React, {  act, useContext, useReducer } from 'react'
// import { createContext } from 'react'
// const CartDispatchContext = createContext()
// const CartStateContext = createContext()


// const reducer = (state, action ) =>{
//     switch(action.type){
//         case "ADD":
//         return [...state, {id:action.id, name: action.name, qty:action.Qty, size: action.size, price: action.price, img: action.img}]
//         default:
//         console.log("Error in reducer")
//     }

// }

// export const  CartProvider = ({children})=>{
//     const[state, dispatch] = useReducer(reducer, [])

//     return(
//         <CartDispatchContext.Provider value={dispatch}>
//             <CartStateContext.Provider value={state}>
// {children}
//             </CartStateContext.Provider>

//         </CartDispatchContext.Provider>

//     )
// }
// export const useCart=()=> useContext(CartStateContext)
// export const useDispatchCart=()=> useContext(CartDispatchContext)




import React, { useContext, useReducer, createContext } from "react";

// Contexts for Cart State and Dispatch
const CartDispatchContext = createContext();
const CartStateContext = createContext();


const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
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
        let newArr = [...state];
        newArr.splice(action.index, 1);
        return newArr;
  
      case "UPDATE":
        let updatedArr = state.map((food) => {
          if (food.id === action.id) {
            return {
              ...food,
              qty: food.qty + parseInt(action.qty), // Update the quantity correctly
              price: action.price * (food.qty + parseInt(action.qty)), // Adjust price based on new quantity
            };
          }
          return food; // Keep other food items unchanged
        });
        return updatedArr;
  
      case "DROP":
        return []; // Clear the cart by returning an empty array
  
      default:
        console.log("Error in reducer");
        return state;
    }
  };
  

// CartProvider Component to manage Cart State
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);  // Initial state is an empty array

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

// Custom hooks to use Cart State and Dispatch
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
