import React, { Component } from 'react'
import axios from 'axios'

import { Icon, InlineIcon } from '@iconify/react';
import jediOrder from '@iconify/icons-fa-brands/jedi-order';
import sithIcon from '@iconify/icons-fa-brands/sith';



export default class FormData extends Component {
    state = {
        starships: []
    }

    componentDidMount() {
        axios.get('https://swapi.dev/api/starships').then((response) => {
            this.setState({
                starships: response.data.results
            })
        })
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

    render() {
        console.log(this.state.starships)
        return (
            <div>
                <form>
                    <label>Enter your name, Pilot:</label><br />
                    <input type="text" /><br />
                    <label>Enter your departure date:</label><br />
                    <input type="date" />
                    <br />
                    <label>Choose you allegiance:</label>
                    {/* Criteria: Allow user to only select one radio input -
                    Solution: Sharing names for radio inputs creates a group and allows only one to be selected */}
                    <input type="radio" name="allegiance" value="Jedi" /> <Icon icon={jediOrder} width="1em" height="1em" />Jedi
                    <input type="radio" name="allegiance" value="Sith" /> <Icon icon={sithIcon} width="1em" height="1em" /> Sith
                    <br />
                    <label>Select your starship:</label>
                    <select>
                        {this.optionsRender()}
                    </select>
                </form>
            </div>
        )
    }
}
