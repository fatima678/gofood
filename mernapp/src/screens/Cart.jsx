// import React from "react";
// // import trash from '../trash.svg'
// import {useCart, useDispatchCart} from '../components/ContextReducer';
// export default function Cart(){
//     let data = useCart();
//     let dispatch = useDispatchCart();
//     if(data.length === 0){
//         return(
//             <div>
//                 <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
//             </div>
//         )
//     }
//     let totalPrice = data.reduce((total, food) => total + food.price , 0)
//     return(
//         <div>
//             <div className="container m-auto mt-5 table-responsive table-responsive sm table-responsive-md">
//                 <table className="table table-hover">
//                     <thead className="table table-hover">
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Quantity</th>
//                             <th scope="col">Options</th>
//                             <th scope="col">Amount</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((food, index)=>(
//                             <tr>
//                                 <td scope="row">{index + 1}</td>
//                                 <td>{food.name}</td>
//                                 <td>{food.qty}</td>
//                                 <td>{food.size}</td>
//                                 <td>{food.price}</td>
//                                 <td > <button type="button" className="btn p-0"> <img src = {trash} alt="delete" onClick={()=>{ dispatch ({ type: "REMOVE " , index: index})}}></img></button></td>

//                             </tr>
//                         ))}

//                     </tbody>
//                 </table>

//             </div>
//         </div>
//     )
// }
//5 october import React from "react";
// import { useCart, useDispatchCart } from "../components/ContextReducer";
// // If you're using FontAwesome, you'll need to install it via npm and import it here
// // import { FaTrash } from 'react-icons/fa';

// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();

//   if (data.length === 0) {
//     return (
//       <div>
//         <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
//       </div>
//     );
//   }

//   let totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div>
//       <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
//         <table className="table table-hover">
//           <thead className="table table-hover">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Options</th>
//               <th scope="col">Amount</th>
//               <th scope="col">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr key={index}>
//                 <td scope="row">{index + 1}</td>
//                 <td>{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td>
//                   {/* Using Bootstrap's trash icon instead of the image */}
//                   <button
//                     type="button"
//                     className="btn p-0"
//                     onClick={() => dispatch({ type: "REMOVE", index: index })}
//                   >
//                     <i className="bi bi-trash text-danger"></i>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="text-end fw-bold fs-5">
//           Total Price: ${totalPrice}
//         </div>
//       </div>
//     </div>
//   );
// }

// again 5 october
// import { useCart, useDispatchCart } from "../components/ContextReducer";

// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();

//   if (data.length === 0) {
//     return (
//       <div>
//         <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
//       </div>
//     );
//   }
//  // Your existing checkout function
//  const handleCheckOut = async () => {
//   let userEmail = localStorage.getItem("userEmail");

//   // Check if email is available
//   if (!userEmail) {
//       console.error("User email is missing!");
//       return; // Prevent checkout if email is not available
//   }

//   try {
//       let response = await fetch("http://localhost:4000/api/orderData", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//               order_data: cartData,
//               email: userEmail,
//               order_date: new Date().toDateString(),
//           }),
//       });

//       // Handle response
//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       let responseData = await response.json();
//       console.log('Order data:', responseData);

//       // Show success message
//       setSuccessMessage("Checkout successful! Your order has been placed.");

//       // Clear the cart
//       setCartData([]);
//       localStorage.removeItem("cartData");

//       // Reset success message after 3 seconds
//       setTimeout(() => {
//           setSuccessMessage("");
//       }, 3000);
//   } catch (error) {
//       console.error('Error during checkout:', error);
//   }
// };


//   // Correctly calculate the total price by multiplying price by quantity
//   let totalPrice = data.reduce((total, food) => total + (food.price * food.qty), 0);

//   return (
//     <div>
//       <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
//         <table className="table table-hover">
//           <thead className="table table-hover">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Options</th>
//               <th scope="col">Amount</th>
//               <th scope="col">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr key={index}>
//                 <td scope="row">{index + 1}</td>
//                 <td>{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>${(food.price * food.qty).toFixed(2)}</td> 
//                 <td>
//                   <button
//                     type="button"
//                     className="btn p-0"
//                     onClick={() => dispatch({ type: "REMOVE", index: index })}
//                   >
//                     <i className="bi bi-trash text-danger"></i>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="text-end fw-bold fs-5">
//           Total Price: ${totalPrice.toFixed(2)} {/* Format to two decimal places */}
//         </div>
//         <div>
//           <button className="btn bg-success mt-5" onClick={handleCheckOut}>Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// 6 october
import React, { useState } from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  // If the cart is empty, display a message
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
      </div>
    );
  }

  // Your existing checkout function
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
  
    // Check if email is available
    if (!userEmail) {
      console.error("User email is missing!");
      return; // Prevent checkout if email is not available
    }
  
    try {
      let response = await fetch("http://localhost:4000/api/orderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data, // Assuming you use 'data' to get cart contents
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });
  
      // Handle response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let responseData = await response.json();
      console.log('Order data:', responseData);
  
      // Show success message
      setSuccessMessage("Checkout successful! Your order has been placed.");
  
      // Clear the cart using the CLEAR action
      dispatch({ type: "CLEAR" }); // Clear cart
  
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };
  

  // Correctly calculate the total price by multiplying price by quantity
  let totalPrice = data.reduce((total, food) => total + (food.price * food.qty), 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="table table-hover">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Options</th>
              <th scope="col">Amount</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>${(food.price * food.qty).toFixed(2)}</td> 
                <td>
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => dispatch({ type: "REMOVE", index: index })}
                  >
                    <i className="bi bi-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end fw-bold fs-5">
          Total Price: ${totalPrice.toFixed(2)} {/* Format to two decimal places */}
        </div>
        <div>
          <button className="btn bg-success mt-5" onClick={handleCheckOut}>Checkout</button>
        </div>
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>} {/* Display success message */}
      </div>
    </div>
  );
}

