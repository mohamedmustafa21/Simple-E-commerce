import React from "react";
import qust from "./assets/Questions-rafiki.png";
function Contact() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 py-4 my-4">
            <h1 className="text-center ">Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img src={qust} alt="Conact Us" height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleForm"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Sent Massege</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
