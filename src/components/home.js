import React, { Component } from 'react';

import Header from './header';

class Home extends Component {
    render() {
        return (
            <div className="home">
                { Header('Bottega Madlibs', 'fill out the fields below to make your own story') }
            </div>
        )
    }
}

export default Home;