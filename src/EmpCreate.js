import React from "react";

const EmpCreate = () => {
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-">
          <div className="container">
            <div className="card-title">
              <h2>Employee Create</h2>
            </div>
            <div className="card-body">
              <div className="row">

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control"></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
