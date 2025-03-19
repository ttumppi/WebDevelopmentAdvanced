import "bootstrap/dist/css/bootstrap.min.css"
import React, {useId} from "react";



export const InputComponent = ({label, value, onChange}) => {

    const inputID = useId();
    const inputField = <div className="col-md-y d-flex align-items--center">
        <label className="col-md-4 fw-bold" htmlFor={inputID}>{label} </label>
        <input className="form-control col-md-8" type="text" value={value} onChange={onChange} id={inputID}></input>
    </div>

    return inputField
}