import React from 'react'
import Checkbox from './Checkbox'


import { Icon } from '@iconify/react';
import jediOrder from '@iconify/icons-fa-brands/jedi-order';
import sithIcon from '@iconify/icons-fa-brands/sith';

export default function Form(props) {
    return (
        <div>
            <h1>Pilot Pre-Flight Form</h1>
            <form>
                {/* Text input criteria */}
                <div className="topDiv">
                    <div><label>Enter your name, Pilot:</label><br />
                        <input type="text" /></div>
                    <div><label>Enter your departure date:</label><br />
                        <input type="date" /></div>
                </div>
                <hr />

                {/* Criteria: Allow user to only select one radio input -
                    Solution: Sharing names for radio inputs creates a group and allows only one to be selected */}
                <label>Choose your allegiance:</label>
                <br />
                <input type="radio" name="allegiance" value="Jedi" /> <Icon icon={jediOrder} width="1em" height="1em" />Jedi
                    <br />
                <input type="radio" name="allegiance" value="Sith" /> <Icon icon={sithIcon} width="1em" height="1em" /> Sith
                    <hr />

                {/* Select Tag criteria*/}
                <label>Select your starship:</label>
                <select>
                    {props.optionsRender()}
                </select>
                <hr />
                {/* Checkbox and Textarea criteria */}
                <div className="bottomDiv">
                    <div>
                        <label>Choose your targets: ( Select all that apply )</label>
                        {props.data.planets.map(planet => {
                            return <Checkbox name={planet.name} />
                        })}
                    </div>

                    <div>
                        <label>Final Words (in case of emergency)</label> <br />
                        <textarea />
                    </div>
                </div>
                <button>Submit Form</button>
            </form>
        </div>
    )
}
