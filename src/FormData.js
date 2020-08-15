import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'



export default class FormData extends Component {
    state = {
        show: false,
        starships: [],
        name: '',
        email: '',
        date: '',
        phone: '',
        allegiance: '',
        vehicle: '',
        targets: [],
        Tatooine: false,
        Alderaan: false,
        YavinIV: false,
        Hoth: false,
        Dagobah: false,
        Endor: false,
        Naboo: false,
        Coruscant: false,
        final: ''

    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            targets: [...prevState.targets,
            [{
                name: this.state.name,
                email: this.state.email,
                date: this.state.date,
                phone: this.state.phone,
                allegiance: this.state.allegiance,
                vehicle: this.state.vehicle,
                Tatooine: this.state.Tatooine,
                Alderaan: this.state.Alderaan,
                YavinIV: this.state.YavinIV,
                Hoth: this.state.Hoth,
                Dagobah: this.state.Dagobah,
                Endor: this.state.Endor,
                Naboo: this.state.Naboo,
                Coruscant: this.state.Coruscant,
                final: this.state.final
            }]]
        }))
        this.setState({
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
            Endor: false,
            Naboo: false,
            Coruscant: false,
            final: ''
        })
    }

    componentDidMount() {
        axios.get('https://swapi.dev/api/starships')
            .then((shipRes) => {
                this.setState({
                    starships: shipRes.data.results
                })
            })
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
        console.log(this.state.targets)
        const { show } = this.state
        return (
            show &&
            <div>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    optionsRender={this.optionsRender}
                    data={this.state}
                />
            </div>
        )
    }
}
