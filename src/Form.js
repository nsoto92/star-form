import React from 'react'
import Receipt from './Receipt'

import { Icon } from '@iconify/react';
import jediOrder from '@iconify/icons-fa-brands/jedi-order';
import sithIcon from '@iconify/icons-fa-brands/sith';

export default function Form(props) {
    const readyReceipt = props.data.targets.map((i) => {
        if (props.data.targets.length > 0) {
            return (
                <Receipt
                    name={i[0].name}
                    email={i[0].email}
                    date={i[0].date}
                    phone={i[0].phone}
                    allegiance={i[0].allegiance}
                    vehicle={i[0].vehicle}
                    Tatooine={i[0].Tatooine}
                    Alderaan={i[0].Alderaan}
                    YavinIV={i[0].YavinIV}
                    Hoth={i[0].Hoth}
                    Dagobah={i[0].Dagobah}
                    Endor={i[0].Endor}
                    Naboo={i[0].Naboo}
                    Coruscant={i[0].Coruscant}
                    final={i[0].final}
                />
            )
        } else {
            return <p>You Lose</p>
        }
    })
    return (
        <div>
            <div className='container'>
                <h1>Pilot Pre-Flight Form</h1>
                <hr />
                <form onSubmit={props.handleSubmit}>
                    {/* Text input criteria */}
                    <div className="topDiv">
                        <div>
                            <label>Enter your name, Pilot:</label><br />
                            <input type="text"
                                name='name'
                                value={props.data.name}
                                onChange={props.handleChange}
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label>Enter your pilot-mail address:</label><br />
                            <input style={{ fontFamily: "helvetica" }}  //Star Jedi font-family does not recognize '@' character 
                                type="email"
                                name='email'
                                value={props.data.email}
                                onChange={props.handleChange}
                                placeholder="anakin@highground.com"
                            />
                        </div>
                        <div>
                            <label>Enter your departure date:</label><br />
                            <input
                                type="date"
                                name="date"
                                value={props.data.date}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div>
                            <label>Squadron Phone Number:</label><br />
                            <input
                                type="tel"
                                maxLength='10'
                                name='phone'
                                value={props.data.phone}
                                onChange={props.handleChange}
                                placeholder="0000000000"
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="midDiv">

                        {/* Criteria: Allow user to only select one radio input -
                    Solution: Sharing names for radio inputs creates a group and allows only one to be selected */}
                        <div>
                            <label>Choose your allegiance:</label>
                            <br />
                            <input
                                type="radio"
                                name="allegiance"
                                value="Jedi"
                                checked={props.data.allegiance === "Jedi"}
                                onChange={props.handleChange}
                                required
                            />
                            <Icon icon={jediOrder} width="1em" height="1em" /> Jedi
                    <br />

                            <input
                                type="radio"
                                name="allegiance"
                                value="Sith"
                                checked={props.data.allegiance === "Sith"}
                                onChange={props.handleChange}
                                required
                            />
                            <Icon icon={sithIcon} width="1em" height="1em" /> Sith
                    </div>

                        {/* Select Tag criteria*/}
                        <div>
                            <label>Select your starship:</label>
                            <select
                                value={props.data.vehicle}
                                name="vehicle"
                                onChange={props.handleChange}
                            >
                                <option value="">-- Select Your Ship --</option>
                                {props.optionsRender()}
                            </select>
                        </div>
                    </div>
                    <hr />

                    {/* Checkbox and Textarea criteria */}
                    <div className="bottomDiv">
                        <div>
                            <label>Choose your targets: ( Select all that apply )</label>
                            <hr />
                            <div>
                                <input
                                    type="checkbox"
                                    name="Tatooine"
                                    onChange={props.handleChange}
                                    checked={props.data.Tatooine}
                                /> Tattooine
                            <br />
                                <input
                                    type="checkbox"
                                    name="Alderaan"
                                    onChange={props.handleChange}
                                    checked={props.data.Alderaan}
                                /> Alderaan
                            <br />
                                <input
                                    type="checkbox"
                                    name="YavinIV"
                                    onChange={props.handleChange}
                                    checked={props.data.YavinIV}
                                /> Yavin IV
                            <br />
                                <input
                                    type="checkbox"
                                    name="Hoth"
                                    onChange={props.handleChange}
                                    checked={props.data.Hoth}
                                /> Hoth
                            <br />
                                <input
                                    type="checkbox"
                                    name="Dagobah"
                                    onChange={props.handleChange}
                                    checked={props.data.Dagobah}
                                /> Dagobah
                            <br />
                                <input
                                    type="checkbox"
                                    name="Endor"
                                    onChange={props.handleChange}
                                    checked={props.data.Endor}
                                /> Endor
                            <br />
                                <input
                                    type="checkbox"
                                    name="Naboo"
                                    onChange={props.handleChange}
                                    checked={props.data.Naboo}
                                /> Naboo
                            <br />
                                <input
                                    type="checkbox"
                                    name="Coruscant"
                                    onChange={props.handleChange}
                                    checked={props.data.Coruscant}
                                /> Coruscant
                            <br />
                            </div>
                        </div>

                        <div className="finalWords">
                            <label>
                                Final Words (click middle to compose) -
                            </label>
                            <br />
                            <textarea
                                name="final"
                                value={props.data.final}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    <button>Submit Form</button>
                    <br />
                    <p style={{ textAlign: 'center', color: '#ffd571', fontSize: '12px' }}>(Scroll for Receipt at Bottom)</p>
                </form>
            </div>
            {readyReceipt}
        </div>

    )
}
