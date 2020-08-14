import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'


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

    render() {
        return (
            <Form
                optionsRender={this.optionsRender}
                data={this.state}
            />
        )
    }
}
