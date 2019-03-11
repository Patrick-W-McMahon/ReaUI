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
        const { children } = this.props;
        const { tabIndex } = this.state;
        const tabs = React.Children.map(children, (child, index) => {
            switch(child.type.displayName) {
                case "Ribbon Tab":
                    return React.cloneElement(child, { onClick: () => this.tabSelection(index), renderType: 'tab' });
            }
            return child;
        });
        return (
            <div className="nav nav-ribbon">
                <div className="tabs">
                    {tabs}
                </div>
                <div className="content">
                    {children[tabIndex]}
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