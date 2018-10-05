// Sample component with prop-types props validation
import React from 'react';
import PropTypes from 'prop-types';

export const Suma = ({a,b}) => {
    return <p>{a+b}</p>
}

Suma.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number
}
