import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';

class Main extends Component {

    render() {
        return(
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

export default Main;