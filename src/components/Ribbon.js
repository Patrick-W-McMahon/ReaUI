import React, { component } from 'react';
import PropTypes from 'prop-types';

import RibbonTab from './compound/RibbonTab';

class Ribbon extends component {
    constructor(props){
        super(props);
        this.state = {
            tabIndex: 0
        };
        this.tabSelection = this.tabSelection.bind(this);
    }

    tabSelection(tabIndex) {
        this.setState({ tabIndex });
    }

    static Tab = RibbonTab;

    render() {
        const { tabIndex } = this.state;
        const tabs = React.Children.map(this.props.children, (child, index) => {
            switch(child.type.displayName) {
                case "Ribbon Tab":
                    return React.cloneElement(child, { onClick: () => this.tabSelection(index) });
            }
            return child;
        });
        return (
            <div className="nav nav-ribbon">
                <div className="tabs">
                    {tabs}
                </div>
                <div className="content">
                    {props.children[tabIndex].children}
                </div>
            </div>
        );
    }
};

Ribbon.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }))
};
Ribbon.Tab = RibbonTab;
export default Ribbon;