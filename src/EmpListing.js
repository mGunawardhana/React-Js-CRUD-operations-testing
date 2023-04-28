import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
//tofu:
const EmpListing = () => {
    const [empData, empDataChange] = useState(null);
    const navigate = useNavigate();
    const LoadDetail = (id) => {
        navigate('/employee/detail/'+id);
    }

    const LoadEdit = (id) => {
        navigate('/employee/edit/'+id);
    }

    const RemoveFunction = (id) => {

    }


    useEffect(() => {
        fetch("http://localhost:8000/employee")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                // alert(resp.getMessage())
                empDataChange(resp);
            })
            .catch((error) => {
                alert(error.getMessage());
            });
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2> Employee Listing </h2>
                </div>
                <div className="card-body">
                    <div className="pb-4 divBtn">
                        <Link to="employee/create" className="btn btn-primary">Add New (+) </Link>
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
                            empData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td className="">
                                        <a onClick={() => {
                                            LoadEdit(item.id)
                                        }} className="btn btn-success">Edit</a>
                                        <a onClick={() => {
                                            RemoveFunction(item.id)
                                        }} className="btn btn-danger">Remove</a>
                                        <a onClick={() => {
                                            LoadDetail(item.id)
                                        }} className="btn btn-primary">Details</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmpListing;
