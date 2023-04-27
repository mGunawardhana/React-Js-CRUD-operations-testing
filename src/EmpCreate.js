import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const EmpCreate = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, name, email, phone, active);
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled
                        className="form-control"
                        onChange={(e) => idChange(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        value={name}
                        onChange={(e) => nameChange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => emailChange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => phoneChange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        type="checkbox"
                        className="form-check"
                        onChange={(e) => activeChange(e.target.checked)}
                      ></input>
                      <label className="form-check-label">Is Active </label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                      <Link to={"/"} className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
