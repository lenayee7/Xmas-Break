import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

class Main extends Component {

    render() {
        return(
            <div>
                <Header />
                <Home events={this.props.events} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main);