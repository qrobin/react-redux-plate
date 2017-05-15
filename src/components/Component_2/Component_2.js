import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './component_2.styl';

export default class extends Component {
    render() {
        return (
            <div>
                <h1 className='some'>Component 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt illum eos quia consequuntur ab quae unde, voluptas, dolor inventore laudantium, eum provident maxime eveniet? Sit, quis suscipit excepturi! Debitis, porro.</p>
                <Link to='/'>Go home</Link>
            </div>
        );
    }
}