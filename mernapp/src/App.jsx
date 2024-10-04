// // import React from "react";
// // import Home from "./screens/Home";
// // import Login from "./screens/Login";

// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import '../node_modules/bootstrap-dark-5/dist/css/bootstrao-dark.min.css'
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// // export default function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Routes>
// //           <Route exact path="/" element={<Home />} />
// //           <Route exact path="login" element={<Login />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }


// import React from "react";
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from './screens/Signup'
// import Cart from "./components/Cart";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; 
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import { CartProvider } from "./components/ContextReducer";

// export default function App() {
//   return (
//     <CartProvider>
//       <Router>
//       <div>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="login" element={<Login />} />
//           <Route exact path="createuser" element={<Signup/>} />
          
//           </Routes>
       
//       </div>
//     </Router>

//     </CartProvider>
    
//   );
// }

// 5 october 
import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from './screens/Signup';
import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { CartProvider } from "./components/ContextReducer";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            {/* Adding the Cart route */}
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
