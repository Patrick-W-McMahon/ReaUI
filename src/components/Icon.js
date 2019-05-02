import React, { Component, Fragment } from 'react';

const FA = ({ icon, size, type }) => <i className={`${type ? type : 'fab'} fa-${icon}${size?` fa-${size}`:''}`} ></i>;
FA.displayName = "FontAwesome";

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