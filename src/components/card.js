import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                {Input('color') }
                {Input('Plural Noun') }
                {Input('color') }
                {Input('color') }
                {Input('color') }

            </div>
        )
    }
}

export default Card;