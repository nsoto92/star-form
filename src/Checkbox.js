import React from 'react'

export const CheckBox = props => {
    return (
        <li>
            <input type="checkbox" /> {props.name}
        </li>
    )
}

export default CheckBox