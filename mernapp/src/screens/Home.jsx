// // // import React , {useEffect, useState}from "react";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Card from "../components/Card";
// // // import Carousal from "../components/Carousal";

// // // function Home() {
// // //   const [foodCat, setFoodCat] = useState([])
// // //   const [foodItem, setFoodItem] = useState([])

// // //   const loadData = async()=>{
// // //     let response = await fetch("http://localhost:4001/api/foodData", {
// // //       method: "POST",
// // //       headers: {
// // //         'Content-Type': 'application/json'
// // //       }
// // //     })
// // //     response = await response.json();
// // //     setFoodItem(response[0])
// // //     setFoodCat(response[1]);
// // //     // console.log(response[0], response[1])
// // //   }


// // //   useEffect(()=>{
// // //     loadData()
// // //   },[])


// // //   return (
// // //     <div>
// // //       <div>
// // //         <Navbar />
// // //       </div>
// // //       <div><Carousal/></div>
// // //       <div className="container">
// // //         {
// // //           foodCat !==[]
// // //           ?foodCat.map((data)=>{
// // //             return
// // //             <div>{data.CategoryName}</div>
// // //           }): <div>"""""""</div>
// // //         }
// // //         <Card/>
       
// // //       </div>

// // //       <div>
// // //         <Footer />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;



// // // import React, { useEffect, useState } from "react";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Card from "../components/Card";
// // // import Carousal from "../components/Carousal";

// // // function Home() {
// // //   const [foodCat, setFoodCat] = useState([]);
// // //   const [foodItem, setFoodItem] = useState([]);

// // //   const loadData = async () => {
// // //     let response = await fetch("http://localhost:4001/api/foodData", {
// // //       method: "POST",
// // //       headers: {
// // //         'Content-Type': 'application/json'
// // //       }
// // //     });
// // //     response = await response.json();
// // //     setFoodItem(response[0]);
// // //     setFoodCat(response[1]);
// // //     // console.log(response[0], response[1])
// // //   };

// // //   useEffect(() => {
// // //     loadData();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <div>
// // //         <Navbar />
// // //       </div>
// // //       <div><Carousal /></div>
// // //       <div className="container">
// // //         {
// // //           foodCat.length > 0
// // //           ? foodCat.map((data, index) => (
// // //             <div>
// // //             <div key={index} className="fs-3 m-3">{data.CategoryName}</div>
// // //           ))
// // //           : <div>No categories available</div>
// // //           <hr/></div>
// // //         }
// // //         <Card />
// // //       </div>

// // //       <div>
// // //         <Footer />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;
// // import React, { useEffect, useState } from "react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Card from "../components/Card";
// // import Carousal from "../components/Carousal";

// // function Home() {
// //   const [foodCat, setFoodCat] = useState([]);
// //   const [foodItem, setFoodItem] = useState([]);

// //   const loadData = async () => {
// //     let response = await fetch("http://localhost:4001/api/foodData", {
// //       method: "POST",
// //       headers: {
// //         'Content-Type': 'application/json'
// //       }
// //     });
// //     response = await response.json();
// //     setFoodItem(response[0]);
// //     setFoodCat(response[1]);
// //     // console.log(response[0], response[1])
// //   };

// //   useEffect(() => {
// //     loadData();
// //   }, []);

// //   return (
// //     <div>
// //       <div>
// //         <Navbar />
// //       </div>
// //       <div><Carousal /></div>
// //       <div className="container">
// //         {
// //           foodCat.length > 0
// //           ? foodCat.map((data, index) => (
// //             <div key={index}>
// //               <div className="fs-3 m-3">{data.CategoryName}</div>
// //               <hr /> {foodItem !==[]? foodItem.filter((item)=>item.CategoryName === data.CategoryName)
// //               .map(filterItems=>{
// //                 return(

// //                   <div key={filterItems._id}><Card/></div>
// //                 )
// //               }

// //               ) : <div>No such data found</div>}
// //             </div>
// //           ))
// //           : <div>No categories available</div>
// //         }
// //         <Card />
// //       </div>

// //       <div>
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;

// //testing
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Card from "../components/Card";


// function Home() {
//   const [search, setSearch] = useState([]);
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:4001/api/foodData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       let data = await response.json();
//       setFoodItem(data[0]);
//       setFoodCat(data[1]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (

//     <div>
//      <div><Navbar /></div> 
//       <div><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner" id='carousel'>
//     <div className='carousel-caption' style={{zIndex: "10"}}>
//     <div className="d-flex justify-content-center">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
//       {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
//     </div>
//     </div>
//     <div className="carousel-item active">
//       <img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
//       className="d-block w-100" 
//       alt="..."/>
     
//     </div>
//     <div className="carousel-item">
//       <img src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwJTIwaW1hZ2VzfGVufDB8fDB8fHww" className="d-block w-100" alt="..."/>
      
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo%26pid%3DApi&sp=1726581152T5065f1e21c702305841c4edd43a7939b27a8f5c5681be61952df1d1231a804f2" 
//       className="d-block w-100" alt="..."/>
      
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div></div>

//       <div className="container">
//         {foodCat.length > 0 ? (
//           foodCat.map((category, index) => (
//             <div key={index} className="row mb-3">
//               <div className="fs-3 m-3">{category.CategoryName}</div>
//               <hr />
//               {foodItem.length > 0 ? (
//                 foodItem
//                   .filter((item) => (item.CategoryName === category.CategoryName )&& (item.name.toLowerCase().includes(search.toLocaleLowerCase())) 
//                   .map((filterItems) => (
//                     <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
//                       <Card
//                        foodName={filterItems.name}
//                        option= {filterItems .options[0]}

//                         description={filterItems.description}
//                         price={filterItems.price}
//                         imgSrc={filterItems.image}
//                       />
//                     </div>
//                   ))
//               ) : (
//                 <div>No items available in this category</div>
//               )}
//             </div>
//           ))
//         ) : (
//           <div>No categories available</div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Home;


//testing
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:4001/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo%26pid%3DApi&sp=1726581152T5065f1e21c702305841c4edd43a7939b27a8f5c5681be61952df1d1231a804f2"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

     
      <div className="container">
  <div className="row">
    {foodCat.length > 0 ? (
      foodCat.map((category, index) => (
        <div key={index} className="row mb-3">
          <div className="fs-3 m-3">{category.CategoryName}</div>
          <hr />
          {foodItem.length > 0 ? (
            foodItem
              .filter(
                (item) =>
                  item.CategoryName === category.CategoryName &&
                  item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((filterItems) => (
                <Card
                  key={filterItems._id}
                  foodItem={filterItems}
                  option={filterItems.options[0]}
                  
                 
                />
              ))
          ) : (
            <div>No items available in this category</div>
          )}
        </div>
      ))
    ) : (
      <div>No categories available</div>
    )}
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Home;
