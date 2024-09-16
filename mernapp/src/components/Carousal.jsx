// import React from 'react'

// export default function Carousal() {
//   return (
//     <div>
//       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8MJgw49NgTeBLs1BFzqS0gHaHa%26pid%3DApi&sp=1726517013T95f688f53c497d803ae0b9d8fcb5574de1ad42fb84c03f7a17cc0dd6134e8fdf      " className="d-block w-100 "  style = {{filter: "brightness(30%)"}} alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FDXZoAJoKTPS7BKEyk4H-Gw3puhc%3D%2F6016x4016%2Ffilters%3Afill%28auto%2C1%29%2Fsteamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg&sp=1726517341Tec018a34e20855cb123ac3ec8a7c6857820290a6e66669d9b1fdcdcf198fde4f" className="d-block w-100"  style = {{filter: "brightness(30%)"}} alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.78jL1hpZAa58-b0S6dt6TQHaE8%26pid%3DApi&sp=1726517013T7f89ffd23b6f168cb1629122c8551009b0a94958338d9a9d381177bf4dbf9527" className="d-block w-100"  style = {{filter: "brightness(30%)"}} alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//   )
// }


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// Ensure Bootstrap JS and dependencies are included in public/index.html

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel" // For Bootstrap 5, use 'data-ride="carousel"' for Bootstrap 4
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8MJgw49NgTeBLs1BFzqS0gHaHa%26pid%3DApi&sp=1726517013T95f688f53c497d803ae0b9d8fcb5574de1ad42fb84c03f7a17cc0dd6134e8fdf"
              className="d-block w-100"
              style={{ filter: 'brightness(30%)' }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FDXZoAJoKTPS7BKEyk4H-Gw3puhc%3D%2F6016x4016%2Ffilters%3Afill%28auto%2C1%29%2Fsteamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg&sp=1726517341Tec018a34e20855cb123ac3ec8a7c6857820290a6e66669d9b1fdcdcf198fde4f"
              className="d-block w-100"
              style={{ filter: 'brightness(30%)' }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.78jL1hpZAa58-b0S6dt6TQHaE8%26pid%3DApi&sp=1726517013T7f89ffd23b6f168cb1629122c8551009b0a94958338d9a9d381177bf4dbf9527"
              className="d-block w-100"
              style={{ filter: 'brightness(30%)' }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
