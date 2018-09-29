import React from 'react';
import PropTypes from 'prop-types';

export class List extends React.Component {
    render() {
        const strings = this.props.strings.map((s, i) => <div key={i}>{s}</div>)
        return <div>
            {strings}
        </div>;
    }
}
List.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string)
};