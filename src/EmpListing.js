import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const EmpListing = () => {
    const [empData, empDataChange] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            // alert(resp.getMessage())
            empDataChange(resp);
        }).catch((error) => {
            alert(error.getMessage());
        })
    }, []);

    return (<div className="container">
        <div className="card">
            <div className="card-title">
                <h2> Employee Listing </h2>
            </div>
            <div className="card-body">

                <div className="pb-4">
                    <Link className="btn btn-primary">Add New (+) </Link>
                </div>

                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {empData &&
                        empData.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td className="">
                                    <a className="btn btn-success">Edit</a>
                                    <a className="btn btn-danger">Remove</a>
                                    <a className="btn btn-primary">Details</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}

export default EmpListing;