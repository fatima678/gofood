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



import React from "react";

export default function Card(props) {
  let option = props.option;
  let priceOptions = Object.keys(option);

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
      <div className="card" style={{ width: "18rem", maxHeight: "400px" }}>
        <img src={props.imgSrc} className="card-img-top" alt="..." style={{ height: "180px", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.foodName}</h5>

          <div className="mt-auto">
            <div className="container p-0 w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>;
                })}
              </select>
              <div className="d-inline h-100 fs-5">Total price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

