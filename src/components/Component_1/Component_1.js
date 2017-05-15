import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { someAction } from 'actions';

import './component_1.styl';


class Component_1 extends Component {
    _someAction = (e) => {
        e.preventDefault();
        this.props.someAction(Math.floor(Math.random() * 100));
    }

    render() {
        return (
            <div>
                <h1>Component 1</h1>
                <p>Press link to go to other route</p>
                <Link to='/some-path'>Go to some other path</Link>
                <p>{this.props.someData}</p>
                <a href='' onClick={this._someAction}>Dispatch</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    someData: state.someReducer.someData
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    someAction
}, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(Component_1);