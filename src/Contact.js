import React from "react";

export default function Contact() {
  return (
 <div className="section_div">
    <section className="container-fluid">
      <div className="row">
        <div className="col-sm-12 text-center my-3">
          <h2>GET IN TOUCH</h2>
          <p>Phone: +9783410487</p>
          <p>Email: praveensuthar9553@gmai.com</p>
          <p>Address: sev kedar socity , chanladia Ahmedabad</p>
        </div>
      </div>
      <div className="row my-5">
        <form action="" className="col-md-10 m-auto">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label">
                  Your Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-2">
                <label for="inputEmail" className="form-label">
                  Your Email
                </label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              <div className="mb-2">
                <label for="inputPhone" className="form-label">
                  Your Phone Number
                </label>
                <input type="tel" className="form-control" id="inputPhone" />
              </div>
            </div>
            <div className="col-md-6">
              <label for="message" className="form-label">
                Your Message
              </label>
              <textarea
                rows="7"
                id="message"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
    </div>
  );
}
