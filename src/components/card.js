import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            PluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);

    }

        handleInputChange(event); {
            this.setState({ [event.target.value]: event.target.value })
        }

        render() 
            return (
                <div className="card">
                    <h1>{this.state.color}</h1>
                    { Input('Color', this.state.color, this.handleInputChange, 'color')}
                    { Input('Plural Noun', this.state.PluralNoun, handleInputChange, 'PluralNoun')}
                </div>
            )
        }

        return (
            <div className="card">
            <h1>{this.state.color}</h1>
                {Input('color') }
                {Input('Plural Noun') };
            </div>
        )


export default Card;