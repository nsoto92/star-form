import React from 'react'

export const CheckBox = props => {
    return (
        <div>
            <input type="checkbox"
                name={props.name}
                onChange={props.handleChange}
            /> {props.name}
        </div>

    )
}

export default CheckBox