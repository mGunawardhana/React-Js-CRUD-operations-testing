import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
// const [empData, empDataChange] = useState(null);
const EmpDetails = () => {
    const {empid} = useParams();
    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                // alert(resp.getMessage())
                empdatachange(res);
            })
            .catch((error) => {
                alert(error.getMessage());
            });
    }, []);


    return <div>
        <div className="card" style={{textAlign: "left"}}>
            <div className="card-title">
                <h2>Employee Create</h2>
            </div>
            <div className="card-body">

            </div>
            {
                empdata &&
                <div>
                    <h1>The Employee name is: <b>{empdata.name}</b> ({empdata.id})</h1>
                    <h3>Contact Details</h3>
                    <h5>Email is :{empdata.name}</h5>
                    <h5>Phone is :{empdata.phone}</h5>
                    <Link className="btn btn-danger" to={"/"}>Back to Listening</Link>
                </div>
            }
        </div>
    </div>;
};

export default EmpDetails;
