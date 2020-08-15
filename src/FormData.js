import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'


export default class FormData extends Component {
    state = {
        show: false,
        starships: [],
        planets: [],
        name: '',
        email: '',
        date: '',
        phone: '',
        allegiance: '',
        vehicle: '',
        Tatooine: false,
        Alderaan: false,
        YavinIV: false,
        Hoth: false,
        Dagobah: false,
        Bespin: false,
        Endor: false,
        Naboo: false,
        Coruscant: false,
        Kamino: false,
        final: ''

    }

    handleChange = (event) => {
        const { name, value, type } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: true
            })
            :
            this.setState({
                [name]: value
            })
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
        setTimeout(() => {
            this.setState({
                show: true
            })
        }, 1500)

    }

    optionsRender = () => {                     //Renders options once axios call gets results
        const { starships } = this.state
        return (
            starships &&
            starships.length > 0 &&
            starships.map(ship => {
                return <option value={ship.name}>{ship.name}</option>
            })
        )
    }

    render() {
        const { show } = this.state
        return (
            show &&
            <Form
                handleChange={this.handleChange}
                optionsRender={this.optionsRender}
                data={this.state}
            />
        )
    }
}
