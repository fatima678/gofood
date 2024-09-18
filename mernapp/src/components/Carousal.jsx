import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex: "10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
      className="d-block w-100" 
      alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwJTIwaW1hZ2VzfGVufDB8fDB8fHww" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo%26pid%3DApi&sp=1726581152T5065f1e21c702305841c4edd43a7939b27a8f5c5681be61952df1d1231a804f2" 
      className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

