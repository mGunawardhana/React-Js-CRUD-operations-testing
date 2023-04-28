import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const EmpEdit = () => {
    const {empid} = useParams();
    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                // alert(resp.getMessage())
                // empdatachange(res);
            })
            .catch((error) => {
                alert(error.getMessage());
            });
    }, []);
    return <div></div>;
};

export default EmpEdit;
