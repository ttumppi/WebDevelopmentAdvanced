export const GetInputComponent = ({label}) => {

    const inputField = <div>
        <label className="input-label">{label}</label>
        <input type="text"></input>
    </div>

    return inputField
}