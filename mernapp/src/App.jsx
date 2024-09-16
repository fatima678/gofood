// import React from "react";
// import Home from "./screens/Home";
// import Login from "./screens/Login";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrao-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; // Corrected the typo here
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
