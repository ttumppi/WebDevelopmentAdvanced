export const GetInputComponent = ({label, value, onChange}) => {

    const inputField = <div>
        <label className="input-label">{label}</label>
        <input type="text" value={value} onChange={onChange}></input>
    </div>

    return inputField
}