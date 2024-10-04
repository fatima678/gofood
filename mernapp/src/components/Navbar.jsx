// // // import React from 'react'
// // // import { Link } from 'react-router-dom'

// // // export default function Navbar() {
// // //   return (
// // //     <div>
// // //       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// // //   <div className="container-fluid">
// // //     <Link className="navbar-brand fs-1 fst-italic"  to="/">GoFood</Link>
// // //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// // //       <span className="navbar-toggler-icon"></span>
// // //     </button>
// // //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     
// // //       <div className="navbar-nav me-auto-mb-2">
// // //         <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
        
        
// // //       </div>
        
     
      
// // //       <div className='d-flex'>
// // //       <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
// // //       <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </nav>
// // //     </div>
// // //   )
// // // }



// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // export default function Navbar() {
// //   return (
// //     <div>
// //       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// //         <div className="container-fluid">
// //           <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
// //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           
// //             <div className="navbar-nav me-auto mb-2">
// //               <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
// //               {(localStorage.getItem("authToken")) ? 
          
// //               <Link className='nav-link-active fs-5' aria-current = "page" to= '/'>My Orders</Link>
          
// //              : ""}
// //             </div>
            
          
// //             <div className="d-flex ">
// //               <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
// //               <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }


// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//         <div className="container-fluid">
//           <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           
//             <div className="navbar-nav me-auto mb-2">
//               <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
//               {/* Display My Orders link with the same styling as Home */}
//               {localStorage.getItem("authToken") && (
//                 <Link className="nav-link active fs-5" aria-current="page" to="/myorders">
//                   My Orders
//                 </Link>
//               )}
//             </div>
//             {(localStorage.getItem("authToken"))?
//             <div className="d-flex">
//               <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
//               <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
//             </div>
//             : <div className='btn bg-white text-success mx-2'>Logout</div>
//             }
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import Modal from '../Modal.jsx';



export default function Navbar() {
  const[cartView, setCartView] = useState(false)
  // Simulating if the user is logged in based on authToken presence
  const isLoggedIn = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const handleLogin = ()=>{
    localStorage.removeItem("authToken")
    navigate("/login")

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           
            <div className="navbar-nav me-auto mb-2">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              {/* Display My Orders link if logged in */}
              {isLoggedIn && (
                <Link className="nav-link active fs-5" aria-current="page" to="/myorders">
                  My Orders
                </Link>
              )}
            </div>
            
            {/* Conditional rendering based on login status */}
            <div className="d-flex">
              {isLoggedIn ? (
                <div>
               
                <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>MyCart {"  "}

                  <Badge pill bg = "danger">  2 </Badge>
                </div>
                {cartView? <Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null}
                <div className='btn bg-white text-danger mx-2' onClick={handleLogin}>Logout</div>
                </div>
              ) : (
                <>
                  <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                  <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
