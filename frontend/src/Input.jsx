import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";

export const InputComponent = ({label, value, onChange}) => {

    const inputField = <div className="col-md-y d-flex align-items--center">
        <label className="col-md-4 fw-bold">{label}</label>
        <input className="form-control col-md-8" type="text" value={value} onChange={onChange}></input>
    </div>

    return inputField
}