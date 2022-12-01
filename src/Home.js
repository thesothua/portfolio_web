import React from "react";

export default function Home() {
  return (
    <section className="container-fluid mb-4">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="row">
            <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center">
              <h2>Welcome to our Portfolio <span style={{color: 'rgb(133, 192, 229)'}}>Praveen suthar</span></h2>
              <p>We are telented web developer</p>
              <button className="btn get-started-btn" style={{backgroundColor: 'rgb(133, 192, 229)'}}>Get start</button>
            </div>
            <div className="col-md-6 p-4 order-md-2">
              <img src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png" className="img-fluid" alt="Jpg" style={{width : "100%"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
