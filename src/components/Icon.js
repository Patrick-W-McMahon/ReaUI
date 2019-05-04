import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const FA = ({ icon, size, type, spin }) => <i className={`${type} fa-${icon}${size?` fa-${size}`:''}${spin ? ' fa-spin' : ''}`} ></i>;
FA.displayName = "FontAwesome";
FA.defaultProps = {
    type: 'fab',
    span: false
};
FA.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    type: PropTypes.string,
    spin: PropTypes.bool
};

class Icon extends Component {
    static FA = FA;
    render() {
        const { children } = this.props;
        return (
            <Fragment>
                {React.Children.map(children, child => {
                    if(child.displayName.includes(['FontAwesome'])) {
                        return React.cloneElement(child);
                    }
                })}
            </Fragment>
        );
    }
}
export default Icon;