import React from 'react'

import { Icon } from '@iconify/react';
import jediOrder from '@iconify/icons-fa-brands/jedi-order';
import sithIcon from '@iconify/icons-fa-brands/sith';

export default function Receipt(props) {
    return (
        <div className="receiptContainer">
            <h2>Show this form receipt to the mission director</h2>
            <div className="topDiv2">
                <div>
                    <label>Pilot:</label>
                    <p className="receiptP">{props.name}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <p className="receiptP" style={{ fontFamily: "helvetica" }}>{props.email}</p>
                </div>
                <div>
                    <label>Departure Date:</label>
                    <p className="receiptP">{props.date}</p>
                </div>
                <div>
                    <label>Squadron Phone:</label>
                    <p className="receiptP">{props.phone.slice(0, 3) + "-" + props.phone.slice(3, 6) + "-" + props.phone.slice(6)}</p>
                </div>
                <div>
                    <label>Allegiance:</label>
                    <p className="receiptP">{props.allegiance === "Jedi" ? <Icon icon={jediOrder} width="5em" height="5em" /> : <Icon icon={sithIcon} width="5em" height="5em" />}</p>
                </div>
                <div>
                    <label>Ship:</label>
                    <p className="receiptP">{props.vehicle}</p>
                </div>
                <div>
                    <label>Targets:</label>
                    <p className="receiptP">{props.Tatooine ? "- Tatooine" : null}</p>
                    <p className="receiptP">{props.Alderaan ? "- Alderaan" : null}</p>
                    <p className="receiptP">{props.YavinIV ? "- Yavin IV" : null}</p>
                    <p className="receiptP">{props.Hoth ? "- Hoth" : null}</p>
                    <p className="receiptP">{props.Dagobah ? "- Dagobah" : null}</p>
                    <p className="receiptP">{props.Endor ? "- Endor" : null}</p>
                    <p className="receiptP">{props.Naboo ? "- Naboo" : null}</p>
                    <p className="receiptP">{props.Coruscant ? "- Coruscant" : null}</p>
                </div>
                <div>
                    <label>Final Message:</label>
                    <p className="receiptP">{`"` + props.final + `"`}</p>
                </div>

            </div>

        </div>
    )
}
