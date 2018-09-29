import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './main';

onload = function() {
    ReactDOM.render(<Main />, document.getElementById('app'));
}