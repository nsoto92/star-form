import React from 'react'

export default function Receipt(props) {
    return (
        <div className="receiptContainer">
            <h2>Show this form receipt to the mission director</h2>
            <div className="topDiv" style={{ marginLeft: "100px", marginTop: "50px", border: "1px solid #ffd571", padding: '15px' }}>
                <div>
                    <label>Pilot:</label>
                    <p>{props.name}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <p style={{ fontFamily: "helvetica" }}>{props.email}</p>
                </div>
                <div>
                    <label>Departure Date:</label>
                    <p>{props.date}</p>
                </div>
                <div>
                    <label>Squadron Phone:</label>
                    <p>{props.phone.slice(0, 3) + "-" + props.phone.slice(3, 6) + "-" + props.phone.slice(6)}</p>
                </div>
                <div>
                    <label>Allegiance:</label>
                    <p>{props.allegiance}</p>
                </div>
                <div>
                    <label>Ship:</label>
                    <p>{props.vehicle}</p>
                </div>
                <div>
                    <label>Targets:</label>
                    <p>{props.Tatooine ? "Tatooine" : null}</p>
                    <p>{props.Alderaan ? "Alderaan" : null}</p>
                    <p>{props.YavinIV ? "Yavin IV" : null}</p>
                    <p>{props.Hoth ? "Hoth" : null}</p>
                    <p>{props.Dagobah ? "Dagobah" : null}</p>
                    <p>{props.Endor ? "Endor" : null}</p>
                    <p>{props.Naboo ? "Naboo" : null}</p>
                    <p>{props.Coruscant ? "Coruscant" : null}</p>
                </div>
                <div>
                    <label>Final Message:</label>
                    <p>{`"` + props.final + `"`}</p>
                </div>

            </div>

        </div>
    )
}
