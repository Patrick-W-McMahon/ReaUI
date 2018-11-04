import React from 'react';
import PropTypes from 'prop-types';

const Conditional = props => !!props.if && props.children;

Conditional.propTypes = {
    if: PropTypes.bool.isRequired,
    children: PropTypes.any
};

export default Conditional;