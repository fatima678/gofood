// // // import React from 'react'
// // // import Navbar from '../components/Navbar'
// // // import Footer from '../components/Footer'

// // // function MyOrder() {
// // //     const [orderData, setorderData] = useState({})

// // //     const fetchMyOrder = async () => {
// // //         console.log(localStorage.getItem('userEmail'))
// // //         await fetch("http://localhost:5173/api/myorderData", {
           
// // //             method: 'POST',
// // //             headers: {
// // //                 'Content-Type': 'application/json'
// // //             },
// // //             body:JSON.stringify({
// // //                 email:localStorage.getItem('userEmail')
// // //             })
// // //         }).then(async (res) => {
// // //             let response = await res.json()
// // //             await setorderData(response)
// // //         })



// // //         // await res.map((data)=>{
// // //         //    console.log(data)
// // //         // })


// // //     }

// // //     useEffect(() => {
// // //         fetchMyOrder()
// // //     }, [])
// // //   return (
// // //     <>
// // //     <div>
// // //         <Navbar/>
      
// // //     </div>
// // //     <div className='container'>
// // //                 <div className='row'>

// // //                     {orderData !== {} ? Array(orderData).map(data => {
// // //                         return (
// // //                             data.orderData ?
// // //                                 data.orderData.order_data.slice(0).reverse().map((item) => {
// // //                                     return (
// // //                                         item.map((arrayData) => {
// // //                                             return (
// // //                                                 <div  >
// // //                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

// // //                                                         {data = arrayData.Order_date}
// // //                                                         <hr />
// // //                                                     </div> :

// // //                                                         <div className='col-12 col-md-6 col-lg-3' >
// // //                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
// // //                                                                 <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
// // //                                                                 <div className="card-body">
// // //                                                                     <h5 className="card-title">{arrayData.name}</h5>
// // //                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
// // //                                                                         <span className='m-1'>{arrayData.qty}</span>
// // //                                                                         <span className='m-1'>{arrayData.size}</span>
// // //                                                                         <span className='m-1'>{data}</span>
// // //                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
// // //                                                                             ₹{arrayData.price}/-
// // //                                                                         </div>
// // //                                                                     </div>
// // //                                                                 </div>
// // //                                                             </div>

// // //                                                         </div>



// // //                                                     }

// // //                                                 </div>
// // //                                             )
// // //                                         })

// // //                                     )
// // //                                 }) : ""
// // //                         )
// // //                     }) : ""}
// // //                 </div>


// // //             </div>
// // //     <div>
// // //     <Footer/>
  
// // // </div>
// // //     </>
    
// // //   )
// // // }

// // // export default MyOrder



// // // 6 october
// // import React, { useEffect, useState } from 'react';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // function MyOrder() {
// //     const [orderData, setOrderData] = useState([]); // Initialize as an array

// //     const fetchMyOrder = async () => {
// //         const userEmail = localStorage.getItem('userEmail');
// //         console.log(userEmail);

// //         try {
// //             const response = await fetch("http://localhost:4000/api/myorderData", { // Ensure the URL is correct
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({
// //                     email: userEmail
// //                 })
// //             });

// //             if (!response.ok) {
// //                 throw new Error("Network response was not ok");
// //             }

// //             const data = await response.json();
// //             setOrderData(data);
// //         } catch (error) {
// //             console.error("Error fetching order data:", error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchMyOrder();
// //     }, []);

// //     return (
// //         <>
// //             <div>
// //                 <Navbar />
// //             </div>
// //             <div className='container'>
// //                 <div className='row'>
// //                     {Object.keys(orderData).length > 0 ? (
// //                         orderData.map((data) => {
// //                             return data.orderData ? (
// //                                 data.orderData.order_data.slice(0).reverse().map((item, index) => (
// //                                     <div key={index}>
// //                                         {item.map((arrayData, index) => (
// //                                             <div key={index} className='col-12 col-md-6 col-lg-3'>
// //                                                 {arrayData.Order_date && (
// //                                                     <div className='m-auto mt-5'>
// //                                                         <div>{arrayData.Order_date}</div>
// //                                                         <hr />
// //                                                     </div>
// //                                                 )}
// //                                                 <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
// //                                                     <img src={arrayData.img} className="card-img-top" alt={arrayData.name} style={{ height: "120px", objectFit: "fill" }} />
// //                                                     <div className="card-body">
// //                                                         <h5 className="card-title">{arrayData.name}</h5>
// //                                                         <div className='container w-100 p-0' style={{ height: "38px" }}>
// //                                                             <span className='m-1'>{arrayData.qty}</span>
// //                                                             <span className='m-1'>{arrayData.size}</span>
// //                                                             <div className='d-inline ms-2 h-100 w-20 fs-5'>
// //                                                                 ₹{arrayData.price}/-
// //                                                             </div>
// //                                                         </div>
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 ))
// //                             ) : null;
// //                         })
// //                     ) : (
// //                         <div className='m-5 w-100 text-center fs-3'>No Orders Found</div>
// //                     )}
// //                 </div>
// //             </div>
// //             <div>
// //                 <Footer />
// //             </div>
// //         </>
// //     );
// // }

// // export default MyOrder;




// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function MyOrder() {
//     const [orderData, setOrderData] = useState([]); // Initialize as an array

//     const fetchMyOrder = async () => {
//         const userEmail = localStorage.getItem('userEmail');
//         console.log("User Email:", userEmail); // Log the retrieved email
    
//         if (!userEmail) {
//             console.error("No email found in localStorage");
//             return;
//         }
    
//         try {
//             const response = await fetch("http://localhost:4000/api/myorderData", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email: userEmail }),
//             });
    
//             console.log("Response status:", response.status); // Log the response status
    
//             if (!response.ok) {
//                 const errorText = await response.text();
//                 console.error("Response error:", errorText);
//                 throw new Error("Network response was not ok");
//             }
    
//             const data = await response.json();
//             console.log("Fetched order data:", data); // Log the fetched order data
//             setOrderData(data);
//         } catch (error) {
//             console.error("Error fetching order data:", error);
//         }
//     };
    
//     useEffect(() => {
//         fetchMyOrder();
//     }, []);
    
//     return (
//         <>
//             <div>
//                 <Navbar />
//             </div>
//             <div className='container'>
//                 <div className='row'>
//                     {orderData.length > 0 ? (
//                         orderData.map((order, orderIndex) => (
//                             order.order_data.length > 0 ? ( // Check if there is order_data
//                                 order.order_data.map((orderDetails, detailsIndex) => (
//                                     <div key={detailsIndex} className='col-12 col-md-6 col-lg-3'>
//                                         {orderDetails[0].Order_date && ( // Check if Order_date exists
//                                             <div className='m-auto mt-5'>
//                                                 <div>{orderDetails[0].Order_date}</div>
//                                                 <hr />
//                                             </div>
//                                         )}
//                                         {orderDetails.map((item, itemIndex) => (
//                                             <div key={itemIndex} className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                 <img src={item.img} className="card-img-top" alt={item.name} style={{ height: "120px", objectFit: "fill" }} />
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">{item.name}</h5>
//                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                         <span className='m-1'>{item.qty}</span>
//                                                         <span className='m-1'>{item.size}</span>
//                                                         <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                                             ₹{item.price}/-
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))
//                             ) : (
//                                 <div key={orderIndex} className='m-5 w-100 text-center fs-3'>No Orders Found</div>
//                             )
//                         ))
//                     ) : (
//                         <div className='m-5 w-100 text-center fs-3'>No Orders Found</div>
//                     )}
//                 </div>
//             </div>
//             <div>
//                 <Footer />
//             </div>
//         </>
//     );
    
// }

// export default MyOrder;



import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyOrder() {
    const [orderData, setOrderData] = useState([]); // Initialize as an array

    // Function to fetch order data
    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        console.log("User Email:", userEmail); // Log the retrieved email
    
        if (!userEmail) {
            console.error("No email found in localStorage");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:4000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail }),
            });
    
            console.log("Response status:", response.status); // Log the response status
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Response error:", errorText);
                throw new Error("Network response was not ok");
            }
    
            const data = await response.json();
            console.log("Fetched order data:", data); // Log the fetched order data
            setOrderData(data); // Set the order data state
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []); // Fetch orders on component mount

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                {orderData.length > 0 ? (
    orderData.map((order, orderIndex) => (
        order.order_data.length > 0 ? ( // Check if there is order_data
            order.order_data.map((orderDetails, detailsIndex) => {
                // Filter out any empty or invalid order details
                const validOrderDetails = orderDetails.filter(item => item && item.name && item.price > 0);

                if (validOrderDetails.length > 0) {
                    return (
                        <div key={detailsIndex} className='col-12 col-md-6 col-lg-3'>
                            {orderDetails[0]?.Order_date && ( // Optional chaining to check if Order_date exists
                                <div className='m-auto mt-5'>
                                    <div>{orderDetails[0].Order_date}</div>
                                    <hr />
                                </div>
                            )}
                            {validOrderDetails.map((item, itemIndex) => (
                                <div key={itemIndex} className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                    <img src={item.img || 'default-image-url.jpg'} className="card-img-top" alt={item.name || 'Item'} style={{ height: "120px", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name || 'Item Name'}</h5>
                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                            <span className='m-1'>{item.qty || 'Qty'}</span>
                                            <span className='m-1'>{item.size || 'Size'}</span>
                                            <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                ₹{item.price || '0.00'}/-
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                } else {
                    return null; // Return null if no valid order details
                }
            })
        ) : (
            <div key={orderIndex} className='m-5 w-100 text-center fs-3'>No Orders Found</div>
        )
    ))
) : (
    <div className='m-5 w-100 text-center fs-3'>No Orders Found</div>
)}

                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyOrder;
