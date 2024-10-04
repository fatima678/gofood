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
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
      </div>
    );
  }

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
                <td>${(food.price * food.qty).toFixed(2)}</td> {/* Display item total */}
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
      </div>
    </div>
  );
}
