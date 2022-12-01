import React from "react";
import cData from "./ServiceCard";

const ncard = (val) => {
  return <Card imageLink={val.image} discription={val.discription} />;
};

export default function Service() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            <img
              src="https://cdn.pixabay.com/photo/2016/02/24/17/15/service-1220327_1280.png"
              className="img-fluid"
              alt="jpg"
            />
          </div>
        </div>

        <div className="row my-5">{cData.map(ncard)}</div>
      </div>
    </>
  );
}

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-12">
        <div className="card m-2" style={{ width: 18 + "rem" }}>
          <img src={props.imageLink} className="card-img-top" alt=".." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn" style={{backgroundColor: 'rgb(133, 192, 229)'}}>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
