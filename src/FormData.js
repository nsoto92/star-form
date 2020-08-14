import React, { Component } from 'react'
import axios from 'axios'
import Checkbox from './Checkbox'

import { Icon, InlineIcon } from '@iconify/react';
import jediOrder from '@iconify/icons-fa-brands/jedi-order';
import sithIcon from '@iconify/icons-fa-brands/sith';



export default class FormData extends Component {
    state = {
        starships: [],
        planets: []
    }

    componentDidMount() {
        axios.all([
            axios.get('https://swapi.dev/api/starships'),
            axios.get('https://swapi.dev/api/planets')
        ])
            .then(axios.spread((shipRes, planetRes) => {
                this.setState({
                    starships: shipRes.data.results,
                    planets: planetRes.data.results
                })
            }))

    }

    optionsRender = () => {                     //Renders options once axios call gets results
        const { starships } = this.state
        return (
            starships &&
            starships.length > 0 &&
            starships.map(ship => {
                return <option>{ship.name}</option>
            })
        )
    }

    checkBoxRender = () => {                     //Renders checkboxes once axios call gets results
        const { planets } = this.state
        return (
            planets &&
            planets.length > 0 &&
            planets.map(planet => {
                return <input type="checkbox" />
            })
        )
    }

    render() {
        console.log(this.state.starships)
        return (
            <div>
                <h1>Pilot Pre-Flight Form</h1>
                <form>
                    <div className="topDiv">
                        <div><label>Enter your name, Pilot:</label><br />
                            <input type="text" /></div>
                        <div><label>Enter your departure date:</label><br />
                            <input type="date" /></div>
                    </div>
                    <hr />
                    <label>Choose your allegiance:</label>
                    {/* Criteria: Allow user to only select one radio input -
                    Solution: Sharing names for radio inputs creates a group and allows only one to be selected */}
                    <br />
                    <input type="radio" name="allegiance" value="Jedi" /> <Icon icon={jediOrder} width="1em" height="1em" />Jedi
                    <br />
                    <input type="radio" name="allegiance" value="Sith" /> <Icon icon={sithIcon} width="1em" height="1em" /> Sith
                    <hr />
                    <label>Select your starship:</label>
                    <select>
                        {this.optionsRender()}
                    </select>
                    <hr />
                    <div className="bottomDiv">
                        <div>
                            <label>Choose your targets: ( Select all that apply )</label>
                            {this.state.planets.map(planet => {
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
}
