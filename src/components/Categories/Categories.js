import { Component } from 'react';

import * as petsService from '../services/petsService'

import Pet from '../Pet/Pet';
import CategoriNavigation from './CategoriNavigation/CategoriNavigation';

class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: [],
            currentCategory: 'All'
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(data => this.setState({ pets: data }))
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category
        if(prevProps.match.params.category == category) {
            return
        }

        petsService.getAll(category)
            .then(data => this.setState({ pets: data, currentCategory: category}))
    }

    render() {
        return (
            <section className="dashboard" >
                <h1>Dashboard</h1>

                <CategoriNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet key={x.id} {...x} />
                    )}
                </ul>
            </section>
        )
    }
}

export default Categories