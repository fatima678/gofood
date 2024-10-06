// import React from "react";

// export default function Card(props) {
//   let option = props.option;
//   let priceOptions = Object.keys(option)
//   return (
//     <div>
//       <div>
//         <div
//           className="card mt-3"
//           style={{ width: "18rem", maxHeight: "360px" }}
//         >
//           <img src={props.imgSrc} className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">{props.foodName}</h5>
          
//             <div className="container w-100">
//               <select className="m-2 h-100  bg-success rounded">
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   );
//                 })}
//               </select>
//               <select className="m-2 h-100  bg-success rounded">
//                 {priceOptions.map((data)=>{
//                   return <option key={data} value={data}>{data}</option>
//                 })}
//               </select>
//               <div className="d-inline h-100 fs-5">Total price</div>
//             </div>
//           </div>
//           </div>
//         </div>
//       </div>
   
//   );
// }


// // //testing
// // // import React from "react";

// // // export default function Card(props) {
// // //   // Ensure options are defined or default to an empty object
// // //   let options = props.options || {}; 
// // //   let priceOptions = Object.keys(options);

// // //   return (
// // //     <div>
// // //       <div>
// // //         <div
// // //           className="card mt-3"
// // //           style={{ width: "18rem", maxHeight: "360px" }}
// // //         >
// // //           <img
// // //             src="https://images.unsplash.com/photo-1550935770-d58cbf30c003?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// // //             className="card-img-top"
// // //             alt="..."
// // //           />
// // //           <div className="card-body">
// // //             <h5 className="card-title">{props.foodName}</h5>

// // //             <div className="container w-100">
// // //               <select className="m-2 h-100  bg-success rounded">
// // //                 {Array.from(Array(6), (e, i) => {
// // //                   return (
// // //                     <option key={i + 1} value={i + 1}>
// // //                       {i + 1}
// // //                     </option>
// // //                   );
// // //                 })}
// // //               </select>

// // //               <select className="m-2 h-100  bg-success rounded">
// // //                 {priceOptions.length > 0 ? (
// // //                   priceOptions.map((data) => {
// // //                     return (
// // //                       <option key={data} value={data}>
// // //                         {data}
// // //                       </option>
// // //                     );
// // //                   })
// // //                 ) : (
// // //                   <option>No options available</option>
// // //                 )}
// // //               </select>

// // //               <div className="d-inline h-100 fs-5">Total price</div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// import React, { useState } from "react";
// import { useCart, useDispatchCart } from "./ContextReducer";

// export default function Card(props) {
//   let dispatch = useDispatchCart()
//   let data = useCart()
//   let option = props.option;
//   let priceOptions = Object.keys(option); 
//   const [qty, setQty] = useState(1)
//   const [size, setSize] = useState("")

//   const handleAddToCart  =  async ()=>{
//     await dispatch({type:"ADD", id:props.foodItem._id, name: props.foodItem.name, price: props. finalPrice, qty: qty, size: size } )
//     console.log(data)

//   }

//   return (
//     <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
//       <div className="card" style={{ width: "18rem", maxHeight: "400px" }}>
//         <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "180px", objectFit: "cover" }} />
//         <div className="card-body d-flex flex-column">
//           <h5 className="card-title">{props.foodItem.name}</h5>

//           <div className="mt-auto">
//             <div className="container p-0 w-100">
//               <select className="m-2 h-100 bg-success rounded"onChange={(e)=>setQty(e.target.value)}>
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   );
//                 })}
//               </select>
//               <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setSize(e.target.value)}>
//                 {priceOptions.map((data) => {
//                   return <option key={data} value={data}>{data}</option>;
//                 })}
//               </select>
//               <div className="d-inline h-100 fs-5">Total price</div>
//             </div>
//           </div>
//           <hr>
//           </hr>
//           <button className="btn btn-success justify-center" onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

//testinggggg
import React, { useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";


export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let option = props.option;
  let priceOptions = Object.keys(option); 
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);  // Default to first option

  const handleAddToCart  = async () => {
    let food = []
    for(const item  of data ){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: props.option[size],  // Set the final price based on selected size
          qty: qty,
          size: size
        });
        return;
      }
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: props.option[size],  // Set the final price based on selected size
      qty: qty,
      size: size
    });
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
      <div className="card" style={{ width: "18rem", maxHeight: "400px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "180px", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.foodItem.name}</h5>

          <div className="mt-auto">
            <div className="container p-0 w-100">
              <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" onChange={(e) => setSize(e.target.value)}>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>;
                })}
              </select>
              <div className="d-inline h-100 fs-5">
                Total price: ₹{qty * props.option[size]}  {/* Calculate total price */}
              </div>
            </div>
          </div>
          <hr></hr>
          <button className="btn btn-success justify-center" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
