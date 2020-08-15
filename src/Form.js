import React from 'react'
import Checkbox from './Checkbox'


import { Icon } from '@iconify/react';
import jediOrder from '@iconify/icons-fa-brands/jedi-order';
import sithIcon from '@iconify/icons-fa-brands/sith';

export default function Form(props) {
    return (
        <div className='container'>
            <h1>Pilot Pre-Flight Form</h1>
            <hr />
            <form>
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
                        />
                        <Icon icon={jediOrder} width="1em" height="1em" /> Jedi
                    <br />

                        <input
                            type="radio"
                            name="allegiance"
                            value="Sith"
                            checked={props.data.allegiance === "Sith"}
                            onChange={props.handleChange}
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
                        {props.data.planets.map(planet => {
                            return <Checkbox
                                name={planet.name}
                                data={props.data} />
                        })}
                    </div>

                    <div>
                        <label>
                            Final Words (in case of emergency)
                            </label> <br />
                        <textarea
                            name="final"
                            value={props.data.final}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <button>Submit Form</button>
            </form>
            <h1>{props.data.name}</h1>
            <h1>{props.data.email}</h1>
            <h1>{props.data.date}</h1>
            <h1>{props.data.phone}</h1>
            <h1>{props.data.allegiance}</h1>
            <h1>{props.data.vehicle}</h1>
            <h1>{props.data.final}</h1>
            <p>Tatooine: {props.data.Tatooine ? "Yes" : "No"}</p>
        </div>
    )
}
