import React from "react";

function SignUp() {
  return (
    <div>

    
      <button
        type="button"
        className=" btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModel"
      >
        <span className="fa fa-user-plus me-2"></span> Register
      </button>

      <div
        className="modal fade"
        id="signupModel"
        tabIndex="-1"
        aria-labelledby="signupModel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModel">
                Sign Up{" "}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign Up With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-1"></span> Sign Up With
                Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    User Name :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Email Addres :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default SignUp;
